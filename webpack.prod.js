const
    { merge } = require('webpack-merge'),
    // webpack = require('webpack'),
    common = require('./webpack.com.js'),
    FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map', //cheap-module-eval-source-map

    // plugins: [
    //     new FaviconsWebpackPlugin({
    //         logo: 'src/img/logo.org.png',
    //         prefix: "icon/",
    //         inject: true,
    //         mode: 'webapp',
    //         favicons: {
    //             appName: 'agentspec',
    //             appDescription: 'Martspec',
    //             developerName: 'AgentSpec',
    //             prefix: 'icon/',
    //             developerURL: null,             // prevent retrieving from the nearest package.json
    //             background: 'transparent',
    //             theme_color: '#d2fff7',         // Shown on new mac touch bar or Anroid task switcher.
    //             logging: false,                 // Print logs to console? `boolean`
    //             icons: {
    //                 android: true,              // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    //                 appleIcon: true,            // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    //                 appleStartup: true,         // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    //                 coast: true,                // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    //                 favicons: true,             // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    //                 firefox: true,              // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    //                 windows: true,              // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    //                 yandex: true                // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    //             }
    //         }
    //     }),
    // ]
});