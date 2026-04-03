import {test} from "@playwright/test"
test("Passing Test Data",async({page})=>{
    //=============Test Data===============
    let url: string = "https://ctcorphyd.com/SureshIT/login.php"
    let username:string = "sureshIT"
    let password:string = "sureshit"

    page.goto(url);
    await page.waitForTimeout(3000)
    //Hard Coded Data: Provide data in some automation script
    await page.locator("//input[@name='txtUserName']").fill(username);
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='txtPassword']").fill(password)
    await page.waitForTimeout(3000)
    await page.locator("//input[@name='Submit']").click();
    //Variable Data: Assign test data in some variable and then use that variables 
    //in automation scripts

})