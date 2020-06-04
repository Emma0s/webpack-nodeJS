/*
    get参数处理
*/

const url = require('url');
let str = 'http://www.baidu.com/abc?flag=123&keyword=java';
let ret = url.parse(str,true);

console.log(ret.query);

let obj = {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: '?flag=123&keyword=java',
    query: 'flag=123&keyword=java',
    pathname: '/abc',
    path: '/abc?flag=123&keyword=java',
    href: 'http://www.baidu.com/abc?flag=123&keyword=java'
};
let ret1 = url.format(obj);
console.log(ret1);