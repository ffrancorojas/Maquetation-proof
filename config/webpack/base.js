const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');

module.exports = {
  context: helpers.resolveFromRootPath('src'),
  resolve: {
    alias: {
      assets: helpers.resolveFromRootPath("src/assets"),
      common: helpers.resolveFromRootPath("src/common"),
      components: helpers.resolveFromRootPath("src/components"),

    },
    extensions: ['.js', '.ts', '.tsx',],
  },
  entry: {
    app: ['regenerator-runtime/runtime', './index.tsx', "./styles.css"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
  ],
}
