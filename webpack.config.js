var path = require('path')
  , merge = require('webpack-merge')
  , webpack = require('webpack')
  , ExtractTextPlugin = require("extract-text-webpack-plugin");

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var PUBLIC_PATH = path.join(ROOT_PATH, 'public/');

var common = {
  context: path.join(ROOT_PATH, 'app'),
  entry: [
    './main'
  ],
  output: {
    path: path.join(PUBLIC_PATH, 'assets/'),
    publicPath: '/assets/',
    filename: 'js/bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}

if (TARGET === 'start') {
  module.exports = merge(common, {
    debug: true,
    devtool: '#eval-source-map',

    entry: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
    ],

    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],

    module: {
      loaders: [
        {
          test: /\.js$/,
          include: path.join(ROOT_PATH, 'app'),
          loaders: ['monkey-hot', 'babel?stage=1']
        },
        {
          test: /\.css$/,
          loader: 'style!css',
          include: path.join(ROOT_PATH, 'app/stylesheets')
        },
        {
          test: /\.scss$/,
          loader: 'style!css!sass',
          include: path.join(ROOT_PATH, 'app/stylesheets')
        }
      ]
    }
  });
} else if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: path.join(ROOT_PATH, 'app'),
          loaders: ['babel?stage=1']
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style", "css"),
          include: path.join(ROOT_PATH, 'app/stylesheets')
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style", "css!sass"),
          include: path.join(ROOT_PATH, 'app/stylesheets')
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("./css/main.min.css")
    ]
  });
}