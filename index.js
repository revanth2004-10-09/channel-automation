const puppeteer = require('puppeteer');
(async () => {
 const browser = await puppeteer.launch({ headless: false });
 const page = await browser.newPage();
 // Open DuckDuckGo
 await page.goto('https://duckduckgo.com');
 // Search
 await page.waitForSelector('input[name="q"]');
 await page.type('input[name="q"]', '@FXMESSI-f6g', { delay: 100 });
 await page.keyboard.press('Enter');
 // Wait for results
 await page.waitForSelector('h2 a');
 const firstResult = await page.$('h2 a');
 await Promise.all([
 page.waitForNavigation(),
 firstResult.click()
 ]);
 await new Promise(resolve => setTimeout(resolve, 5000));
 await page.screenshot({ path: 'fxmessi.png', fullPage: true });
 console.log("Screenshot saved");
 await browser.close();
})();