const { resolve } = require('path')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '././' : './',
    productionSourceMap: process.env.NODE_ENV !== 'production',
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: [
                        'vue-loader',
                        {
                            loader: resolve(__dirname, 'loaders/md-loader/index.js'),
                        },
                    ],
                },
            ],
        },
    },
    pages: {
        pc: {
            entry: 'site/pc/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        },
        mobile: {
            entry: 'site/mobile/main.js',
            template: 'public/mobile.html',
            filename: 'mobile.html',
        },
    },
}
