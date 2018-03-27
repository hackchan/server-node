const path = require('path')
console.log('col>',path.resolve(__dirname))
module.exports = {

  entry: './src/js/index.js',
  output:{
       filename:'bundle.js',
       path: path.resolve(__dirname,'public','js')
  },
  

  mode:'development'

}