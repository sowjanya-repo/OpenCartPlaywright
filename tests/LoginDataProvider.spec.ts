import{test,expect} from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import{ LoginPage} from '../pages/LoginPage.ts';
import { TestConfig } from '../test.config';
import { MyAccountPage } from '../pages/MyAccountPage.ts';
import {dataProvider} from '../utils/dataProvider.ts';

 const jsonFilePath="testData/logindata.json";
 const jsonTestData= dataProvider.getTestDataFromJson(jsonFilePath);

 const csvFilePath="testData/logindata.csv";
 const csvFileData=dataProvider.getTestDataFromCsv(csvFilePath);

    let homePage:HomePage;
    let myAccountPage:MyAccountPage;
    let loginPage:LoginPage;
    let testConfig:TestConfig;

 test.beforeEach(async({page})=>{
    homePage=new HomePage(page);
    myAccountPage=new MyAccountPage(page);
    loginPage=new LoginPage(page);
    testConfig=new TestConfig();
    await page.goto(testConfig.appUrl);
    
 })

 //Load data from Json file

 for(const data of jsonTestData){

    test(`Login Test with Json data: ${data.testName} @datadriven`,async()=>{

        expect(await homePage.isHomePageExist()).toBeTruthy();
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        await loginPage.enterEmailAddress(data.email);
        await loginPage.enterPassword(data.password);
        await loginPage.clickLogin();

        

        if(data.expected.toLowerCase()==='success'){
            const isLoggedIn=await myAccountPage.checkIsthisMyAccountPage();
            expect(isLoggedIn).toBeTruthy();
        }else{

           const loginError=await loginPage.getLoginErrorMessage();
           expect(loginError).toBe(' Warning: No match for E-Mail Address and/or Password.')
        }

    })
 }

 //Load data from CSV file

 for(const data of csvFileData){

   test(`Login test with CSVData ${data.testName} @datadriven`,async ()=>{

      expect(await homePage.isHomePageExist()).toBeTruthy();
      await homePage.clickMyAccount();
      await homePage.clickLogin();

      expect(await loginPage.isLoginPageExist()).toBeTruthy();
      await loginPage.enterEmailAddress(data.email);
      await loginPage.enterPassword(data.password);
      await loginPage.clickLogin();

      if(data.expected.toLowerCase()==='success'){

         const isLoggedIn=await myAccountPage.checkIsthisMyAccountPage();
         expect(isLoggedIn).toBeTruthy();
      }else{

         const loginError=await loginPage.getLoginErrorMessage();
         expect(loginError).toBe(' Warning: No match for E-Mail Address and/or Password.')
      }
   })
 }

 test.afterEach(async({page})=>{

    await page.waitForTimeout(3000);
    await page.close();


 })