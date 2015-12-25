var path = require('path');

module.exports = {
  entry: './src/app.js',

  output: {
    path: __dirname + '/',
    filename: 'build.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, './src'),
          path.resolve(__dirname, '../lib'),
          path.resolve(__dirname, './node_modules/ramda'),
          path.resolve(__dirname, './node_modules/react'),
          path.resolve(__dirname, './node_modules/react-dom')
        ],
        loader: 'babel'
      }
    ]
  },

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'better-hsv': path.join(__dirname, '..', 'lib/index.js')
    },
  },
  devtool: 'inline-source-map',

  watch: true,
  debug: true,
};
