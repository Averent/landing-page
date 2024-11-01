const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'main.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime'],
              },
            },
          },
          {
            test: /\.scss$/,      
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
                'source-map-loader'
            ],
          }
        ],
      },
    // Adding Server
    devServer: {
      port: 3001,
      historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new Dotenv(),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    resolve: {
        fallback: {
            "process": require.resolve("process/browser")
        }
    }
};