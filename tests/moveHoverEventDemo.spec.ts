import {test,expect} from '@playwright/test'

test("AssertionsDemo", async({ page })=>
    {
    //Open Application URL
    page.goto("https://ctcorphyd.com/SureshIT/login.php");
    
    //verify if a particular text is visible on page - Assertion
    await expect(page.getByText('Login Name :')).toBeVisible();
    
    await page.waitForTimeout(3000);
    page.locator("//input[@name='txtUserName']").fill('sureshIT');
    
    await page.waitForTimeout(3000);
    page.locator("//input[@name='txtPassword']").fill('sureshit')
    
    await page.waitForTimeout(3000);
    //await page.waitForTimeout(3000);
    await expect(page.locator("//input[@name='Submit']")).toBeEnabled();
    await expect(page.locator("//input[@name='Submit']")).toBeVisible();
    //verify the text is present on home page i.e.: Welcome sureshit
    await page.locator("//input[@name='Submit']").click();
    await page.waitForTimeout(3000);
    //Mouse hover action
    await page.getByText('PIM').hover();
    await page.waitForTimeout(3000);
    
    await page.getByText("ADD EMPLOYEE").click();
    await page.waitForTimeout(6000);
    await expect(page.frameLocator('#rightMenu').getByText('PIM : Add Employee')).toBeVisible();
    console.log("Mouse Hover Test is Passed")
    // await expect(page).toHaveTitle("SureshIT");
    // let title = await page.title();
    // console.log(title);
    // await page.waitForTimeout(3000);
 }
)