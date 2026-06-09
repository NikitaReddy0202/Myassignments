import { test } from '@playwright/test';

test('LoginWebsite ', async ({ page }) => {
  await page.goto('https://leaftaps.com/opentaps/control/main');
  await page.locator("#username").fill("democsr");
  await page.locator("[id='password']").fill("crmsfa");
  await page.locator(".decorativeSubmit").click();
  await page.locator(`text='CRM/SFA'`).click()
  await page.waitForTimeout(6000)
  console.log(await page.title())


})