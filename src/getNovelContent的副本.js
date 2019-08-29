// 使用同步爬取
const puppeteer = require('puppeteer');
var fs = require('fs');
let novel = []
fs.readFile('./novel.json', 'utf-8', function (err, data) {
    if (err) {
        throw err;
    }
    // novel =data;

    getNovel(data)
});

function getNovel(data) {
    let novelList = JSON.parse(data)
    console.log(novelList.length);

var number =100;
    // for (let i = 0; i < novelList.length; i++) {
        async function getText(i)  {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(novelList[i].url);
            const result = await page.evaluate(() => {

                let data = '';
                let elements = document.querySelectorAll('body>div#main>section#container>article'); //获取所有的li
                for (var element of elements) { // 循环
                    let title = element.querySelector('div#content').innerText;
                    data = title; // 存入数组
                }
                return data;
            });
            fs.writeFile(`./novel/${i+1}.txt`, result, function(err) {
                if (err) {
                    throw err;
                }
                console.log(`${i+1}写入完毕`);
                if(i<200){
                    getText(++number);
                }
                // 写入成功后读取测试
            });
            await browser.close();

        };
    getText(number)
    // }
}
