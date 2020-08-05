const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
];

const rules = [
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.html$/,
    use: ["html-loader"],
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    use: {
      loader: "file-loader",
      options: {
        name: "[path][name].[ext]",
      },
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
