const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/js/index',
    output: {
        path: path.resolve(__dirname,'dest'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.css$/i, use: ['style-loader','css-loader']},
            {test: /\.(jpg|png|gif)$/i, use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'imgs/',
                        // publicPath: 'dest/imgs/',
                        limit: 4*1024,
                    }
                }}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}