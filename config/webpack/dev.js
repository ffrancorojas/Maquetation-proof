const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const base = require('./base');
const helpers = require('./helpers');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: helpers.resolveFromRootPath('dist'),
    filename: '[name].js',
  },
  devServer: {
    host: 'localhost',
    port: 8081,
  },
  stats: 'errors-only',

  plugins: [
    new Dotenv({
      path: 'dev.env',
    }),
  ],
});
