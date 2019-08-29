const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        devtools: true,
        timeout: 0 }); //默认超时时间为30000如果设零也不会超时
    const page = await browser.newPage();
    const viewConfig = {
        width: 360,
        height: 640,
        isMobile: true
    };
//设置窗口
    page.setViewport(viewConfig);
//跳转
    await page.goto('https://weekly.75team.com/');
//处理拿到需要的数据
const result = await page.evaluate(() => {

//方法二
    let data = [];
    let elements = document.querySelectorAll('.issue-list li'); //获取所有的li
    for (var element of elements){ // 循环
        let title = element.querySelector('a').innerHTML;
        let url = element.querySelector('a').href; //抓取链接（href）属性
        let date = element.querySelector('.date').innerHTML;

        data.push({title, url,date}); // 存入数组
    }
    return data;

});
console.log(result)    //转出数组
// browser.close();
})();
