const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_JS_DIR = path.resolve(__dirname, 'src/js');
const SRC_DIR = path.resolve(__dirname, 'src');
const SRC_STYLE_DIR = path.resolve(__dirname, 'src/style');

const extractLESS = new ExtractTextPlugin('[name].css');
const extractCSS = new ExtractTextPlugin('vendors.css');

const htmlTemplate = new HtmlWebpackPlugin({
  template: SRC_DIR + '/index.html',
  filename: BUILD_DIR+'/index.html'
});

module.exports = [{
  entry: {
    index: SRC_JS_DIR + '/index.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module : {
    rules : [
      {
        test: /\.css$/,
        use: extractCSS.extract(['css-loader'])
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.less$/,
        include: SRC_STYLE_DIR,
        use: extractLESS.extract(['css-loader', 'postcss-loader', 'less-loader'])
      },
      {
        test : /\.js?/,
        include : SRC_JS_DIR,
        use : ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [
    extractCSS,
    extractLESS,
    htmlTemplate
  ]
}];
