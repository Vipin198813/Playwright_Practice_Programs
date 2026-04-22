import {test,expect} from '@playwright/test'
test("Checkboxes_Demo",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("text=Sunday").scrollIntoViewIfNeeded();
    // 
    const checkboxes = page.locator("//input[@type='checkbox']");

    for(let i=0; i<await checkboxes.count(); i++){
    await checkboxes.nth(i).check();
    await page.waitForTimeout(3000);
    }
})