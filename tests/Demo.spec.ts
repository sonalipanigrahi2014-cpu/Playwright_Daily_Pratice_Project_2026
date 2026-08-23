import { test, expect } from '@playwright/test';

test('Sample Codegen without Rcording',async({page})=>{
    
await page.goto('https://qa-practice.razvanvancea.ro/');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Register' }).click();
  await expect(page.getByRole('heading', { name: 'Register Form' })).toBeVisible();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Aklilest');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue('Aklilest');
  await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).click();
  await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).fill('sel');
  await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).click();
  await page.getByRole('textbox', { name: 'Enter phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill('34567');
  await expect(page.getByRole('textbox', { name: 'Enter phone number' })).toHaveValue('34567');
  await page.locator('#countries_dropdown_menu').selectOption('Argentina');
  await expect(page.locator('#countries_dropdown_menu')).toHaveValue('Argentina');
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('Sample@gmail.com');
  await expect(page.getByRole('textbox', { name: 'Enter email' })).toHaveValue('Sample@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('erty');
  await page.getByRole('checkbox', { name: 'I agree with the terms and' }).check();
  await expect(page.getByText('I agree with the terms and')).toBeVisible();
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('The account has been').click();
  await expect(page.getByText('The account has been')).toBeVisible();
  await page.getByText('The account has been').click();
  await page.getByText('The account has been').click();
})