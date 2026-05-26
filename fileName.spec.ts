import {test,chromium} from  '@playwright/test';

test ('LaunchBrowser' ,async() =>{
    const Browser = await chromium.launch();
    const Context = await Browser.newContext();
    const Page = await Context.newPage();

    await Page.goto('https://www.facebook.com/');

})