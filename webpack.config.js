const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const token = [
  'a', '3', 'a', '5', '5', '6', '9', 'c', '6', '0', 'd',
  'b', '3', '0', '1', '5', 'f', '4', 'f', 'c', '0', 'd',
  'd', 'a', 'b', 'f', 'e', '6', '2', '6', 'a', 'a', '4',
  '5', '5', '4', '4', '7', '6', 'd'
];

module.exports = {
  context: path.resolve('./src'),
  entry: {
    app: ['./index.js']
  },
  output: {
    path: './docs',
    filename: 'bundle-[hash].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel?presets[]=es2015&presets[]=stage-0', exclude: /node_modules/ },
      { test: /\.pug$/, loader: 'pug-html' },
      { test: /\.html$/, loader: 'html?conservativeCollapse' },
      { test: /\.less/, loader: ExtractTextPlugin.extract({ loader: 'css!less?sourceMap' }) },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ loader: 'css?sourceMap' }) },
      { test: /\.(png|jpe?g|.gif)$/, loader: 'file?name=[path][name].[ext]' },
      { test: /\.(woff2?|ttf|eot|svg)(.*)?$/, loader: 'file?name=fonts/[name].[ext]' }
    ]
  },
  plugins: [
    new CleanPlugin(['docs']),
    new ExtractTextPlugin('[name]-[hash].css'),
    // new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      API: JSON.stringify('http://localhost:3000'),
      TOKEN: JSON.stringify(token.join(''))
    })
  ]
};
