import {test,expect} from '@playwright/test'
//Verify Page title: Open a website and assert the title
test("Verify Title", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html")
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle(title);
    //Alert handing
    page.on("dialog",async(dialog)=>{
        console.log("Alert message is: ", dialog.message())
        await page.waitForTimeout(3000)
        await dialog.accept("Vipin Rathore")
    })
    // await page.waitForTimeout(3000);
    // await page.locator(':text("click the button to display an alert box:")').click();
    // await page.waitForTimeout(3000);
    // await page.getByRole('link', { name: 'Alert with OK & Cancel' }).click();
    // await page.waitForTimeout(3000);
    // await page.locator(':text("click the button to display a confirm box")').click();
    // //Enter textbox in alert
    await page.getByRole('link', { name: 'Alert with Textbox' }).click();
    await page.waitForTimeout(3000);
    await page.getByText('click the button to demonstrate the prompt box').click()
    //Assert
    await page.waitForTimeout(3000);
    const textmessage = await page.getByText('Hello Vipin Rathore How are you today').textContent();
    console.log(textmessage);
    await page.waitForTimeout(3000);
    expect(textmessage).toContain("Vipin");
})