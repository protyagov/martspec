const
    path = require('path'),
    webpack = require('webpack'),
    // BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
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
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin.ejs', filename: 'vitamin/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/waistline.ejs', filename: 'waistline/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/bodyzinc.ejs', filename: 'bodyzinc/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/bodysize.ejs', filename: 'bodysize/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/emotion.ejs', filename: 'emotion/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/about.ejs', filename: 'about/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/mission.ejs', filename: 'mission/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/pp.ejs', filename: 'privacy-policy/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/team.ejs', filename: 'team/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_a.ejs', filename: 'vitamin/vitamin_a/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_d.ejs', filename: 'vitamin/vitamin_d/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_e.ejs', filename: 'vitamin/vitamin_e/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_k.ejs', filename: 'vitamin/vitamin_k/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b1.ejs', filename: 'vitamin/vitamin_b1/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b2.ejs', filename: 'vitamin/vitamin_b2/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b3.ejs', filename: 'vitamin/vitamin_b3/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b5.ejs', filename: 'vitamin/vitamin_b5/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b6.ejs', filename: 'vitamin/vitamin_b6/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b7.ejs', filename: 'vitamin/vitamin_b7/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b9.ejs', filename: 'vitamin/vitamin_b9/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b12.ejs', filename: 'vitamin/vitamin_b12/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_c.ejs', filename: 'vitamin/vitamin_c/index.html', inject: 'body' }),

        // --------------- Static Content EN Without Slash--------------- 
        new HtmlWebpackPlugin({ template: './src/template/en/bodymass.ejs', filename: 'bodymass.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/electrolyte.ejs', filename: 'electrolyte.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin.ejs', filename: 'vitamin.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/waistline.ejs', filename: 'waistline.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/bodyzinc.ejs', filename: 'bodyzinc.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/bodysize.ejs', filename: 'bodysize.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/emotion.ejs', filename: 'emotion.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/about.ejs', filename: 'about.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/mission.ejs', filename: 'mission.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/pp.ejs', filename: 'privacy-policy/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/team.ejs', filename: 'team.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_a.ejs', filename: 'vitamin/vitamin_a.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_d.ejs', filename: 'vitamin/vitamin_d.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_e.ejs', filename: 'vitamin/vitamin_e.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_k.ejs', filename: 'vitamin/vitamin_k.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b1.ejs', filename: 'vitamin/vitamin_b1.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b2.ejs', filename: 'vitamin/vitamin_b2.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b3.ejs', filename: 'vitamin/vitamin_b3.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b5.ejs', filename: 'vitamin/vitamin_b5.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b6.ejs', filename: 'vitamin/vitamin_b6.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b7.ejs', filename: 'vitamin/vitamin_b7.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b9.ejs', filename: 'vitamin/vitamin_b9.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_b12.ejs', filename: 'vitamin/vitamin_b12.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: './src/template/en/vitamin/vitamin_c.ejs', filename: 'vitamin/vitamin_c.html', inject: 'body' }),


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
                { from: 'CNAME' },
                { context: 'src/img/', from: '*.svg', to: "img" },
                { context: 'src/img/', from: '*.png', to: "img" },
                { context: 'src/img/', from: '*.webp', to: "img" },
                { context: 'src/img/', from: '*.jpg', to: "img" },
                { context: 'src/img/icon/', from: '*', to: "icon" },
                { context: 'src/img/apple_btn/', from: '*', to: "img/apple_btn" },
                { context: 'src/data/', from: '*.json', to: "data" },
            ],
            options: {
                concurrency: 100,
            },
        })
        // , new BundleAnalyzerPlugin()
    ].concat(...[...['ar', 'de', 'en', 'es', 'fr', 'hi', 'ja', 'pt', 'ru', 'zh', 'uk'].map(x => [
        new HtmlWebpackPlugin({ template: `./src/template/${x}/main.ejs`, filename: x + '/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodymass.ejs`, filename: x + '/bodymass/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/electrolyte.ejs`, filename: x + '/electrolyte/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin.ejs`, filename: x + '/vitamin/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/waistline.ejs`, filename: x + '/waistline/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodyzinc.ejs`, filename: x + '/bodyzinc/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodysize.ejs`, filename: x + '/bodysize/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/emotion.ejs`, filename: x + '/emotion/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/about.ejs`, filename: x + '/about/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/mission.ejs`, filename: x + '/mission/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/pp.ejs`, filename: x + '/privacy-policy/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/team.ejs`, filename: x + '/team/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_a.ejs`, filename: x + '/vitamin/vitamin_a/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_d.ejs`, filename: x + '/vitamin/vitamin_d/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_e.ejs`, filename: x + '/vitamin/vitamin_e/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_k.ejs`, filename: x + '/vitamin/vitamin_k/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b1.ejs`, filename: x + '/vitamin/vitamin_b1/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b2.ejs`, filename: x + '/vitamin/vitamin_b2/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b3.ejs`, filename: x + '/vitamin/vitamin_b3/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b5.ejs`, filename: x + '/vitamin/vitamin_b5/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b6.ejs`, filename: x + '/vitamin/vitamin_b6/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b7.ejs`, filename: x + '/vitamin/vitamin_b7/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b9.ejs`, filename: x + '/vitamin/vitamin_b9/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b12.ejs`, filename: x + '/vitamin/vitamin_b12/index.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_c.ejs`, filename: x + '/vitamin/vitamin_c/index.html', inject: 'body' }),
        // Without slash at the end
        new HtmlWebpackPlugin({ template: `./src/template/${x}/main.ejs`, filename: x + '.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodymass.ejs`, filename: x + '/bodymass.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/electrolyte.ejs`, filename: x + '/electrolyte.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin.ejs`, filename: x + '/vitamin.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/waistline.ejs`, filename: x + '/waistline.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodyzinc.ejs`, filename: x + '/bodyzinc.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/bodysize.ejs`, filename: x + '/bodysize.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/emotion.ejs`, filename: x + '/emotion.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/about.ejs`, filename: x + '/about.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/mission.ejs`, filename: x + '/mission.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/pp.ejs`, filename: x + '/privacy-policy.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/team.ejs`, filename: x + '/team.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_a.ejs`, filename: x + '/vitamin/vitamin_a.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_d.ejs`, filename: x + '/vitamin/vitamin_d.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_e.ejs`, filename: x + '/vitamin/vitamin_e.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_k.ejs`, filename: x + '/vitamin/vitamin_k.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b1.ejs`, filename: x + '/vitamin/vitamin_b1.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b2.ejs`, filename: x + '/vitamin/vitamin_b2.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b3.ejs`, filename: x + '/vitamin/vitamin_b3.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b5.ejs`, filename: x + '/vitamin/vitamin_b5.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b6.ejs`, filename: x + '/vitamin/vitamin_b6.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b7.ejs`, filename: x + '/vitamin/vitamin_b7.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b9.ejs`, filename: x + '/vitamin/vitamin_b9.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_b12.ejs`, filename: x + '/vitamin/vitamin_b12.html', inject: 'body' }),
        new HtmlWebpackPlugin({ template: `./src/template/${x}/vitamin/vitamin_c.ejs`, filename: x + '/vitamin/vitamin_c.html', inject: 'body' }),
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
                    test: /[\\/]node_modules[\\/](react|react-dom|bootstrap|scheduler|node-polyglot|@popperjs|get-intrinsic|es-abstract|object-keys|object-inspect)[\\/]/,
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