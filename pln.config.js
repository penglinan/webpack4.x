
/**
 * Created by nan on 2018/3/30.
 */
const path=require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js', //入口文件
    output:{
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径
        // path:__dirname+'/dist', //输出位置
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js' //输入文件
    },
    plugin:[
        new htmlWebpackPlugin()
    ]
};