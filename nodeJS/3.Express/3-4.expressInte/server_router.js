const express = require('express');
let server = express();

//目录1：/user/
let routeUser = express.Router();

routeUser.get('/1.html',(req,res)=>{
    res.send('user1');
});
routeUser.get('/2.html',(req,res)=>{
    res.send('user2');
});
server.use('/user',routeUser);

//目录2：/article/
let articleRouter = express.Router();
server.use('/article',articleRouter);
articleRouter.get('/1001.html',(req,res)=>{
    res.send('dsf');
})
server.use('/article',articleRouter);
server.listen(8080);

