const path = require('path');
module.exports={
    mode: 'development',
    entry: {
        index: './src/index.js',
        news: './src/news.js'
    },
    output: {
        path: path.resolve(__dirname,'dest'),
        filename: '[name].js'
    }
};