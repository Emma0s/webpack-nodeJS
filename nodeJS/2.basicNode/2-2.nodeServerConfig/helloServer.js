/*
初步实现服务器功能
 */
const http = require('http');
// let server = http.createServer();
// server.on('request',(req,res)=>{
//     res.end('hello');
// });
// server.listen(3000);

http.createServer((req,res)=>{
    res.end('ok');
}).listen(3000,"10.0.0.14",()=>{
    console.log('success!');
});
