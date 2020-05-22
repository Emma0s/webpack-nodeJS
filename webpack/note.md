## 正则——字符串：校验、提取

### 创建正则
- JS风格：new RegExp()
- perl风格：/\d+/
### 字符串的方法
- search：类似于indexOf，是位置，
- match：匹配——结果数组，str.match(reg)
- replace：替换
### 正则的方法
- test：匹配——结果布尔值，re.test(str)  =>  bool

修饰符：^   行首；$   行尾

### 选项：
- i：忽略大小写
- g：全局匹配
- m：多行模式
    - 单行模式(默认)：^$指的是整个字符串的开头和结尾；不会识别字符串里面的换行
    - 多行模式(m)：^$指的是每一行的开头和结尾；识别字符串中的\n

### 贪婪匹配？
越多越好——正则默认情况会倾向于匹配尽可能长的东西

**量词——几个**：如果不加量词，就是一个，如：{3}、+

### 元字符
1. 或
    ```
    /a[abc]s/   aas abs acs
              abbs
    ```
2. 范围
    ```
      [a-z]
      [0-9]   即\d
      [a-z0-9]
    ```
3. 排除
    ```
      [^abc]
      [^0-9]
    ```

### 量词
```
{n}{n,m}{n,}{0,m}

+即{1,}
*即{0,}   //易报错，用时想清楚零个到底行不行
?即{0,1}
```

### 手机号检测
1. 11位数字
2. 13x/150/158/170/172开头

或 |

`/^(13\d|15[08]|17[0-4])\d{8}$/`

### 邮箱检测：
aaa @ aaa.com（分段写）
1. 用户名：数字、字母、下划线，最多64位

    `\w{1,64}`

2. 网址：英文、数字、中划线,最多256位

    `[a-z0-9\-]{1,256}`

3. 后缀：(.英文2~6位) 1~2个
    (\.[a-z]{2,6}){1-2}

    `/^\w{1,64}@[a-z0-9\-]{1,256}(\.[a-z]{2,6}){1,2}$/i`

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

## webpack
- 作用：压缩、打包、多种文件的编译、脚手架、生成
- 安装：`npm i -g webpack-cli`

#### 配置
webpack.config.js：
1. mode:
    ```aidl
      none          不优化
      development   输出调试信息，设置process.env.NODE_ENV
      production    最高优化，启用压缩、忽略错误
    ```
2. entry：入口
    ```aidl
      单入口——SPA   文件字符串'./src/index.js'
      多入口——MPA   json
    ```
3. output：输出
    ```aidl
      {
        path: 路径——必须是绝对路径   path.resolve
        filename: 文件名
      }
    ```
## loader
- 作用：解析js和json以外的数据
- 常用的loader:
   1. css-loader    解析css文件和import，输出js字符串
   2. style-loader  输出样式至\<style>
   3. postcss-loader  添加浏览器前缀
       - 需要与autoprefixer插件配合使用，该插件可根据浏览器流行程度和自定义的条件加前缀
       - 在package.json中添加'browserslist'自定义条件
   4. file-loader/url-loader   引入文件(图片、字体)至js中
       - url-loader（更常用）通过设置limit，超过limit大小的文件由file-loader编译处理
   5. less-loader  编译less,需搭配css-loader,style-loader使用
   6. babel-loader  编译ES6,需搭配安装@babel/core,@babel/preset-env
   7. devtool: 'source-map'   帮助调试，显示未编译的错误代码

## HtmlWebpackPlugin
- 作用：
    - 自动生成index.html(可指定模板)
    - 将打包的js文件，自动通过script标签插入body
- 安装：`npm install html-webpack-plugin --save-dev`
- 使用：
    - 用`template`配置模板
    - 删除`output`中添加的`publicPath`属性
  
## webpack-dev-server
- 作用：热加载
- 安装：`npm i webpack-dev-server --save-dev`
- 使用：
    - 在devServer项中，用`contentBase`表示为哪个文件提供服务，默认为根文件夹，`inline`表示页面是否实时刷新
    - script脚本中配置webpack命令
    ```
    "dev": "webpack-dev-server --open"
    ```
  
## 代码分离
- 作用：将开发和生产环境的配置文件分开处理，base(公共)，dev(开发)，prod(生产)
- 安装：`npm i webpack-merge --save-dev`
- 使用：
    - 删除webpack.config.js文件，新建(base|dev|prod).config.js
    - script脚本中配置webpack命令
    ```aidl  
    "build": "webpack --config ./build/prod.config.js"
    "dev": "webpack --config ./build/dev.config.js"
    ```
    - 修改base中output属性
    ```aidl
    path: path.resolve(__dirname,'../dist')
    ```
 ## 代码质量管理-eslint
 - 安装：`npm eslint eslint-loader -D`
 - 使用：
   ```aidl
      ---webpack.config.js---
      ...
      rules: [
        { test: /\.(js|jsx)$/i, loader: 'eslint-loader',exclude: /node_modules|bower_modules/}
      ]
      
      ---package.json---
      {
        ...,
        "scripts": {
          "eslint_init": "eslint --init"
        }}
      ```
## 代码测试-Jest
  - 安装：`npm i jest jest-webpack -D`
  - 使用：
     ```aidl
      ---package.json---
      {
        "scripts": {
           ...,
           "test": "jest-webpack"
      }}
    
      ---sum.test.js---
      const sum = require('./sum');
      
      test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
      });
      ```
