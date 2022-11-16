module.exports = {
    devServer: {
        hot: true,
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
