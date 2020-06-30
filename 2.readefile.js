const fs = require('fs');
//同步的方式读取文件
//文件路径
const res = fs.readFileSync('./people.json').toString();
// console.log(res)
// console.log(JSON.parse(res).length);
//JSON.parse json字符串转换成对象
const people = JSON.parse(res)
let strHtml = '';
people.forEach((person) => (strHtml += `<li>${person.name}</li>`));
strHtml += "<ul>";
fs.writeFileSync("./people.html", strHtml); //可以在文件夹里生成一个网页文件