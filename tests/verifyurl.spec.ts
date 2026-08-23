//write a script to verify url is secured or not by using asynchronous function
import test from "@playwright/test";

test('verify URL',async function({page}){
 //await page.goto("http://mail.googlee.com")
 await page.goto("http://mail.google.com")
 await page.waitForTimeout(4000)
 //const expected_link="https://"
 const expected_link="httpss://"
 const actual_link=page.url()
 if (actual_link.startsWith(expected_link)) {
  console.log(`url is secured-: ${expected_link} ${actual_link}`)  
 }
 else{
    console.log(`url is not secured-: ${expected_link} ${actual_link}`)
 }
})