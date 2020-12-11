const
    { merge } = require('webpack-merge'),
    webpack = require('webpack'),
    common = require('./webpack.com.js');

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            __API_BASE_URL__: JSON.stringify("http://s-api.recruiter.reviews/"),
            __MAINTENANCE_MODE__: false,
            __IN_DEBUG__: JSON.stringify("Alex"),
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        port: 3000,
        disableHostCheck: true,
        historyApiFallback: true
    },
});
