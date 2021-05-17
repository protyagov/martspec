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
        new HtmlWebpackPlugin({ template: './src/template/en/logmass.ejs', filename: 'logmass/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/electrolyte.ejs', filename: 'electrolyte/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/logvitamin.ejs', filename: 'logvitamin/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/logwaist.ejs', filename: 'logwaist/index.html', inject: 'body' }),

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
                { from: 'src/i18n/*.json', flatten: true, to: 'i18n' },
                { from: 'src/../robots.txt' },
                { from: 'src/../sitemap.xml' },
                { from: 'src/404.html' },
                { from: 'src/img/*.png', to: "img", flatten: true },
                { from: 'src/img/*.webp', to: "img", flatten: true },
                { from: 'src/img/*.jpg', to: "img", flatten: true },
                { from: 'src/img/icon', to: "icon", flatten: true },
                // { from: 'src/product', to: "product", flatten: false },
                // { from: 'src/product', to: "product", flatten: false },
            ],
            options: {
                concurrency: 100,
            },
        })
        // , new BundleAnalyzerPlugin()
    ].concat(...[...['ar', 'de', 'en', 'es', 'fr', 'hi', 'ja', 'pt', 'ru', 'zh'].map(x => [
        new HtmlWebpackPlugin({ template: `./src/template/${x}/main.ejs`, filename: x + '/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/logmass.ejs`, filename: x + '/logmass/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/electrolyte.ejs`, filename: x + '/electrolyte/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/logvitamin.ejs`, filename: x + '/logvitamin/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/logwaist.ejs`, filename: x + '/logwaist/index.html', inject: 'body' }),
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
                test: /\.less$/,
                loader: "less-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader?name=img/[name].[ext]']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader?name=font/[name].[ext]']
            },
            {
                test: /\.(t|j)sx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
        ]
    }
};