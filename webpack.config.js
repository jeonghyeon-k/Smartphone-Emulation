const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const {resolve} = require('path')

module.exports = {
  mode : process.env.NODE_ENV || 'development',
  entry: {
    app: resolve(__dirname,'./src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, './dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: process.env.NODE_ENV === 'production' ? { 
        collapseWhitespace: true,
        removeComments: true,
    } : false,
    hash: true 
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
         options:{
           publicPath: resolve(__dirname, './dist/img'),
           name : "[name].[ext]?[hash]",
         }
      }
    ]
  },
  devServer:{
    host: 'localhost',
    port: 3000,
    historyApiFallback: true
  }
}