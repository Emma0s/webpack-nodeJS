 const http = require('http');
 const fs = require('fs');
 const querystring = require('querystring');
 const urlLib = require('url');

 let users = {};
 http.createServer((req,res)=>{
    let str = "";
    req.on('data',(data)=>{
        str += data;
    });
    req.on('end',()=>{
        let obj = urlLib.parse(req.url,true);
        const url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);

        if(url=='/user'){
            switch(GET.act){
                case 'reg':
                    if(users[GET.user]){
                        res.write('{"ok":false,"msg":"此用户已存在"}');
                    }else{
                        users[GET.user]=GET.pass;
                        res.write('{"ok":true,"msg":"注册成功"}');
                    }
                    break;
                case 'login':
                    if(users[GET.user==null]){
                        res.write('{"ok":false,"msg":"此用户不存在"}');
                    }else if(users[GET.pass]!=GET.pass){
                        res.write('{"ok":false,"msg":"用户名或密码错误"}');
                    }else{
                        res.write('{"ok":true,"msg":"登录成功"}');
                    }
                    break;
                default:
                    res.write('{"ok":false,"msg":"未知的act"}');
            }
            res.end();
        }else{
            let file_name='./www'+url;
            fs.readFile(file_name,(err,data)=>{
                if(err){
                    res.write('404');
                }else{
                    res.write(data);
                }
                res.end();
            });
        }
    })
 }).listen(8080);