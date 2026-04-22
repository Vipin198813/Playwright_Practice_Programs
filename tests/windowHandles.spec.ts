import {test,expect} from '@playwright/test'
test("Window Handles",async({browser})=>{
    // create a browser context 
    const browserContext = await browser.newContext();

    // create a new page in browser context
    const page1 = await browserContext.newPage();

    // Navigate to the URL
    await page1.goto("https://www.hyrtutorials.com/p/window-handles-practice.html")
    console.log("1st window is opened")

    //click on a button to open 2nd window

    const [page2] = await Promise.all([
        browserContext.waitForEvent('page'),
        page1.locator("//button[@id='newTabBtn']").click()
    ]);
    console.log("2nd Tab got opened")

    //Click on 3rd button on page 1 to open new page
    const [page3] = await Promise.all([
        browserContext.waitForEvent('page'),
        page1.getByText("Open Multiple Windows").click()
    ]);
    console.log("3rd Tab got opened")

    //Navigate to 2nd windown
    await page2.bringToFront();
    console.log("Navigated to 2nd window")
    await page2.waitForTimeout(3000)

    await page3.bringToFront();
    console.log("Navigated to 3rd window")
    await page2.waitForTimeout(3000)

})