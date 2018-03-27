const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log('col>',path.resolve(__dirname))
module.exports = {

  entry: './src/js/index.js',
  output:{
       filename:'bundle.js',
       path: path.resolve(__dirname,'public','js')
  },
  
  plugins: [
      new HtmlWebpackPlugin({
          filename:'../../index.html'
      })
  ],

  mode:'development'

}