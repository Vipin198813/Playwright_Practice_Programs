import {test,expect} from '@playwright/test'
// test("TC001_Open Application",async({page})=>{
//      await page.goto("https://ctcorphyd.com/SureshIT/login.php")
//      page.locator("//input[@name='txtUserName']").fill("sureshit")
//      await page.waitForTimeout(3000);
//      page.locator("//input[@name='txtPassword']").fill("sureshit")
//      await page.waitForTimeout(3000);
//      page.locator('//input[@name="Submit"]').click();
//      await page.waitForTimeout(3000)
// })

test("TC002_Open Application",async({page})=>{
    await page.goto("https://ctcorphyd.com/SureshIT/login.php")
    await page.waitForTimeout(3000);
    // verify Login Name label on landing page
    await expect(page.getByText("Login Name :")).toBeVisible();
    await expect(page.locator("//*[@id='Table_01']/tbody/tr[1]/td[2]/img")).toBeVisible();
    page.locator("//input[@name='txtUserName']").fill("sureshIT");
    await page.waitForTimeout(5000);
    page.locator("//input[@name='txtPassword']").fill("sureshit")
    await page.waitForTimeout(3000);
    page.locator('//input[@name="Submit"]').click();
     await page.waitForTimeout(3000);
    await page.getByRole('link',{name:"Logout"}).click();
                        //first argument - role of the object
                        //second argument - name of the object
    await page.waitForTimeout(3000);         
})