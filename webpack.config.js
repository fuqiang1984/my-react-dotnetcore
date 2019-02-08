const path = require('path');
const APP_DIR = path.resolve(__dirname,'ClientApp');
const BUILD_DIR = path.resolve(__dirname,'dist');
const PUBLIC_DIR = path.join(__dirname,'public');

module.exports = {
  entry: APP_DIR + '/Client.js',
  output: {
    filename: 'main.js',
    path: BUILD_DIR
  },
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 9000,
    historyApiFallback:true
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
        rules: [
            {
                test: /\.js?$/,
                options: {
                    presets: [
                        'react', 'stage-2',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                },
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
  }
};