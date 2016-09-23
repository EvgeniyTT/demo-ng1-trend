const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      TOKEN: JSON.stringify('9a4bd6e9b4c1f57dfadab59d8845eb41fbac66d2')
    })
  ]
};
