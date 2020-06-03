/*
    响应完整的页面信息
*/
const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');

http.createServer((req,res)=>{
    fs.readFile(path.join(__dirname,'www',req.url),(err,fileContent)=>{
        if(err){
            res.writeHead(404,{
                'Content-Type':'text/plain;charset=utf8'
            });
            res.end('页面被狗狗叼走了');
        }else{ 
            let dtype = 'text/html';
            //获取请求文件的后缀
            let ext = path.extname(req.url);
            //若后缀合理，获取标准响应格式
            if(mime[ext]){
                dtype = mime[ext];
            }
            //若响应内容为文本，设置utf8编码
            if(dtype.startsWith('text')){
                dtype += ';charset=utf8';
            }
            //设置响应头信息
            res.writeHead(200,{
                'Content-Type':dtype
            });
            res.end(fileContent);
        }
    });
}).listen(3000,()=>{
    console.log('running...');
});


