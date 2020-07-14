## 三种方法：
+ .get('/',function(req,res){}); //接受get请求
+ .post('/',function(req,res){});
+ .use('/',function(req,res){});  //接受get和post请求

GET-无需中间件
+ req.query

POST-需要"body-parser"

    server.use(bodyParser.urlencoded({}));

    server.use(function (){
    	req.body
    });
----------------------------------------------------------------------------------------------------------------

## 链式操作：

1. GET、POST
```
  req.query
  
  server.use(bodyParser.urlencoded({limit: }));
  server.use(function (req, res, next){
    req.body
  });
```
2. 链式操作
```
  server.use(function (req, res, next){});
  server.get('/', function (req, res, next){});
  server.post(function (req, res, next){});

  //next——下一个步骤
  //next();

  server.use('/login', function (){
    mysql.query(function (){
      if(有错)
        res.emit('error');
      else
        next();
    });
  });
  ```

3. 中间件(body-parser)、自己写中间件
```
  server.use(function (req, res, next){
    var str='';
    req.on('data', function (data){
      str+=data;
    });
    req.on('end', function (){
      req.body=querystring.parse(str);
      next();
    });
  });
```

## cookie、session
cookie：在浏览器保存一些数据，每次请求都会带过来
  + cookie空间非常小——省着用
  + 安全性非常差——校验cookie是否被篡改过
  + 使用：cookie-parser

session：保存数据，保存在服务端
  + 安全、无限
  + 不能独立存在，基于cookie
  + cookie中会有一个session的ID，服务器利用sessionid找到session文件、读取、写入
  + 隐患：session劫持
  + 使用：cookie-session

```
a.发送cookie
res.secret='字符串';
res.cookie(名字, 值, {path: '/', maxAge: 毫秒, signed: true});

b.读取cookie
cookie-parser

server.use(cookieParser('签名字符串'));
server.use(function (req, res){
	res.cookie(名字, 值, {signed: true});

	req.cookies		未签名版
	req.signedCookies	签名版
});
server.use(function (){

});

c.删除cookie
res.clearCookie(名字);

//session的使用
server.use(cookieParser());
server.use(cookieSession({
	keys: [.., .., .., ..]
}));

server.use('/', function (){
	req.session
});

delete req.session
```
## 模板引擎：
1. jade-破坏式、侵入式、强依赖
    + 根据缩进，规定层级
    + 属性放在()里面，逗号分隔
      ```
      script(src="a.js")  //<script src="a.js"></script>
      ```
    + 内容空个格，直接往后堆
      ```
      a(href="http://www.zhinengshe.com/") 官网   
      //<a href="http://www.zhinengshe.com/">官网</a>
      ```
    + "|"后的内容按原样输出
      ```
      head
        script
          |window.onload = ()=>{
          |  ...
          |          }
      ```
    + "."表示下一级所有内容原样输出
      ```
      head
      script.
        window.onload = ()=>{
          ...
             }
      ```
    + "!"表示非转义按原样输出（jade内置转义以防注入式攻击）
      ```
      div!="<h2>你好啊</h2>"
      ```
    + "-"表示插入代码
    + jade.renderFile('模板文件名', 参数) 
2. ejs-温和、非侵入式、弱依赖
    + "="表示转义输出，"-"非转义输出

## multer
- body-parser
  + 解析post数据
  + application/x-www-form-urlencoded
  + server.use(bodyParse.urlencoded());

- multer
  + 解析post文件
  + multipart/form-data
  ```
  let obj = multer({dest:'upload/'});
  server.use(obj.any());
  //server.use(obj.single());
  server.use((req,res)=>{
    req.files[0].originalname;
  })

  //加扩展名：
  let newName = file.path+pathLib.parse(file.originalname).ext;

  fs.rename(oldname,newname,(err)=>{});
  ```























