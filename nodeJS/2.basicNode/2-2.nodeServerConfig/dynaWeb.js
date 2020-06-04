/*
    动态网站的开发

    成绩查询功能
*/

const http = require('http');
const fs = require('fs');
const path = require('path');
const querstring = require('querystring');
const scoreData = require('./score.json');

http.createServer((req,res)=>{
    //路由即请求路径+请求方式
    // 查询成绩的入口地址 /query
    if(req.url.startsWith('/query') && req.method=='GET'){
        fs.readFile(path.join(__dirname,'view','index.html'),'utf8',(err,content)=>{
            if(err){
                res.writeHead(500,{
                    'Content-Type':'text/plain; charset=utf8'
                })
                res.end('服务器错误，请联系管理员');
            }
            res.end(content);
        });
    }else if(req.url.startsWith('/score')){
        //获取成绩的结果
        let pdata = '';
        req.on('data',(chunk)=>{
            pdata += chunk;
        });
        req.on('end',()=>{
            let obj = querstring.parse(pdata);
            let result = scoreData[obj.code];
            fs.readFile(path.join(__dirname,'view','result.html'),'utf8',(err,content)=>{
                if(err){
                    res.writeHead(500,{
                        'Content-Type':'text/plain;charset=utf8'
                    })
                    res.end('服务器错误，请与管理员联系');
                }
                //数据渲染
                content = content.replace('$$chinese$$',result.chinese);
                content = content.replace('$$english$$',result.english);
                content = content.replace('$$math$$',result.math);
                content = content.replace('$$summary$$',result.summary);
                res.end(content);
            })
        });
    }
    //查询成绩的结果 /score
    
}).listen(3000,()=>{
    console.log('running.....');
});
