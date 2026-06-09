import test from '@playwright/test'
test("Handling window",async({page,context})=>{
await page.goto("https://www.leafground.com/window.xhtml")
//step 1: create promise
const parentWindow=context.waitForEvent("page")
//step 2: do the action
await page.locator("//span[text()='Open']").click()
//step 3: resolve the promise(switch to child window)
const childWindow=await parentWindow
//const chTitle= await childWindow.title()
//console.log(chTitle)
await childWindow.locator("#email").fill("testemail@gmail.com")
//await childWindow.waitForTimeout(5000)
//close the child window
//await childWindow.close()
//without closing child window also we can switch to parent window
await page.bringToFront()
//after closing child window control will come to parent window
await page.locator("//span[text()='Open Multiple']").click()
})


