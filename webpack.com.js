const
    path = require('path'),
    webpack = require('webpack'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    CopyPlugin = require('copy-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


function arrayOfPages() {

}

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    devServer: {
        contentBase: './build'
    },
    output: {
        filename: '[name].[chunkhash:3].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: "/"
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            cssProcessorPluginOptions: { preset: ['default', { discardComments: { removeAll: true } }], }
        }),
        new MiniCssExtractPlugin({ filename: 'style.[chunkhash:3].css' }),


        // --------------- Static Content EN --------------- 
        new HtmlWebpackPlugin({ template: './src/template/en/main.ejs', filename: 'index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/bodymass.ejs', filename: 'bodymass/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/electrolyte.ejs', filename: 'electrolyte/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/logvitamin.ejs', filename: 'logvitamin/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/waistline.ejs', filename: 'waistline/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/bodyzinc.ejs', filename: 'bodyzinc/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/bodysize.ejs', filename: 'bodysize/index.html', inject: 'body' }),

        new HtmlWebpackInjectPreload({
            files: [{
                match: /.*\.woff2$/,
                attributes: { as: 'font', type: 'font/woff2', crossorigin: true },
            },
                // {
                //     match: /.\.[a-z-0-9]*.css$/,
                //     attributes: { as: 'style' },
                // },
            ]
        }),

        new CopyPlugin({
            patterns: [
                { context:'src/i18n/', from: '*.json',  to: 'i18n' },
                { from: 'src/../robots.txt' },
                { from: 'src/../sitemap.xml' },
                { from: 'src/404.html' },
                { context: 'src/img/', from: '*.svg', to: "img" },
                { context: 'src/img/', from: '*.png', to: "img" },
                { context: 'src/img/', from: '*.webp', to: "img"},
                { context: 'src/img/', from: '*.jpg', to: "img"},
                { context: 'src/img/icon/', from: '*', to: "icon"},
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
        new HtmlWebpackPlugin({ template: `./src/template/${x}/waistline.ejs`, filename: x + '/waist/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodyzinc.ejs`, filename: x + '/bodyzinc/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodysize.ejs`, filename: x + '/bodysize/index.html', inject: 'body' }),
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
                    //|get-intrinsic|has-symbols|object-assign|is-callable|for-each|es-abstract|component-emmiter|object-keys)
                    test: /[\\/]node_modules[\\/](react|react-dom|bootstrap|scheduler|node-polyglot|history*)[\\/]/,
                    name: "vendor"
                }
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            //hmr: process.env.NODE_ENV === 'development', // webpack 4 only
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
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