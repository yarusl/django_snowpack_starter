const path = require('path');
const source_path = path.resolve(__dirname, './frontend/build/');
const entry_path = path.resolve(source_path, './dist/index.js');
const dist_path = path.resolve(__dirname, './build');

module.exports = {
  entry: entry_path,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    publicPath: '/',
    path: dist_path,
    filename: 'index.js',
  }
};