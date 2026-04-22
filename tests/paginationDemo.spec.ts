import {expect, Locator, test} from '@playwright/test'

test("Pagination Table",async({page})=>{
    //Open the website/url in the browser
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    let hasMorePages = true;
    while(hasMorePages){
        const rows = await page.locator(".display.dataTable tbody tr").all()
        for(let row of rows)
        {
            console.log(await row.innerText());
        }
  
    await page.waitForTimeout(2000)
    const nextButton:Locator = page.locator("//button[@aria-label='Next']")
    const isDisabled = await nextButton.getAttribute('class')

    if(isDisabled?.includes('disabled'))
    {
       hasMorePages = false;     
    }
    else{
        await nextButton.click();
    }
}
})

test("Pagination Table1",async({page})=>{
    //Open the website/url in the browser
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const dropdown:Locator = await page.locator("#dt-length-0");
    await dropdown.selectOption('25');

    const rows = await page.locator(".display.dataTable tbody tr").all();
    await expect(rows.length).toBe(25);

    const searchBox:Locator = page.locator("#dt-search-0")
    await searchBox.fill("Serge Baldwin")

    const rows1 = await page.locator(".display.dataTable tbody tr").all();
    if(rows1.length>=1)
    {
        let matchFound = false;
        for(let row of rows1)
        {
            const text = await row.innerText();
            if(text.includes("Serge Baldwin"))
            {   
                console.log("Record Found successfully. ")
                matchFound = true;
                break;
            }
        }
    }
    else{
        console.log("No rows found with search text")
    }
})
