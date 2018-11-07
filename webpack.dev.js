const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./src/public/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  watch: true,
  devtool: 'eval-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
});
