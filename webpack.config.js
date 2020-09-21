const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실제 서비스 production
    devtool: 'eval',  // hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: './client.jsx',
    module: {   // loader
        rules: [
          {
            test: /\.jsx?/,
            loader:'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            }
          }
        ]
      },
    plugins:[new webpack.LoaderOptionsPlugin({debug: true})],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'App.js',
        publicPath: '/dist',
    },
    devServer: {
        contentBase: '.'
    }

}


/*
module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실제 서비스 production
  devtool: 'eval',
  resolve: {
      extensions: ['.js', '.jsx']
  },
  entry: {
      App: ['./client'],
  },  // 입력
  module: {
      rules: [
        {
          test: /\.jsx?/,
          loader:'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          }
        }
      ]
    },
  output: {
      filename: 'App.js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist',
  }, // 출력
  devServer: {
      contentBase: '.'
  }

}
*/