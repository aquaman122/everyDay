const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'gugudan-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: ['./client'],
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?/, // 정규표현식
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel',
      ],
      },
    }],
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],

  output: {
    path: path.join(__dirname, 'dist'), // 실 dist 경로는 따로. path.join 현재폴더
    filename: 'app.js',
    publicPath: '/dist',
  }, // 출력

  devServer: {
    devMiddleware: {publicPath: '/dist'},
    static: {directory: path.resolve(__dirname)},
    hot: true,
  }
};
