const path = require('path');
const http = require('http');
const url = require('url');

http.createServer((req,res)=>{
    let obj = url.parse(req.url,true);
    res.end(obj.query.username+'======='+obj.query.password);
}).listen(3000,()=>{
    console.log('server running.....');
})
