import {test,expect, Locator} from '@playwright/test'

test('Static Web Tables Demo', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table:Locator = await page.locator("table[name='BookTable'] tbody")
    await expect(table).toBeVisible();

    //Count number of rows and number of columns
    const rows:Locator = page.locator("table[name='BookTable'] tbody tr"); //returns all the rows of the table
    console.log("Number of rows in a table: " + await rows.count());

    //Add assertion to validate the number of rows
    await expect(rows).toHaveCount(7); //Approach 1 

    //Approach 2: 
    const rowCount: number = await rows.count();
    console.log("Number of rows in a table: ", rowCount)
    expect(rowCount).toBe(7);

    //Count number of columns
    //const columns = page.locator("table[name='BookTable'] tbody tr th");
    const columns = await rows.locator("th");
    await expect(columns).toHaveCount(4); //Approach 1

    const columnCount = await columns.count();
    expect(columnCount).toBe(4); //approach 2 
    console.log("Number of columns: ", columnCount);

    // Read all the date from 2nd row( index 2 means 3rd row including header)
    const secondRowCells:Locator = rows.nth(2).locator("td");
    console.log(secondRowCells)
    
    const secondRowText: string []= await secondRowCells.allInnerTexts();
    console.log("2nd row data: ", secondRowText); //[ 'Learn Java', 'Mukesh', 'Java', '500' ]
    await expect(secondRowCells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);

    //Read all the data from the table excluding headers 
    console.log('Printing all table Data')
    const allrowData = await rows.all(); //get all rows locator
    for(let rows of allrowData.slice(1)) //skip the header row of the table.
    {
        const columnsData = await rows.locator("td").allInnerTexts();
        console.log(columnsData.join('\t'));
    }

  //Fetch the details based on conditions like Fetch the book names from the table where author is Mukesh
    console.log("Books written by Mukesh")
    for(let rows of allrowData.slice(1)) //skip the header row of the table.
    {
      const cells = await rows.locator("td").allInnerTexts();
      const authorName = cells[1];
      const bookName = cells[0];
      if(authorName === "Mukesh"){
        console.log(`${authorName} \t ${bookName}`)
      }
    }

    //Calculate the total price of all the books    
    console.log("Total cost of all the Books")
    let totalPrice = 0;
    for(let rows of allrowData.slice(1)) //skip the header row of the table.
    {
      const cells = await rows.locator("td").allInnerTexts();
      const price = cells[3];
      totalPrice = totalPrice+parseInt(price);
    }
    console.log("Total Price: ", totalPrice)
    expect(totalPrice).toBe(7100); //Assertion
})