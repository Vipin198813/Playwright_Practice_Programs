import {Locator, test} from '@playwright/test'

test("Pagination Table",async({page})=>{
    //Open the website/url in the browser
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Location table
    const table = await page.locator("#productTable")
    
    //count number of columns
    const columns = await table.locator('thead tr th')
    console.log("Number of columns" , await columns.count())

    //Count number of rows
    const rows = await table.locator('tbody tr')
    console.log("Number of rows" , await rows.count())
});

test("Web Table Demo", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")

    const products:Locator = page.locator(".product-title");

    console.log(await products.nth(2).innerText()); //return only visible content
    console.log(await products.nth(3).textContent());

    const count = await products.count();

    for(let i=0;i<count;i++)
    {
        const productName:string = await products.nth(i).innerText(); 
        console.log(productName)
       //Extract plain text and eliminate whitespaces and line break
       //innertext() method return only string content

        const productName1: string | null = await products.nth(i).textContent(); 
        console.log(productName1)
        //Extract text including hidden elements. Includes extra whitespaces, line breaks etc

        const productName2: string | null = await products.nth(i).textContent(); 
        console.log(productName2?.trim())
        
        //allInnerText() vs allTextContent()
        console.log("---------------allInnerText() vs allTextContent()--------------")
        const productNames:string[] = await products.allInnerTexts()
        console.log(productNames)

        const productNames1:string[] = await products.allTextContents()
        console.log(productNames1)
        
        const final_ProductList:string[] = productNames1.map(text => text.trim())
        console.log(final_ProductList)

        // for of loop
        //all(): It converts locator type to locator type of an array
                // it return array of locators
        const productLocators:Locator[] = await products.all();
        console.log(productLocators);

        for(let productLocator of productLocators)
        {
            console.log(await productLocator.innerText());
        }
    }

})
