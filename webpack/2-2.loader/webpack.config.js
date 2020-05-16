const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname,'dest'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {test: /\.css$/i, use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins:[
                            require('autoprefixer')
                        ]
                    }
                }]},    //从后往前读取loader
            /*{test: /\.(jpg|png|gif)$/i, use: {
                loader: 'file-loader',
                options: {
                    outputPath: 'imgs/',    //相对于output.path
                    publicPath: 'dest/imgs/',   //输出到css的路径
                }
            }}*/
            {
                test: /\.(jpg|png|gif)$/i, use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'imgs/',
                        publicPath: 'dest/imgs',
                        limit: 200*1024,
                    }
                }
            },
            {
                test: /\.less$/i, use: ['style-loader','css-loader','less-loader'],
            },
            {
                test: /\.(js|jsx)$/i, use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devtool: 'source-map'
};