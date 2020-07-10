const express = require('express');
const expressStatic = require('express-static');

let server = express();
server.listen(8080);

let users = {
    'blue': "123456",
    'song': "000000",
    'xiaozhang': "0147"
};
server.get('/login',(req,res)=>{
    // console.log(req.query);
    let user = req.query['user'];
    let pass = req.query['pass'];
    
    if(users[user]){
        if(users[user]!=pass){
            res.send({ok:false, msg: '用户名或密码错误'});
        }else{
            res.send({ok:true, msg: '恭喜您，登录成功'});
        }
    }else{
        res.send({ok:false, msg: '该用户不存在'});
    }
})
server.use(expressStatic('./www'));