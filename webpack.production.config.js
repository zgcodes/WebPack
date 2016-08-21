var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry:{
    app: path.resolve(APP_PATH, 'index.js'),
    //添加要打包在vendors里面的库
    vendors: ['jquery']
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
   module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: APP_PATH
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=80000'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    }),
    //provide $, jQuery and window.jQuery to every script
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery"
    // }),
     //这个使用uglifyJs压缩你的js代码
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    //把入口文件里面的数组打包成verdors.js
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ]
};