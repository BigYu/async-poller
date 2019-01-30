const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'status-poller.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'status-poller',
    libraryTarget: 'amd',
  },
  // For local dev
  // mode: 'development',
};