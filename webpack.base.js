module.exports = {

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
                    ],
                    "plugins": ["transform-class-properties"]
                },
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
              }
        ]
    }
};