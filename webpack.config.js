let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');

var commonConfig={
    resolve:{extensions:['.js','.ts']},
    optimization: {
        splitChunks: {
          // include all types of chunks
          chunks: 'all'
        }
      },
    module:{
        
        rules:[
            //   {
            //       test:/\.css$/,
            //       use:[
            //           'style-loader',
            //           'css-loader'
            //         ]
            //   },
            //   {
            //       test:/\.html$/,
            //       use:['html-loader']
            //   },
              {
                test:/\.(svg|png|webp|jpg|jpeg|ttf|woff|otf)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        name:"[name].[hash].[ext]",
                        outputPath:"imgs"
                    }
                }
              },
              {
                  test: [/.js$/],
                  exclude: /(node_modules)/,
                  use: {
                      loader: 'babel-loader',
                      options: {
                          presets: [
                              '@babel/preset-env'
                          ]
                      }
                  }
              }
          ]  
      },
}


let mainConfig=Object.assign({},commonConfig,{
    name:'main',
    entry: "./src/index.js",
    output: {
       filename:'[name].bundle.js',
       path:path.resolve(__dirname,'dist')
    },
    // plugins:[new HtmlWebpackPlugin({
    //     template:'./src/index.html',
    //     title:'Webpack starter',
    //     minify:{
    //         removeComments:true,
    //         collapseWhitespace:false
    //     }
    // })]
})


let blogsConfig=Object.assign({},commonConfig,{
    name:'blogs',
    entry: "./src/blogs/script.js",
    output: {
       filename:'[name].bundle.js',
       path:path.resolve(__dirname,'dist','blogs')
    },
    // plugins:[new HtmlWebpackPlugin({
    //     template:'./src/blogs/index.html',
    //     title:'Webpack starter',
    //     minify:{
    //         removeComments:true,
    //         collapseWhitespace:false
    //     }
    // })]
})


let portfolioConfig=Object.assign({},commonConfig,{
    name:'blogs',
    entry: "./src/portfolio/script.js",
    output: {
       filename:'[name].bundle.js',
       path:path.resolve(__dirname,'dist','portfolio')
    },
    // plugins:[new HtmlWebpackPlugin({
    //     template:'./src/portfolio/index.html',
    //     title:'Webpack starter',
    //     minify:{
    //         removeComments:true,
    //         collapseWhitespace:false
    //     }
    // })]
})


module.exports=[commonConfig,mainConfig,blogsConfig,portfolioConfig];

