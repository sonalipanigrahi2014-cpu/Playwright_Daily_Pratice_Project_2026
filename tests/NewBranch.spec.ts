//Write a script to print title,url along with length
import test from "@playwright/test";


test('validation get methods',async({page})=>{
    //launch url
    await page.goto('https://www.tatacliq.com/')
    //suspend tool for 4 second
    await page.waitForTimeout(4000)//hard coded time
    //get title and length of title
    const page_title:string=await page.title()
    console.log(page_title)
    console.log(page_title.length)
    //get url and length of url
    const str_url=page.url()
    console.log(str_url)
    console.log(str_url.length)
})