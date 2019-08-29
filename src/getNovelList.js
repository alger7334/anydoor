const puppeteer = require('puppeteer');
var fs = require('fs');
(async () => {
    try {
        let browser = await puppeteer.launch({'headless': false,});
        let page = await browser.newPage();
        const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/63.0.3239.84 Chrome/63.0.3239.84 Safari/537.36";
        await Promise.all([
            page.setUserAgent(UA),
            page.setJavaScriptEnabled(true),
            page.setViewport({width: 1100, height: 1080}),
        ]);
        let chapter_list_url = 'https://m.uctxt.com/book/30/30073/';
        await page.goto(chapter_list_url);


        const result = await page.evaluate(() => {

            let data = [];
            let elements = document.querySelectorAll('body > div#main >section.mb> dl.chapter-list > dd '); //获取所有的li
            for (var element of elements) { // 循环
                let title = element.querySelector('a').innerText;
                let url = element.querySelector('a').href; //抓取链接（href）属性
                data.push({title, url}); // 存入数组
            }
            return data;

        });


        fs.writeFile('./novel.json', JSON.stringify(result), function(err) {
            if (err) {
                throw err;
            }

            console.log('列表写入成功');

            // 写入成功后读取测试

        });


    } catch (err) {
        console.log(err)
    }
})()
