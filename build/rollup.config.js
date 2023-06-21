const fs = require('fs')
const path = require('path')
const { getBabelInputPlugin } = require('@rollup/plugin-babel')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const alias = require('@rollup/plugin-alias')
const vue = require('rollup-plugin-vue')
const babel = require('@rollup/plugin-babel')
const terser = require('rollup-plugin-terser')

const format = process.env.rollup_format
const outputDir = process.env.rollup_format === 'es' ? 'es' : 'lib'

function resolvePath(dir) {
    return path.resolve(__dirname, '../', dir)
}

const commonPlugins = [
    nodeResolve({
        extensions: ['.js', '.vue'],
    }),
    vue({
        css: false,
    }),
    babel({
        exclude: '**/node_modules/**',
        presets: ['@vue/babel-preset-jsx'],
    }),
    commonjs(),
]

function createESConfig(entry, outputFilePath, externals) {
    return {
        input: entry,
        output: {
            file: `${outputDir}/${outputFilePath}`,
            format: format,
            exports: 'named',
        },
        external: externals,
        plugins: commonPlugins,
    }
}

/**
 * 组件打包
 * @returns
 */
function collectComponents(collection) {
    const componentsDir = resolvePath('packages/altria-ui/src')
    const dirs = fs.readdirSync(componentsDir)
    dirs.forEach((componentName) => {
        // 其他地方会处理
        if (
            /.(js|less)$/.test(componentName) ||
            componentName === 'markdown' ||
            componentName === 'utils' ||
            componentName === 'mixins' ||
            componentName === 'styles'
        )
            return
        collection.push({
            entry: path.join(componentsDir, componentName, 'index.js'),
            // 直接放到lib目录下
            outputFile: path.join(componentName, 'index.js'),
        })
    })
}

/**
 * components中依赖的项目的模块
 */
function collectSrc(collection, dir) {
    const srcDir = resolvePath('packages/altria-ui/src/' + dir)
    const dirs = fs.readdirSync(srcDir)
    dirs.forEach((categoryName) => {
        // 比如 src/utils
        const fileName = path.join(srcDir, categoryName)
        collection.push({
            entry: fileName,
            outputFile: path.join(dir, categoryName),
        })
    })
}

/**
 * 按需加载的打包
 * @returns
 */
function getESConfigs() {
    const list = []
    collectComponents(list)
    collectSrc(list, 'mixins')
    collectSrc(list, 'utils')
    const externals = (id) => {
        return (
            /^vue$/.test(id) ||
            /^vue-runtime-helpers/.test(id) ||
            /^@babel\/runtime/.test(id) ||
            /^@babel\/helpers/.test(id) ||
            /^..\/.*/.test(id)
        )
    }

    let result = list.map(({ entry, outputFile }) => {
        return createESConfig(entry, outputFile, externals)
    })
    // 所有组件
    const entry = resolvePath('packages/altria-ui/src') + '/index.js'

    const indexExternals = (id) => {
        return id !== entry
    }
    result.push(createESConfig(entry, 'index.js', indexExternals))

    return result
}

/**
 * umd，导出所有的组件 unpkg，可直接用script引用
 * 打包出的有循环依赖，https://juejin.cn/post/6862635764981235719
 * 但此时(2022-08-18)并没有发现有beta的版本，最新版22.0.2问题依然存在
 * @returns
 */
function getUMDConfig() {
    const entry = resolvePath('packages/altria-ui/src') + '/index.js'
    return {
        input: entry,
        output: {
            name: 'altria',
            file: 'dist/altria.min.js',
            format: 'umd',
            sourcemap: true,
            exports: 'named',
            // 指名global.vue是外部依赖
            globals: {
                vue: 'Vue',
            },
        },
        external: ['vue'],
        // terser压缩代码
        plugins: commonPlugins.concat([
            getBabelInputPlugin({
                babelHelpers: 'bundled',
                babelrc: false,
                exclude: /node_modules/,
                presets: [['@babel/preset-env']],
                plugins: [
                    [
                        '@babel/plugin-transform-runtime',
                        {
                            helpers: false,
                        },
                    ],
                ],
            }),
            terser.terser(),
        ]),
    }
}

const esConfigs = getESConfigs()
const umdConfig = getUMDConfig()

module.exports = esConfigs.concat(umdConfig)
