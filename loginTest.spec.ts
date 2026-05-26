import { test } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
})