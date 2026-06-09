import  test from '@playwright/test';

test('LoginWebsite ', async ({ page }) => {
  await page.goto('https://leaftaps.com/opentaps/control/main');
  await page.locator("#username").fill("democsr");
  await page.locator("[id='password']").fill("crmsfa");
  await page.locator(".decorativeSubmit").click();
  await page.locator(`text='CRM/SFA'`).click()
  await page.waitForTimeout(6000)
  console.log(await page.title())
  await page.waitForTimeout(6000)
  await page.locator(`text='Leads'`).click()
  //await page.locator("#ext-gen790").click()
  await page.waitForTimeout(10000)
  //await page.locator("#ext-gen18").click()
  //await page.locator("//a[contains(text(),'Create Lead')]").click()
  await page.locator("//a[contains(text(),'Create Lead')]").click()
  await page.waitForTimeout(7000)
  await page.locator("#createLeadForm_companyName").fill("Test Company")

    //Entering the first name field
    await page.locator("#createLeadForm_firstName").fill("Test FN") 

    //Entering the last name field
    await page.locator("#createLeadForm_lastName").fill("Test LN") 

    //Clicking on the Create Lead button
    await page.locator(".smallSubmit").click()

    await page.waitForTimeout(3000)

    //Clicking on the edit button
    await page.locator("//a[contains(text(),'Edit')]").click()

    //Clearing the text in the company name field and entering the new company name
    await page.locator("#updateLeadForm_companyName").clear()
    
    await page.locator("#updateLeadForm_companyName").fill("TestLeaf PLaywright")

    //Clicking on the update button
    await page.locator("//input[@value='Update']").click()




})
