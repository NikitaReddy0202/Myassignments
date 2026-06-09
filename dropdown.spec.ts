import { test } from '@playwright/test';

test('Dropdown ', async ({ page }) => {
  await page.goto('https://www.telerik.com/contact')
  
  await page.selectOption('select[id="Dropdown-1"]',{index: 3}) //select by index
  await page.selectOption('#Dropdown-2',{value: "DevCraft"})//select by value
  await page.selectOption('#Country-1',{label: "India"});//select by label
  
  await page.waitForTimeout(2000)
  


})