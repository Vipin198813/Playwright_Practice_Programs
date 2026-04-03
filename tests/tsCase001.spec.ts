import {test} from '@playwright/test'
test("TC001_Open Application",async({page})=>{
     await page.goto("https://ctcorphyd.com/SureshIT/login.php")
     page.locator("//input[@name='txtUserName']").fill("sureshit")
     await page.waitForTimeout(3000);
     page.locator("//input[@name='txtPassword']").fill("sureshit")
     await page.waitForTimeout(3000);
     page.locator('//input[@name="Submit"]').click();
     await page.waitForTimeout(3000)
})
