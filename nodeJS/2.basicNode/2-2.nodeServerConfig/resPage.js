/*
    响应完整的页面信息
*/
const http = require('http');
const path = require('path');
const fs = require('fs');

//根据路径读取文件内容，返回到浏览器
let readFile = (url, res) => {
    fs.readFile(path.join(__dirname, 'www', url), 'utf-8', (err, fileContent) => {
        if (err) {
            res.end('server error');
        } else {
            res.end(fileContent);
        }
    });
}

http.createServer((req, res) => {
    // res.end('ok');
    //处理路径分发
    if (req.url.startsWith('/index')) {
        readFile('index.html', res);
    } else if (req.url.startsWith('/about')) {
        readFile('about.html', res);
    } else if (req.url.startsWith('/list')) {
        readFile('list.html', res);
    } else {
        //设置响应类型和编码
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset=utf8'
        });
        res.end('页面让狗狗吃了，嘻嘻嘻');
    }
}).listen(3000, '10.0.0.14', () => {
    console.log('running...');
})