const ejs = require('ejs');
ejs.renderFile('./views/1.ejs',{name: 'blue'},(err,data)=>{
    console.log(data);
})
