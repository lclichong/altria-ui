module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                components: '@/components',
            },
        },
    },
    pages: {
        /**修改入口文件 */
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        },
    },
    publicPath: './',
};
