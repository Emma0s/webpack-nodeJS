/*
    模板引擎 
*/
let template = require('art-template');
// let html = template(__dirname + '/mytpl.art', {
//     user: {
//         name: 'lisi'
//     }
// });
// console.log(html);
//-----------------------------------------------
// let tpl = '<ul>{{each list as value}}<li>{{value}}</li>{{/each}}</ul>'
// let render = template.compile(tpl);
// let ret = render({
//     list : ['apple','orange','banana']
// });
// console.log(ret);
//--------------------------------------------------------
// let tpl = '<ul>{{each list as value}}<li>{{value}}</li>{{/each}}</ul>';
// let tpl = '<ul>{{each list}}<li>{{$index}}---------------{{$value}}</li>{{/each}}</ul>';
// let ret = template.render(tpl,{
//     list : ['apple','orange','banana','pineapple']
// });
// console.log(ret);
//-------------------------------------------------------------
let html = template(__dirname + '/score.art', {
    chinese : '120',
    math : '130',
    english : '145',
    summary : '268'
});
console.log(html);