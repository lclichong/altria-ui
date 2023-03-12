import webfont from 'webfont'
import fse from 'fs-extra'
import { resolve } from 'path'
const { writeFile, ensureDir, removeSync, readdirSync } = fse
import { pathToFileURL } from 'url'

async function build() {
    const CWD = process.cwd()
    const DIST_DIR = resolve(CWD, 'dist')
    const FONTS_DIR = resolve(DIST_DIR, 'fonts')
    const CSS_DIR = resolve(DIST_DIR, 'css')
    const SVG_DIR = resolve(CWD, 'svg')

    const { default: config } = await import(
        pathToFileURL(resolve(CWD, 'config.js'))
    )
    const { fileName, fontName, namespace, base64 } = config

    const { ttf } = await webfont.default({
        files: `${SVG_DIR}/*.svg`,
        fontName: fileName,
        formats: ['ttf', 'woff', 'woff2'],
        fontHeight: 512,
        descent: 64,
    })

    removeSync(DIST_DIR)

    await Promise.all([ensureDir(FONTS_DIR), ensureDir(CSS_DIR)])

    const icons = readdirSync(SVG_DIR).map((svgName) => {
        const i = svgName.indexOf('-')
        const extIndex = svgName.lastIndexOf('.')
        return {
            name: svgName.slice(i + 1, extIndex),
            pointCode: svgName.slice(1, i),
        }
    })

    const iconNames = icons.map((iconName) => `  "${iconName.name}"`)

    const indexTemplate = `export default [
${iconNames.join(',\n')}
]`

    const cssTemplate = `\
@font-face {
  font-family: "${fontName}";
  src: url("${
      base64
          ? `data:font/truetype;charset=utf-8;base64,${ttf.toString('base64')}`
          : `${FONTS_DIR}/${fileName}-webfont.ttf`
  }") 
  format("truetype");
  font-weight: normal; 
  font-style: normal;
}

.${namespace}--set {
  font-family: "${fontName}";
}

${icons
    .map((icon) => {
        return `.${namespace}-${icon.name}::before {
  content: "\\${icon.pointCode}";
}`
    })
    .join('\n\n')}
`
    await Promise.all([
        writeFile(resolve(FONTS_DIR, `${fileName}-webfont.ttf`), ttf),
        writeFile(resolve(DIST_DIR, 'index.js'), indexTemplate),
        writeFile(resolve(CSS_DIR, `${fileName}.less`), cssTemplate),
        writeFile(resolve(CSS_DIR, `${fileName}.css`), cssTemplate),
    ])

    console.log('build success!')
}

build()
