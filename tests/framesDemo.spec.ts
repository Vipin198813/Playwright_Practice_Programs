import {test,expect} from '@playwright/test'

// import { test, expect } from '@playwright/test';

// test("Frames Demo", async ({ page }) => {
//     await page.goto("https://demo.automationtesting.in/Frames.html");
//     const frameObject = page.frameLocator("#singleframe");

//     // Correct CSS selector
//     await frameObject.locator("input[type='text']").fill("Vipin");
//     await expect(frameObject.locator("input[type='text']")).toHaveValue("Vipin");
//     await page.waitForTimeout(5000);
// });

test("Handle Frames",async({page})=>{
    await page.goto("https://practice-automation.com/iframes/");
    const allFrames = await page.frames();
    console.log('Numbers of frames on page', + allFrames.length);
    //Locating frame element using its name or with its url. 
    //pause the 3 seconds
    await page.waitForTimeout(3000)
    
})