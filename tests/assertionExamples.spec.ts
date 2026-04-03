import {test,expect} from '@playwright/test'
//Verify Page title: Open a website and assert the title
test("Verify Title", async({page})=>{
    await page.goto("https://ctcorphyd.com/SureshIT/login.php")
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle(title);
})

//Verify page URL: Open a website and assert the title
test('Verify URL', async({page})=>{
    await page.goto("https://ctcorphyd.com/SureshIT/login.php")
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL("https://ctcorphyd.com/SureshIT/login.php");
})

//Element Visibility Assertion
test("Element Visible Assertion Demo", async({page})=>{
    await page.goto("https://portal.damcogroup.com/login");
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL("https://portal.damcogroup.com/login");
    await expect(page.getByRole("img",{name:"logo"})).toBeVisible();
    await expect(page.getByRole("button",{name:'Login'})).toBeVisible();
    await expect(page.getByRole("button",{name:'Login'})).toBeEnabled();
    await page.waitForTimeout(3000);
    await expect(page.getByRole("link",{name: "Forgot Password"})).toBeVisible();
    await page.getByRole("link",{name:"Forgot Password"}).click()
    await page.waitForTimeout(3000);

})