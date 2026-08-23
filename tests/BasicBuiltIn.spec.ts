import test from "@playwright/test";

test('Using Built In Locator',async({page})=>{
    await page.goto('https://qa-practice.razvanvancea.ro/')
    await page.waitForTimeout(3000)
    await page.getByText('Forms',{exact:true}).click({force:true})
    //await page.getByText('Register',{exact:true}).click({force:true})
    await page.getByText(/Register/i).click()
    await page.getByRole('textbox',{name:'First Name'}).fill('Sonu')
    await page.getByPlaceholder('Enter last name').fill('Panigrahi')
    //await page.getByRole('textbox',{name:'Phone number'}).fill('45678908')
    //await page.getByRole('textbox', { name: 'Phone number' }).fill('45678908');
    await page.getByRole('textbox', { name: 'Enter phone number' }).fill('45678908');
    await page.getByRole('combobox').selectOption('India')
    await page.getByPlaceholder('Enter email').fill('Test@gmail.com')
    await page.getByRole('textbox',{name:'Password'}).fill('2345')
    await page.getByText('I agree with the terms and conditions',{exact:true}).click({force:true})
    await page.getByRole('button',{name:'Register'}).click({force:true})
    await page.waitForTimeout(3000)
})