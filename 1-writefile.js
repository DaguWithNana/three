const fs = require('fs')
//同步的方式写入文件
//参数一表示文件名
//参数二表示文件内容

fs.writeFileSync("./你好.txt", "我是孙丽娜，哈哈哈");
console.log("同步的写文件") //先执行
fs.writeFile("./你好2.txt", "和黑", function (e) {
    if (e) {
        console.log(e);
    }
    console.log("写入文件完成"); //3执行
});
console.log("写入文件") //2执行