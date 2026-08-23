import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/register.html');
  await expect(page.getByRole('heading', { name: 'Register Form' })).toBeVisible();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Akhilesh');
  await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).fill('Plawright');
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill('56789065');
  await page.locator('#countries_dropdown_menu').selectOption('Bahrain');
  await page.getByRole('textbox', { name: 'Enter email' }).fill('Sample@gmailcom');
  await page.getByRole('textbox', { name: 'Password' }).fill('ghjy');
  await page.getByRole('checkbox', { name: 'I agree with the terms and' }).check();
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.locator('#message')).toContainText('The account has been successfully created!');
});