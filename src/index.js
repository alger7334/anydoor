const puppeteer = require('puppeteer');
const { screenshot } = require('./config/default');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://baidu.com');
    await page.setViewport({
        width: 1920,
        height: 1080
    });
    await page.screenshot({path: `${screenshot}/${Date.now()}.png`});

    await browser.close();
})();
