const path = require('path');

module.exports = {
  name: 'SUKWON',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./NumberBaseball'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
}