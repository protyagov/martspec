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
        new HtmlWebpackPlugin({
            template: './src/index.template.en.ejs',
            title: 'Recruiter Reviews',
            // chunksSortMode: 'auto',
            filename: 'index.html',
            inject: "head",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/i18n/*.json',
                    flatten: true,
                    to: 'i18n'
                },                
                { from: 'src/../robots.txt' }
            ],
            options: {
                concurrency: 100,
            },
        })
        // , new BundleAnalyzerPlugin()
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
                react: {
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/](react|react-dom|scheduler|react-is|react-router|react-router-dom|prop-types|react-rating-stars-component|react-code-input|react-meta-tags)[\\/]/,
                    name: "react"
                },
                app_lazy: {
                    test: /(private-policy.tsx)|([\\/]src[\\/]email)|(react-dom-server*)/,
                    name: "app.lazy"
                },
                vendor: {
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/](bootstrap|toastr|superagent|date-fns|node-polyglot|popper.js|history*|for-each|es-abstract|component-emmiter|object-keys)[\\/]/,
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