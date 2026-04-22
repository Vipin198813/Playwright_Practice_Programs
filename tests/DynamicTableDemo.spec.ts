import {test,expect, Locator} from '@playwright/test'

test('Static Web Tables Demo', async({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-table");

    const table: Locator = page.locator(".table.table");
    await expect(table).toBeVisible();

    console.log("number of row")
    const rows:Locator[] = await table.locator("tbody tr").all();
    console.log("Number of rows in a table: ", rows.length)
    expect(rows).toHaveLength(4);

    //Step1: For chrome process get the value of CPU load
    // Read each row
    let cpuLoad = ""
    for(const row of rows)
    {
        const processName:string = await row.locator("td").nth(0).innerText();
        if(processName === "Chrome")
        {
            cpuLoad = await row.locator("td:has-text('%')").innerText();
            console.log("CPU Load of Chrome", cpuLoad);
            break;
        }
    }
    //Compare it with the value present in the yellow box
    let yellowBoxValue: string = await page.locator("#chrome-cpu").innerText();
    console.log("CPU Load value in the yellow box: ", yellowBoxValue);
    if(yellowBoxValue.includes(cpuLoad)){
        console.log("CPU Load value is equal")
    }
    else{
        console.log("CPU Load value is not equal")
    }
    expect(yellowBoxValue).toContain(cpuLoad)
    
})