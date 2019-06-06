const webpack = require('webpack');
const path = require ('path');

const APP_DIR = path.resolve(__dirname,'ClientApp');
const PUBLIC_DIR = path.resolve(__dirname,'public');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const Dotenv = require('dotenv-webpack');

const config = {
<<<<<<< HEAD
    devtool: 'eval-source-map',
=======
    
   
>>>>>>> 36a095ec1bbc8927a521175dec85a936c7f9d0c5
    entry: APP_DIR + '/Client.js',
    devServer:{
        contentBase: PUBLIC_DIR,
        port: 9001,
        open: true,
        historyApiFallback: true
    },
    output: {
        path: PUBLIC_DIR,
        filename: 'clientbundle.js'
    },
    plugins: [
        new Dotenv()
    ],

    node: {
        module: 'empty',
        fs: 'empty'
    }

};

//module.exports = config;
module.exports = merge(baseConfig, config);