const puppeteer = require('puppeteer');
const {mn} = require('./config/default');
const srcToImg = require('./helper/srcToImg');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://m.uctxt.com/book/30/30073/');
    await page.setViewport({
        width: 1920,
        height: 1080
    });
    console.log(await page.$x('//*[@id="main"]/section/dl/dd'));


    await browser.close();

})();

