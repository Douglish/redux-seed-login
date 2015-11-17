"use strict"

var Webpack = require('webpack');

var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules');
var START_PATH = path.resolve(SRC_PATH, 'start.jsx');

var DEV = JSON.parse(process.env.BUILD_DEV || 'true');

var plugins = [
  new Webpack.DefinePlugin({
    __DEV__: JSON.stringify(DEV),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
  }),
];

var jsxLoaders = DEV ? ['react-hot', 'babel'] : ['babel'];

module.exports = {
  entry: [
    'bootstrap/less/bootstrap.less',
    START_PATH
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // I highly recommend using the babel-loader as it gives you
      // ES6/7 syntax and JSX transpiling out of the box
      { test: /\.jsx?$/, loaders: jsxLoaders, exclude: [NODE_MODULES_PATH] },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },

  resolve: {
    root: SRC_PATH,
    extensions: ['', '.js', '.jsx']
  },

  plugins: plugins
};
