let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
let common=require('./webpack.config');
const merge=require('webpack-merge');
const webpack = require('webpack');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');


//console.log(common);

var commonConfig=merge(common[0],{
    mode:"development",  
    module:{
        rules:[{
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
              ]
        }],
    }
})


let mainConfig=Object.assign({},commonConfig,{
    name:'main',
    entry: "./src/index.js",
    output: {
       filename:'[name].bundle.js',
       path:path.resolve(__dirname,'dist')
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./src/index.html',
        title:'Webpack starter'
    }),
    new CleanWebpackPlugin()]
})


let blogsConfig=Object.assign({},commonConfig,{
    name:'blogs',
    entry: "./src/blogs/script.js",
    output: {
       filename:'[name].bundle.js',
       path:path.resolve(__dirname,'dist','blogs')
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./src/blogs/index.html',
        title:'Webpack starter'
    }),
    new CleanWebpackPlugin()]
})


let portfolioConfig=Object.assign({},commonConfig,{
    name:'blogs',
    entry: "./src/portfolio/script.js",
    output: {
       filename:'[name].bundle.js',
       path:path.resolve(__dirname,'dist','portfolio')
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./src/portfolio/index.html',
        title:'Webpack starter'
    }),
    new CleanWebpackPlugin()]
})

mainConfig=merge(common[1],mainConfig);
blogsConfig=merge(common[2],blogsConfig);
portfolioConfig=merge(common[3],portfolioConfig);

module.exports=[mainConfig,blogsConfig,portfolioConfig];

