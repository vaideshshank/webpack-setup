let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
let common=require('./webpack.config');
const merge=require('webpack-merge');
const webpack = require('webpack');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin=require('optimize-css-assets-webpack-plugin');
const TerserPlugin=require('terser-webpack-plugin');

//console.log(common);

var commonConfig=merge(common[0],{
    mode:"production",
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader, // extract CSS to files
                    'css-loader'
                  ]
            },
        ]
    },
    optimization:{
        minimizer:[
            new OptimizeCssAssetsPlugin(),       // for minification of CSS
            new TerserPlugin()                  //for minification of JS as it is not default after including css assets plugin
        ]
    }
});

let mainConfig=Object.assign({},commonConfig,{
    name:'main',
    entry: "./src/index.js",
    output: {
       filename:'[name].[contentHash].bundle.js',
       path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new MiniCssExtractPlugin({
            name:"[name].[contentHash].css"         //for creating separate files for css
        }),
        new CleanWebpackPlugin()
    ],

    optimization:{
        minimizer:[
            new HtmlWebpackPlugin({
                template:'./src/index.html',
                title:'Webpack starter',
                minify:{
                    removeAttributeQuotes:true,
                    removeComments:true,
                    collapseWhitespace:false
                }
            })
        ]
    }
})


let blogsConfig=Object.assign({},commonConfig,{
    name:'blogs',
    entry: "./src/blogs/script.js",
    output: {
       filename:'[name].[contentHash].bundle.js',
       path:path.resolve(__dirname,'dist','blogs')
    },
    plugins:[
        new MiniCssExtractPlugin({
            name:"[name].[contentHash].css"         //for creating separate files for css
        }),
        new CleanWebpackPlugin()
    ],
    optimization:{
        minimizer:[
            new HtmlWebpackPlugin({
                template:'./src/blogs/index.html',
                title:'Webpack starter',
                minify:{
                    removeAttributeQuotes:true,
                    removeComments:true,
                    collapseWhitespace:false
                }
            })
        ]
    }
})


let portfolioConfig=Object.assign({},commonConfig,{
    name:'blogs',
    entry: "./src/portfolio/script.js",
    output: {
       filename:'[name].[contentHash].bundle.js',
       path:path.resolve(__dirname,'dist','portfolio')
    },
    plugins:[
        new MiniCssExtractPlugin({
            name:"[name].[contentHash].css"         //for creating separate files for css
        }),
        new CleanWebpackPlugin()
    ],
    optimization:{
        minimizer:[
            new HtmlWebpackPlugin({
                template:'./src/portfolio/index.html',
                title:'Webpack starter',
                minify:{
                    removeAttributeQuotes:true,
                    removeComments:true,
                    collapseWhitespace:false
                }
            })
        ]
    }
})

mainConfig=merge(common[1],mainConfig);
blogsConfig=merge(common[2],blogsConfig);
portfolioConfig=merge(common[3],portfolioConfig);

module.exports=[mainConfig,blogsConfig,portfolioConfig];

