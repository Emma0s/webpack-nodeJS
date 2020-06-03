//请求路径的分发
const http = require('http');
http.createServer((req,res)=>{
    // res.end('ok');
    // req.url可以获取URL中的路径（端口之后部分）
    if(req.url.startsWith('/index')){
        // write向客户端响应内容,可以写多次
        res.write('hello');
        res.write('hi');
        // end方法用来完成响应，只能执行一次
        res.end('index');
    }else if(req.url.startsWith('/about')){
        res.end('about');
    }else{
        res.end('no content');
    }
}).listen(3000,'10.0.0.14',()=>{
    console.log('running...');
});
