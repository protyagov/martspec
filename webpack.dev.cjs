const { merge } = require("webpack-merge"),
    webpack = require("webpack"),
    common = require("./webpack.com.cjs");

module.exports = merge(common, {
    mode: "development",
    plugins: [
        new webpack.DefinePlugin({
            __API_BASE_URL__: JSON.stringify("http://api.martspec.com/"),
            __MAINTENANCE_MODE__: false,
            __IN_DEBUG__: JSON.stringify("Merhn"),
        }),
    ],
    devtool: "eval-source-map",
    devServer: {
        port: 3000,
        allowedHosts: "all",
        hot: true,          // Enable Hot Module Replacement
        liveReload: true,   // Reload the page if HMR fails
        open: {
            app: {
                name: "google-chrome",
            },
        },
        proxy: [
            {
                context: ['/development'],
                target: 'http://localhost:3001', // The port we will give to Ladle
                changeOrigin: true,
            }],
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            api: "modern",
                            implementation: require("sass"),
                        },
                    },
                ],
            },
        ],
    },
});
