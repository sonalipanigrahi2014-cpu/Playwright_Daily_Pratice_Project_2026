import test from "@playwright/test";

test('Xpath Locator',async({page})=>{
     await page.goto('https://qa-practice.razvanvancea.ro/register.html')
    await page.waitForTimeout(3000)
    await page.locator('//input[@placeholder="Enter first name"]').fill('sonali')
    await page.locator('//div[@class="form-group"]//input[@id="lastName"]').fill('Panigrahi')
    await page.locator('//label[@for="lastName"]/following-sibling::input[@id="phone"]').fill('34578')
    await page.locator('//select[@id="countries_dropdown_menu"]').selectOption('India')
    //await page.locator('//select[contains(@class,"default custom-select")]').selectOption('india')
    await page.locator('//input[contains(@name,"Addr")]').fill('Test@gmail.com') 
    await page.locator('//input[starts-with(@type,"pass")]').fill('wer45')
    await page.locator('//input[@id="exampleCheck1"]').click() 
    await page.locator('//button[@id="registerBtn"]').click()        
    await page.waitForTimeout(3000)
})