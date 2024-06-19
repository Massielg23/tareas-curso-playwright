const { chromium } = require('playwright');
async function runtest (){
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://practice.expandtesting.com/login')
    await page.locator('#username').fill('practice')
    await page.locator('#password').fill('SuperSecretPassword!')
    await browser.close();
}
runtest();