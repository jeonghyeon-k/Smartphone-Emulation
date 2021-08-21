const HtmlWebpackPlugin = require('html-webpack-plugin')

const {resolve} = require('path')

module.exports = {
  mode : process.env.NODE_ENV || 'development',
  entry: {
    app: resolve(__dirname,'./index.js')
  },

  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html', // output file name
      template: './index.html'  // template file name
    })
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader"
      }
    ]
  },
  devServer:{
    host: 'localhost',
    port: 3000,
    historyApiFallback: true
  }
}