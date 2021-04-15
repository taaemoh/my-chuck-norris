const path = require('path');

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.ts?/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
];

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/app/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  module: { rules },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  devServer: {
    contentBase: './',
    port: 5000,
    open: true,
    historyApiFallback: true,
  },
  mode: 'development',
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/app/index.html' }),
  ],
};
