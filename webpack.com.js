const
    path = require('path'),
    webpack = require('webpack'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    CopyPlugin = require('copy-webpack-plugin'),
    HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: '[name].[chunkhash:3].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: "/"
    },
    plugins: [
        // --------------- Static Content EN --------------- 
        new HtmlWebpackPlugin({ template: './src/template/en/main.ejs', filename: 'index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/bodymass.ejs', filename: 'bodymass/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/electrolyte.ejs', filename: 'electrolyte/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/logvitamin.ejs', filename: 'logvitamin/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/waistline.ejs', filename: 'waistline/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/bodyzinc.ejs', filename: 'bodyzinc/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/bodysize.ejs', filename: 'bodysize/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/emotion.ejs', filename: 'emotion/index.html', inject: 'body' }),

        // --------------- Static Content EN Without Slash--------------- 
        new HtmlWebpackPlugin({ template: './src/template/en/bodymass.ejs', filename: 'bodymass.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/electrolyte.ejs', filename: 'electrolyte.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/logvitamin.ejs', filename: 'logvitamin.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/waistline.ejs', filename: 'waistline.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/bodyzinc.ejs', filename: 'bodyzinc.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/bodysize.ejs', filename: 'bodysize.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/emotion.ejs', filename: 'emotion.html', inject: 'body' }),

        new HtmlWebpackInjectPreload({
            files: [{
                match: /.*\.woff2$/,
                attributes: { as: 'font', type: 'font/woff2', crossorigin: true }
            }]
        }),

        new CopyPlugin({
            patterns: [
                { context: 'src/i18n/', from: '*.json', to: 'i18n' },
                { from: 'src/../robots.txt' },
                { from: 'src/../sitemap.xml' },
                { from: 'src/html/404.html' },
                { from: 'src/html/pmail_22c30242162cf766f0b95cf7fe1e790e.html' },
                { context: 'src/img/', from: '*.svg', to: "img" },
                { context: 'src/img/', from: '*.png', to: "img" },
                { context: 'src/img/', from: '*.webp', to: "img" },
                { context: 'src/img/', from: '*.jpg', to: "img" },
                { context: 'src/img/icon/', from: '*', to: "icon" },
            ],
            options: {
                concurrency: 100,
            },
        })
        // , new BundleAnalyzerPlugin()
    ].concat(...[...['ar', 'de', 'en', 'es', 'fr', 'hi', 'ja', 'pt', 'ru', 'zh'].map(x => [
        new HtmlWebpackPlugin({ template: `./src/template/${x}/main.ejs`, filename: x + '/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodymass.ejs`, filename: x + '/bodymass/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/electrolyte.ejs`, filename: x + '/electrolyte/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/logvitamin.ejs`, filename: x + '/logvitamin/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/waistline.ejs`, filename: x + '/waistline/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodyzinc.ejs`, filename: x + '/bodyzinc/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodysize.ejs`, filename: x + '/bodysize/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/emotion.ejs`, filename: x + '/emotion/index.html', inject: 'body' }),
        // Without slash at the end
        new HtmlWebpackPlugin({ template: `./src/template/${x}/main.ejs`, filename: x + '.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodymass.ejs`, filename: x + '/bodymass.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/electrolyte.ejs`, filename: x + '/electrolyte.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/logvitamin.ejs`, filename: x + '/logvitamin.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/waistline.ejs`, filename: x + '/waistline.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodyzinc.ejs`, filename: x + '/bodyzinc.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodysize.ejs`, filename: x + '/bodysize.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/emotion.ejs`, filename: x + '/emotion.html', inject: 'body' }),
    ])]),
    //--------------------------------------------------------------------------------------------------------------------------------------------
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".jsx"],
        alias: {
            src: path.resolve('./src')
        }
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            maxAsyncRequests: 100,
            maxInitialRequests: 80,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/](react|react-dom|bootstrap|scheduler|node-polyglot|history*)[\\/]/,
                    name: "vendor"
                }
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(t|j)sx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
        ]
    }
};