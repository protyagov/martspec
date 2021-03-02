const
    path = require('path'),
    webpack = require('webpack'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    CopyPlugin = require('copy-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

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
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[chunkhash:3].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        }),

        // --------------- Static Content EN --------------- 
        new HtmlWebpackPlugin({ template: './src/template/en/main.ejs', filename: 'index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/main.ejs', filename: 'en/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/logmass.ejs', filename: 'logmass/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/logmass.ejs', filename: 'en/logmass/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/electrolyte.ejs', filename: 'electrolyte/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/electrolyte.ejs', filename: 'en/electrolyte/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/logvitamin.ejs', filename: 'logvitamin/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/logvitamin.ejs', filename: 'en/logvitamin/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/logwaist.ejs', filename: 'logwaist/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/logwaist.ejs', filename: 'en/logwaist/index.html', inject: 'body' }),

        // --------------- Static Content RU --------------- 
        new HtmlWebpackPlugin({ template: './src/template/ru/main.ejs', filename: 'ru/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/ru/logmass.ejs', filename: 'ru/logmass/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/ru/electrolyte.ejs', filename: 'ru/electrolyte/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/ru/logvitamin.ejs', filename: 'ru/logvitamin/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/ru/logwaist.ejs', filename: 'ru/logwaist/index.html', inject: 'body' }),
        // --------------- Static Content DE --------------- 

        new CopyPlugin({
            patterns: [
                { from: 'src/i18n/*.json', flatten: true, to: 'i18n' },
                { from: 'src/../robots.txt' },
                { from: 'src/../sitemap.txt' },
                { from: 'src/404.html' },
                { from: 'src/img/*.png', to: "img", flatten: true },
                { from: 'src/img/*.webp', to: "img", flatten: true },
                { from: 'src/img/icon', to: "icon", flatten: true },
                // { from: 'src/product', to: "product", flatten: false },
                // { from: 'src/product', to: "product", flatten: false },
            ],
            options: {
                concurrency: 100,
            },
        })
        //  , new BundleAnalyzerPlugin()
    ],
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
                    test: /[\\/]node_modules[\\/](react|react-dom|bootstrap|scheduler|node-polyglot|jquery|popper.js|history*|for-each|es-abstract|component-emmiter|object-keys)[\\/]/,
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