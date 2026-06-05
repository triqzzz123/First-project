import test from "@playwright/test";


test('screen recording', async ({ browser }) => {
    const context1 = await browser.newContext({
        recordVideo: {

            dir: 'record/video'
        }


    })

    const page2 = await context1.newPage();
    await page2.goto('https://www.flipkart.com/');
    await page2.reload();



})