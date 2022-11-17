module.exports = {
    devServer: {
        hot: true,
        port: 8888,
    },
    configureWebpack: {
        resolve: {
            alias: {
                components: '@/components',
            },
        },
    },
    publicPath: './',
    pages: {
        /**修改入口文件 */
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        },
    },
}
