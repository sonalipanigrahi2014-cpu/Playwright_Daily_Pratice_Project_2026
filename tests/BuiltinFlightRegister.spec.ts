import test from "@playwright/test";

test('By using Build In locator Flight Registaration',async({page})=>{
    await page.goto('https://flights.qedgetech.com/')
    //await page.getByText('Register ',{exact:true}).click({force:true})
     await page.getByRole('link', { name: 'Register' }).click();
     await page.getByPlaceholder('Name').fill('sagu')
     //await page.getByLabel('Contact Number').fill('12324567890')
     //await page.getByRole('textbox',{name:'Contact Number'}).fill('234567892')
     await page.getByPlaceholder('Contact Number').fill('2345678902')
     //await page.getByText('Email ',{exact:true}).fill('Test@gmail.com')
     await page.getByPlaceholder('Email').fill('sonu@example.com');
     await page.getByPlaceholder('Password').fill('67ytu')
     await page.getByRole('combobox').selectOption('Female')
     await page.getByPlaceholder('Date of Birth in DD-MM-YYYY').fill('04-06-2004')
     await page.getByText('By Clicking Register button you agree to the QEdge privacy policy',{exact:true}).click({force:true})
     //await page.getByRole('textbox',{name:'Register'}).click()
     await page.getByText('Register',{exact:true}).click({force:true})
    await page.waitForTimeout(3000)
})