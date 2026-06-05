import{test,expect} from '@playwright/test'

import { HomePage } from '../pages/HomePage';
import{ LoginPage} from '../pages/LoginPage.ts';
import { TestConfig } from '../test.config';
import { MyAccountPage } from '../pages/MyAccountPage.ts';

let homePage:HomePage;
let loginPage:LoginPage;
let myAccount:MyAccountPage;
let testConfig:TestConfig;

test.beforeEach(async({page})=>{

    homePage=new HomePage(page);
    loginPage=new LoginPage(page);
    myAccount=new MyAccountPage(page);
    testConfig=new TestConfig();
    await page.goto(testConfig.appUrl);

})

test('Verify Account Login @sanity @master @regression',async ()=>{

    await homePage.isHomePageExist();
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    await loginPage.enterEmailAddress(testConfig.email);
    await loginPage.enterPassword(testConfig.password);
    await loginPage.clickLogin();

    const visible=myAccount.checkIsthisMyAccountPage();
    expect(visible).toBeTruthy();

})

test.afterEach(async({page})=>{

    await page.waitForTimeout(3000);
    await page.close();

})

