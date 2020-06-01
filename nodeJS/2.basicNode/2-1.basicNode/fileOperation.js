//文件操作案例（初始化目录结构）
const path = require('path');
const fs = require('fs');

let root = 'C:\\Users\\64508_000\\Desktop';
let fileContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>welcome to this</div>
</body>
</html>`;

let initData = {
    projectName: 'mydemo',
    data: [{
        name: 'img',
        type: 'dir'
    }, {
        name: 'css',
        type: 'dir'
    }, {
        name: 'js',
        type: 'dir'
    }, {
        name: 'index.html',
        type: 'file'
    }]
};
fs.mkdir(path.join(root, initData.projectName), (err) => {
    if (err) return;
    initData.data.forEach((item) => {
        if (item.type == 'dir') {
            fs.mkdirSync(path.join(root, initData.projectName, item.name));
        } else if (item.type == 'file') {
            fs.writeFileSync(path.join(root,initData.projectName,item.name),fileContent);
        }
    })
});

