const path = require('path');



module.exports = {
  devtool: 'source-map',
  entry: {
    sol: [
      './src/index.js'
    ]
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    library: 'Sol',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};