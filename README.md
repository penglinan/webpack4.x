# webpack4.x

    npm i webpack -g
    npm i webpack -save-dev//开发环境
    npm i webpack -D//缩写
    npm i webpack -save//生产环境
    npm i webpack -S//缩写
    卸载用un代替i
用指令打包

	webpack src/index.js --output dist/bundle.js

webpack.config.js

    module.exports={
	    entry:'./src/index.js', //入口文件
       // entry:['./src/index.js','./src/index.js'],多文件的话，用数组
	    output:{
	    //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径
	      /*  path:__dirname, //输出位置*/
	    filename:'bundle.js' //输入文件
	    },
    };

另外一种写法

	const path=require('path');//node系统自带的

    module.exports={
	    entry:'./src/index.js', //入口文件
	    output:{
	    //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径
	       // path:__dirname+'/dist', //输出位置
	    path:path.resolve(__dirname,'dist'),
	    filename:'bundle.js' //输入文件
	    },
    };

webpack.config.js配置名字可以修改

    webpack --config pln.config.js//运行webpack的时候要这样运行

npm run xx:
    
    "scripts":{
          "build":"webpack --config mmr.config.js"
      }//配置命令，使用npm run bulid 执行build命令

mode:

     webpack --mode development
     webpack --mode production//文件被压缩

多出口多入口：

    entry:{
		index:'./src/index.js',
		index2:'./src/index2.js'
		},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].bundel.js'
		}

html-webpack-plugin