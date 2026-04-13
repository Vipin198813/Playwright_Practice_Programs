import {test} from '@playwright/test'

test("Keyboard Actions",async({page})=>{
    await page.goto("https://ctcorphyd.com/SureshIT/login.php");
    await page.waitForTimeout(3000)
    await page.locator("//input[@name='txtUserName']").click();
    await page.waitForTimeout(3000)
    await page.keyboard.type('sureshIT')
    await page.waitForTimeout(3000)
    await page.keyboard.press("Tab");
    await page.waitForTimeout(3000)
    await page.keyboard.type('sureshit')
    await page.waitForTimeout(3000)
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
    console.log("Login Completed")
    for(let i=1;i<=2;i++)
    {
        await page.keyboard.press("Tab");
        await page.waitForTimeout(3000)
        console.log(`Tab ${i} performed`);
    }        
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
    console.log("Logout Completed");
})