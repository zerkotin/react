var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var SRC_JS_DIR = path.resolve(__dirname, 'src/client/js');
var SRC_CLIENT_DIR = path.resolve(__dirname, 'src/client');

var config = {
  entry: SRC_JS_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'index.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : SRC_JS_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: SRC_CLIENT_DIR + '/index.html',
      filename: BUILD_DIR+'/index.html'
    })
  ]
};

module.exports = config;
