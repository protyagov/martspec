const { merge } = require("webpack-merge"),
    webpack = require("webpack"),
    common = require("./webpack.com.js");

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
        open: {
            app: {
                name: "google-chrome",
            },
        },
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
                            implementation: require("sass"),
                        },
                    },
                ],
            },
        ],
    },
});
