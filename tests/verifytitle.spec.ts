//Write a Script to verify expected title with actual title.
import test from "@playwright/test";

test('checking the page title',async({page})=>{
    await page.goto('https://www.google.com')
    await page.waitForTimeout(3000)
    //const Expected_title='Google'
    const Expected_title='Googlee'
    //console.log(Expected_title)
    const Acual_Title=await page.title()//it will comme from Goto method. In goto page, what ever you will pass it will come same container here also
    //console.log(Acual_Title)
    if (Acual_Title.match(Expected_title)) {
      console.log(`title is matching ${Expected_title} ${Acual_Title}`)  
    }
    else{
        console.log(`Title is not matching ${Expected_title} ${Acual_Title}`)
    }
})