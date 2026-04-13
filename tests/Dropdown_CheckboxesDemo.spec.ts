import {test,expect} from '@playwright/test'
test("Keyboard Actions",async({page})=>{
    await page.goto("https://ctcorphyd.com/SureshIT/login.php");
    await page.waitForTimeout(3000)
    await page.locator("//input[@name='txtUserName']").click();
    await page.keyboard.type('sureshIT')
    await page.keyboard.press("Tab");
    await page.keyboard.type('sureshit')
    await page.keyboard.press("Enter")
    console.log("Login Completed")
    //Enter into the frame
    await page.waitForTimeout(3000)
    const frame = page.frameLocator("//iframe[@id='rightMenu']");
    // await page.waitForTimeout(3000)
    await frame.locator("//select[@name='loc_code']").selectOption('Emp. ID');
    // await page.waitForTimeout(3000)
    await expect(frame.locator("//input[@name='loc_name']")).toBeEditable();
    await frame.locator("//input[@name='loc_name']").fill('3499');
    await frame.locator("//input[@value='Search']").click();
    await page.waitForTimeout(3000)
    await frame.locator("//input[@name='chkLocID[]']").check();
    await page.waitForTimeout(3000)
    await frame.locator("//input[@value='Delete']").click();
    console.log("Record Deleted")
    await page.locator("text=Logout").click();
    await page.waitForTimeout(3000)
    console.log("User Logged out successfully")

})