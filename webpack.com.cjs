const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackInjectPreload = require("@principalstudio/html-webpack-inject-preload");
const htmlPlugins = require("./webpack.routes.cjs");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;



module.exports = {
  entry: { app: "./src/index.tsx" },

  output: {
    filename: "[name].[chunkhash:3].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    clean: true,
  },

  plugins: [
    ...htmlPlugins,

    new HtmlWebpackInjectPreload({
      files: [
        {
          match: /.*\.woff2$/,
          attributes: {
            as: "font",
            type: "font/woff2",
            crossorigin: true,
          },
        },
      ],
    }),

    new CopyPlugin({
      patterns: [
        { context: "src/i18n/", from: "*.json", to: "i18n" },

        { from: "robots.txt" },
        { from: "1d497fbf494e42508c9a2efb761151fc.txt" },
        { from: "sitemap.xml" },
        { from: "src/html/404.html" },
        { from: "src/html/pmail_22c30242162cf766f0b95cf7fe1e790e.html" },
        { from: "CNAME" },
        { from: "src/img", to: "img" },
        { from: "src/data", to: "data" }
      ],
      options: { concurrency: 100 },
    }),

    // new BundleAnalyzerPlugin(),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".jsx"],
    alias: { "@": path.resolve("./src") }
  },

  optimization: {
    runtimeChunk: "single",

    splitChunks: {
      chunks: "all",
      minSize: 0,
      maxAsyncRequests: 100,
      maxInitialRequests: 80,
      enforceSizeThreshold: 50000,

      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: /[\\/]node_modules[\\/](react|react-dom|bootstrap|scheduler|node-polyglot|@popperjs|get-intrinsic|es-abstract|object-keys|object-inspect)[\\/]/,
          name: "vendor",
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        type: "asset/resource",
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },

      // {
      //   test: /\.(t|j)sx?$/,
      //   loader: "ts-loader",
      //   exclude: /node_modules/,
      // },

      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
                decorators: true,
              },
              target: "es2015",
              transform: {
                react: {
                  runtime: "automatic",
                },
              },
            },
          },
        },

      }
    ],
  },
};