// 每10个一组，定时启动，完成之后起新的一组

const puppeteer = require('puppeteer');
var fs = require('fs');

fs.readFile('./novel.json', 'utf-8', function (err, data) {
    if (err) {
        throw err;
    }

    novelList = JSON.parse(data)
    f(data)

});
var novelList = [{"title":"","url":""}];
var number = 400;
var numberEnd = 419;
var ji = 0;


function f(number) {
    for (let i = number; i < number + 10; i++) {
        (async () => {
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
            await browser.close();
            fs.writeFile(`./novel/${i + 1}.txt`, result, function (err) {
                if (err) {
                    throw err;
                }
                console.log(`${i + 1}写入完毕`);
                // 写入成功后读取测试
                ji++;
            });

        })()
    }
};

const intervalObj = setInterval(() => {
    if ((ji % 10) == 0) {
        console.log('---------一组结束----------')
        ji = 0
        f(number);
        number += 10
    }
    if (number > numberEnd) {
        console.log('清除定时器')
        clearInterval(intervalObj);
    }
}, 5000);
