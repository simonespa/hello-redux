const path = require('path');

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  },

  devtool: 'cheap-module-source-map',
  
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }

};