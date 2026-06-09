import { chromium,webkit,test } from '@playwright/test';

test('Redbus', async () => {
  const Browser = await chromium.launch({channel: 'msedge'});
    const Context = await Browser.newContext();
    const Page = await Context.newPage();

    await Page.goto('https://www.redbus.in/?gad_source=1&gad_campaignid=22479772058&gclid=Cj0KCQjwz9_QBhD_ARIsADnSCfAFIaYZLJl-J2ZMxZoymcLyZT_r_1u5ykByO7YYvXXN7j5kelgBS3waAlJyEALw_wcB');
    const title=await Page.title()
    const url=await Page.url()
   console.log(title)
   console.log(url)



})


test('Flipkart', async () => {
  const Browser = await webkit.launch();
    const Context = await Browser.newContext();
    const Page = await Context.newPage();

    await Page.goto('https://www.flipkart.com/');
    const title1=await Page.title()
    const url1=await Page.url()
   console.log(title1)
   console.log(url1)



})


