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
            {test: /\.css$/i, use: ['style-loader','css-loader']}    //从后往前读取loader
        ]
    }
};