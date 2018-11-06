const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      title: "Development"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  watch: true,
  devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
});
