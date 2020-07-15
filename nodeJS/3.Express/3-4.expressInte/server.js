const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const ejs = require('ejs');
const jade = require('jade');
const consolidate = require('consolidate');

let server = express();
server.listen(8080);

//1.解析cookie
server.use(cookieParser("sfajdfadgrfgbf"));
//2.使用session
let arr = [];
for(let i=0;i<10000;i++){
    arr.push('keys_'+Math.random());
}
server.use(cookieSession({name: 'sww_id',keys: arr, maxAge: 20*3600*1000}));
//3.post数据
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest: './www/upload'}).any());

//4.配置模板引擎
//输出什么东西
server.set('view engine','html');
//模板文件放在哪儿
server.set('views','./views');
//用哪种模板引擎
server.engine('html',consolidate.ejs);
server.get('/index',(req,res)=>{
    res.render('1.ejs',{name: 'blue'});
})

//用户请求
// 
//4.static数据
server.use(static('./www'));