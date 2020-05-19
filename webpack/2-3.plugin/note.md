### HtmlWebpackPlugin
- 作用：
    - 自动生成index.html(可指定模板)
    - 将打包的js文件，自动通过script标签插入body
- 安装：`npm install html-webpack-plugin --save-dev`
- 使用：
    - 用`template`配置模板
    - 删除`output`中添加的`publicPath`属性
  
### webpack-dev-server
- 作用：热加载
- 安装：`npm i webpack-dev-server --save-dev`
- 使用：
    - 在devServer项中，用`contentBase`表示为哪个文件提供服务，默认为根文件夹，`inline`表示页面是否实时刷新
    - script脚本中配置webpack命令
    ```
    "dev": "webpack-dev-server --open"
    ```
  
### 代码分离
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

