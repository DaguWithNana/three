const fs = require('fs')
const cheerio = require('cheerio')
const axios = require("axios").default; //发起一个网络请求获取数据
// cheerio.load 把一个字符串转换为一个类似于jq的对象

// const $ = cheerio.load(
//     `<div class="content">
//         <h1>我是娜娜小可爱</h1>
//         <p>我是男神</p>
//     </div>
//     `
// );

const books = []
//promise 里面的 .then
axios.get("https://www.17k.com/top/refactor/top100/01_subscribe/01_subscribe__top_100_pc.html").then((res) => {
    // console.log(res.data)
    const $ = cheerio.load(res.data);
    $('.BOX').eq(0).find("table tr").each(function (index) {
        if (index > 0) {
            console.log($(this).find('td').eq(1).find('a').text());
            let book = {}
            book.id = index
            book.title = $(this).find("td").eq(2).find("a").text()
            book.link = 'https:' + $(this).find("td").eq(2).find("a").attr('href')
            books.push(book)
        }
    })
    fs.writeFileSync('./books.json', JSON.stringify(books))
});
//console.log($("h1").text());