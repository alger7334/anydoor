// 定时启动，不管之前的执行完毕没有
const puppeteer = require('puppeteer');
var fs = require('fs');
var novelList = [];

fs.readFile('./novel.json', 'utf-8', function (err, data) {
    if (err) {
        throw err;
    }
    novelList =JSON.parse(data);
    console.log(novelList.length);
    getNovel()
});
var number = 450;
var numberEnd = 558;
function getNovel() {

    // for (let i = 0; i < 10; i++) {
    //     getText(i)
    //
    // }
    const intervalObj = setInterval(() => {
    for (let i = number; i < number + 10; i++) {
        getText(i)
    }
    number = number + 10
    if (number > numberEnd) {
        clearInterval(intervalObj);
    }
}, 5000);
}



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
        // 写入成功后读取测试
    });


    await browser.close();

};
//

