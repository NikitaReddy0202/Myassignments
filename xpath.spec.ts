import { test } from '@playwright/test';

test('xpath ', async ({ page }) => {
  await page.goto('https://login.salesforce.com/')
  
  await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com") 
  await page.locator("//input[contains(@class,'password')]").fill("TestLeaf@2025")
  await page.locator("//input[contains(@class,'button')]").click()
  
})