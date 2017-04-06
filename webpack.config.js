var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var SRC_CLIENT_JS_DIR = path.resolve(__dirname, 'src/client/js');
var SRC_SERVER_JS_DIR = path.resolve(__dirname, 'src/server/js');
var SRC_CLIENT_DIR = path.resolve(__dirname, 'src/client');
var SRC_STYLE_DIR = path.resolve(__dirname, 'src/client/style');

var htmlTemplate = new HtmlWebpackPlugin({
  template: SRC_CLIENT_DIR + '/index.html',
  filename: BUILD_DIR+'/index.html'
});

var config = {
  entry: {
    index: SRC_CLIENT_JS_DIR + '/index.jsx',
    server: SRC_SERVER_JS_DIR + '/server.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module : {
    rules : [
      {
        test: /\.scss$/,
        include: SRC_STYLE_DIR,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test : /\.js?/,
        include : SRC_CLIENT_JS_DIR,
        use : 'babel-loader'
      }
    ]
  },
  plugins: [
    htmlTemplate
  ]
};

module.exports = config;
