const puppeteer = require('puppeteer');
const {mn} = require('./config/default');
const srcToImg = require('./helper/srcToImg');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://www.sias.cn/');
    await page.setViewport({
        width: 1920,
        height: 1080
    });
    // await page.focus('#kw');
    // await page.keyboard.sendCharacter('美女');
    // await page.click('.s_search');

    // page.on('load', async () => {
    //     //     const srcs = await page.evaluate(() => {
    //     //         const images = document.querySelectorAll('img');
    //     //         return Array.prototype.map.call(images, img => img.src);
    //     //     })
    //     //     srcs.forEach(async src => {
    //     //         srcToImg(src, mn);
    //     //     })
    //     //     await browser.close();
    //     // });

    (async () => {
        const srcs = await page.evaluate(() => {
            const images = document.querySelectorAll('img');
            return Array.prototype.map.call(images, img => img.src);
        })
        srcs.forEach(async src => {
            srcToImg(src, mn);
        })
        await browser.close();
    });



})();
