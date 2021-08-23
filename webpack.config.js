const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const {resolve} = require('path')

module.exports = {
  mode : process.env.NODE_ENV || 'development',
  entry: {
    app: path.join(__dirname,'./src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, './src'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: process.env.NODE_ENV === 'production' ? { 
        collapseWhitespace: true,
        removeComments: true,
    } : false,
    hash: true 
    })
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
      }
    ]
  },
  devServer:{
    host: 'localhost',
    port: 3000,
    historyApiFallback: true
  }
}