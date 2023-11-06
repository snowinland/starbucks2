const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
   //parcel index.html
   //파일을 읽어들이는 진입점
 entry:'./js/main.js',


 //결과물을 반환하는 설정
 output:{
   //  path: path.resolve(__dirname, 'public'),
   //  filename:'main.js',
    clean: true
 },

 module:{
   rules:[
      {
         test: /\.s?css$/,
         use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
         ]
      },
      {
         test:/\.js$/,
         use:[
            
         ]
      }
   ]
 },

 plugins:[
   new HtmlPlugin({
      template:'./index.html'
   }),
   new CopyPlugin({
      patterns:[
         { from:'static' }
      ]
   })
 ],

 devServer:{
   host:'localhost'
 }
}