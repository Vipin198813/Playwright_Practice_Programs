import {test} from '@playwright/test'

test("Keyboard Actions",async({page})=>{
    await page.goto("https://vinothqaacademy.com/webtable/");
    await page.waitForTimeout(3000)
     //count rows
    const rowCount = await page.locator("//*[@id='myTable']/tbody/tr").count();
    console.log("Row count is: " + rowCount)
    //Column Counts
    const colCount = await page.locator("//*[@id='myTable']/tbody/tr[1]/td").count();
    console.log("Column count is: " + colCount)
    // Cell Data
    const cellData = await page.locator("//*[@id='myTable']/tbody/tr[2]/td[2]").textContent();
    console.log("Cell Data is: " + cellData)

    for(let i=1;i<rowCount;i++)
    {
    const tableData =  await page.locator("//*[@id='myTable']/tbody/tr["+i+"]").innerText();
    console.log(tableData);    
    }        
    
    await page.waitForTimeout(3000)

});