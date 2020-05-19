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