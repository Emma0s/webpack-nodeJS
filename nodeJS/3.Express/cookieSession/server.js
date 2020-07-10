const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();
server.use(cookieParser('asdfsgfd'));
server.use('/',(req,res)=>{
    req.secret='asdfsgfd';
    res.cookie('user','blue',{signed: true});

    console.log('签名cookie：',req.signedCookies);
    console.log('无签名cookies：',req.cookies);
    res.send('ok');

})
server.listen(8080);
