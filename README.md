# Webpack setup

Webpack is the most widely used module bundler for web applications. 
This repo comprises of all the loaders and plugins required for a nice and basic setup of webpack for any project

## Installation 

```bash
git clone https://github.com/vaideshshank/webpack-setup.git
npm install
```

### Start dev server in browser
```bash
npm start
```
### Building files locally
```bash
npm run dev
```
### Building files for production
```bash
npm run build
```

## Dev dependencies used
* babel-loader    : Loader for providing backward compatibility of ES6 syntax in browsers.
* css-loader      : Loader to read the css files by webpack added in the project
* style-loader    : Loader to add the css link tag with the css file location in the html where it is to be imported
* file-loader     : Loader to read images,videos,fonts,etc by webpack
* html-loader     : Loader for reading the html files
* html-webpack-plugin     : Plugin used to create,minify,add titles,etc. to the html file in development and production mode
* mini-css-extract-plugin     : Plugin used to create separate css files
* optimize-css-assets-webpack-plugin      : Plugin used for minification of css files in production mode
* webpack,webpack-cli     : Webpack utilities
* webpack-dev-server      : For starting live-server of webpack for hosting the project locally
* webpack-merge   : For merging exported object of one files with the other(like config objects are utilized in dev and prod with some modifications).