import {test,expect, Locator} from '@playwright/test'

test('Static Web Tables Demo', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table: Locator = page.locator("#taskTable");
    await expect(table).toBeVisible();

    //Number of rows in the table
    const rowCount:Locator = table.locator("tbody tr");
    console.log("Number of rows in table: ", await rowCount.count())

    //Number of columns in table
    const colCount: Locator = table.locator("th")
    console.log("Number of columns in table: ", await colCount.count())

    //Find all the content of all the rows: 
    let rowContents:Locator[] = await table.locator("tbody tr").all();
    console.log(rowContents);
    for(let rows of rowContents)
    {
        let cellContent:string = await rows.locator("td").nth(0).innerText();
        if(cellContent==="Chrome")
        {   
            const cpuLoad = await rows.locator("td:has-text('%')").innerText();
            console.log("cpu load of the chrome process:", cpuLoad);
        }
    } 

    //Number first find the index of Memory field column
    const headers = table.locator("thead tr th");
    const headerTexts = await headers.allInnerTexts();
    // Step 2: Find Memory column index
    const memoryIndex = headerTexts.findIndex(h => h.includes("Memory"));
    //const memoryIndex = headerTexts.indexOf("Memory (MB)");

    console.log("Memory column index:", memoryIndex);

    // Step 3: Get all rows
    const rows = table.locator("tbody tr");
    for (const row of await rows.all()) {
        const name = await row.locator("td").nth(0).innerText();
        if (name === "Firefox") {
            const memory = await row.locator("td").nth(memoryIndex).innerText();
            console.log("Memory of Firefox:", memory);
            break;
        }
    }
})