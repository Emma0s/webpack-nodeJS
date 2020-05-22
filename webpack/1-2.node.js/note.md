## Node.js
1. Javascript的服务器版本
    - 类似于Java的Servlet
2. 相比其他语言的优势
    - 便于前端人员入手
    - 性能高（基于chrome开发）
    - 利于与前端代码整合
3. 用途
    - 少用于主力服务器开发语言
    - 中间层语言
        - 充分利用已有代码，增强主服务代码的独立性
        - 安全性
        - 性能
        - 丰富接口功能
    - 工具开发

### node.js环境搭建
1. npm工具库：https://www.npmjs.com/  
2. npm换源：npm install -g cnpm --registry=https://registry.npm.taobao.org

### Node.js模块系统
node.js早于ES6，未采用ES6的模块系统
#### 使用模块
一个文件就是一个模块
```aidl
//模块声明
  exports.xx=xxx;
  exports.xx=xxx;

  module.exports=模块;

  module.exports={
    ...
  };
  module.exports=function (){};
  module.exports=class {};

//引入模块
  require('name')     系统node_modules/本地node_modules/父目录node_modules/...
  require('./name')   具体地址
```
### package.json
 相当于node.js的工程文件
- 初始化：`npm init [-y]`
- 文件内容：devDependencies:开发依赖，dependencies:生产依赖
- 其他模块管理系统：yarn:facebook出的包管理器
- 安装：`npm i yarn -g`
- 使用：`yarn i xx`