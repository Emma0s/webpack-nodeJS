/*
    post参数处理
*/
const querystring = require('querystring');
const http = require('http');


// let param = 'username=2323&password=213';
// let param = 'foo=bar&abc=xyz&abc=21';
// let obj = querystring.parse(param);
// console.log(obj);
// let obj1 = {
//     flag : '123',
//     abc : ['hello','hi']
// }
// let str1 = querystring.stringify(obj1);
// console.log(str1);

http.createServer((req,res)=>{
    if(req.url.startsWith('/login')){
        let pdata = '';
        req.on('data',(chunk)=>{
            pdata += chunk;
        });
        req.on('end',()=>{
            console.log(pdata);
            let obj = querystring.parse(pdata);
            res.end(obj.username+'------'+obj.password);
        });
    };
}).listen(3000,()=>{
    console.log('running....');
});
