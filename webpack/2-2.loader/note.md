loader：解析js和json以外的数据

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