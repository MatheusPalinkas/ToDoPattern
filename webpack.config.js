const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const plugins = [
  new HtmlWebpackPlugin({
    minify: {
      html5: true,
      collapseWhitespace: true,
      removeComments: true,
    },
    hash: true,
    template: "./index.html",
    filename: "index.html",
  }),
  new MiniCssExtractPlugin({
    filename: "styles.css",
    chunkFilename: "[id].css",
  }),
  new optimizeCSSAssetsPlugin({
    cssProcessor: require("cssnano"),
    cssProcessorOptions: {
      discardComments: {
        removeAll: true,
      },
    },
    canPrint: true,
  }),
];

const rules = [
  {
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: "/public/path/to/",
        },
      },
      "css-loader",
    ],
  },
  {
    test: /\.html$/,
    use: ["html-loader"],
  },
  {
    test: /\.png$/,
    use: {
      loader: "file-loader",
      options: {
        name: "[path][name].[ext]",
      },
    },
  },
  {
    use: /\.js$/,
    exclude: /(node_modules|.(|png|css))/,
    use: {
      loader: "babel-loader",
    },
  },
];

module.exports = {
  entry: "./js/boot.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    contentBase: "dist",
  },
  plugins,
  module: {
    rules,
  },
};
