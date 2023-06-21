const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const { src, dest, series } = require('gulp')
const babel = require('gulp-babel')
const less = require('gulp-less')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('gulp-cssnano')
const rename = require('gulp-rename')
const merge2js = require('merge2')
const through2 = require('through2')

const format = process.env.rollup_format
const outputDir = process.env.rollup_format === 'es' ? 'es' : 'lib'

function resolvePath(dir) {
    return path.resolve(__dirname, '../', dir)
}

// 这里的babel只需要最简单的配置即可,打包成es
const babelConfig = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: format === 'es' ? false : 'commonjs',
                loose: true,
            },
        ],
    ],
}

function resolve(dir) {
    const rootDir = path.resolve(__dirname, '../')
    return path.join(rootDir, dir)
}

function buildStyle() {
    // 保留less源文件
    if (outputDir === 'lib') {
        const styleLess = src('../packages/altria-ui/src/styles/*.less').pipe(dest(resolve(`${outputDir}/styles`)))
        const styleLess2 = src('../packages/altria-ui/src/**/style/*.less').pipe(dest(resolve(outputDir)))
        const styleLess3 = src('../packages/altria-ui/src/index.less').pipe(dest(resolve(outputDir)))
    }

    // 公共样式
    const commonCss = src('../packages/altria-ui/src/styles/*.less')
        .pipe(less())
        .pipe(postcss([autoprefixer()]))
        .pipe(cssnano())
        .pipe(dest(resolve(`${outputDir}/styles`)))

    // 组件的样式
    const componentCss = src('../packages/altria-ui/src/**/style/index.less')
        .pipe(less())
        .pipe(postcss([autoprefixer()]))
        .pipe(cssnano())
        .pipe(dest(resolve(outputDir)))

    // 组件样式依赖 js文件打包
    const cssJs = src('../packages/altria-ui/src/**/style/index.js')
        .pipe(babel(babelConfig))
        .pipe(
            through2.obj(function (file, encoding, next) {
                const content = file.contents.toString(encoding)
                // 导入的less，改成导入css
                if (format === 'cjs') {
                    file.contents = Buffer.from(
                        content
                            .replace(/\/style\/?'/g, "/style/css'")
                            .replace(/\.less/g, '.css')
                            .replace(/"use strict";/g, '')
                            .replace('\n', '')
                            .replace('\n', '')
                    )
                } else {
                    file.contents = Buffer.from(
                        content.replace(/\/style\/?'/g, "/style/css'").replace(/\.less/g, '.css')
                    )
                }
                this.push(file)
                next()
            })
        )
        .pipe(dest(resolve(outputDir)))

    // 所有组件的样式
    const wholeCss = src('../packages/altria-ui/src/index.less')
        .pipe(less())
        .pipe(postcss([autoprefixer()]))
        .pipe(cssnano())
        .pipe(dest(resolve(outputDir)))

    // 所有组件的样式，压缩 打包到dist目录
    const wholeMin = src('../packages/altria-ui/src/index.less')
        .pipe(less())
        .pipe(postcss([autoprefixer()]))
        .pipe(cssnano())
        .pipe(rename('altria.min.css'))
        .pipe(dest(resolve('dist')))

    return merge2js([commonCss, componentCss, cssJs, wholeCss, wholeMin])
}

gulp.task('style', () => {
    return merge2js([buildStyle()])
})

function start() {
    const path = resolvePath('packages/altria-icons/dist/css/altria-icons.less')
    let file = resolvePath('packages/altria-ui/src/icon/style/index.less')
    let content = fs.readFileSync(file, 'utf-8')
    let modifiedContent = content.replace('@altria/icons/dist/css/altria-icons.less', path)
    fs.writeFileSync(file, modifiedContent, 'utf-8')

    gulp.task('changeLessName', (done) => {
        modifiedContent = modifiedContent.replace(path, '@altria/icons/dist/css/altria-icons.less')
        fs.writeFileSync(file, modifiedContent, 'utf-8')
        done()
    })

    gulp.task('changeLibLessName', (done) => {
        if (outputDir === 'lib') {
            const path = resolvePath('packages/altria-icons/dist/css/altria-icons.less')
            const file = resolvePath('lib/icon/style/index.less')
            let content = fs.readFileSync(file, 'utf-8')
            let modifiedContent = content.replace(path, '@altria/icons/dist/css/altria-icons.less')
            fs.writeFileSync(file, modifiedContent, 'utf-8')
            done()
        } else {
            done()
        }
    })

    gulp.task('default', series('style', 'changeLessName', 'changeLibLessName'), () => {})
}

start()
