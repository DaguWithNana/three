const fs = require('fs');
const people = [{
    id: 1,
    name: 'nn'
}, {
    id: 2,
    name: '孙丽娜',
}, {
    id: 3,
    name: 'nana',
}];
//JSON.stringify用来把json对象转换为json字符串
fs.writeFileSync("./people.json", JSON.stringify(people));