
const path = require('path');   // node.js 에서 제공하는 전역모듈
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

// export
module.exports = {
  //js 등에서 .vue, .js라 확장자 안 붙이고 import 할수 있도록 설정
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '~' : path.resolve(__dirname, 'src'),
      'assets' : path.resolve(__dirname, 'src/assets')
    }
  },
  // 파일을 읽어들이는 진입점 설정 ( webpack에서는 js 파일을 진입점으로 설정)
  entry: './src/main.js',

  // 결과물(번들)을 반환하는 설정
  output:{
    // path, filename 디폴트로.. dist, main.js 이기에 정상적으로 생성됨.. 다른것을 원할때 설정..
    //path: path.resolve(__dirname, 'dist'),    // path.resolve ( 1, 2)  -- 1과2를 합쳐준다.
    //filename: 'main.js',
    clean : true    // build 시 기존꺼 지우고 새로 생성
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use : 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use:[
          // 순서 중요
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',     // 순서영향있음. sass 전에 넣어야함.
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test : /\.(png|jpe?g|gif|webp)$/,
        use:'file-loader'
      }
    ]
  },
  
  // 번들링 후 결과물의 처리 방식 등 다양한 플로그인들을 설정
  plugins : [
    // htmlplugin 으로 output을 생성할때 적용되어  main.js+index.html을 합쳐서 결과물 생성해준다
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'}
      ]
    }),
    new VueLoaderPlugin()
  ],

  devServer: {
    host: 'localhost'
  }
}