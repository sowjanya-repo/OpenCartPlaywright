# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginDataProvider.spec.ts >> Login Test with Json data: Invalid login @datadriven
- Location: tests\LoginDataProvider.spec.ts:28:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: " Warning: No match for E-Mail Address and/or Password."
Received: " Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | 
  3  | import { HomePage } from '../pages/HomePage';
  4  | import{ LoginPage} from '../pages/LoginPage.ts';
  5  | import { TestConfig } from '../test.config';
  6  | import { MyAccountPage } from '../pages/MyAccountPage.ts';
  7  | import {dataProvider} from '../utils/dataProvider.ts';
  8  | 
  9  |  const jsonFilePath="testData/logindata.json";
  10 |  const jsonTestData= dataProvider.getTestDataFromJson(jsonFilePath);
  11 | 
  12 |     let homePage:HomePage;
  13 |     let myAccountPage:MyAccountPage;
  14 |     let loginPage:LoginPage;
  15 |     let testConfig:TestConfig;
  16 | 
  17 |  test.beforeEach(async({page})=>{
  18 |     homePage=new HomePage(page);
  19 |     myAccountPage=new MyAccountPage(page);
  20 |     loginPage=new LoginPage(page);
  21 |     testConfig=new TestConfig();
  22 |     await page.goto(testConfig.appUrl);
  23 |     
  24 |  })
  25 | 
  26 |  for(const data of jsonTestData){
  27 | 
  28 |     test(`Login Test with Json data: ${data.testName} @datadriven`,async()=>{
  29 | 
  30 |         expect(await homePage.isHomePageExist()).toBeTruthy();
  31 |         await homePage.clickMyAccount();
  32 |         await homePage.clickLogin();
  33 | 
  34 |         await loginPage.enterEmailAddress(data.email);
  35 |         await loginPage.enterPassword(data.password);
  36 |         await loginPage.clickLogin();
  37 | 
  38 |         
  39 | 
  40 |         if(data.expected.toLowerCase()==='success'){
  41 |             const isLoggedIn=await myAccountPage.checkIsthisMyAccountPage();
  42 |             expect(isLoggedIn).toBeTruthy();
  43 |         }else{
  44 | 
  45 |            const loginError=await loginPage.getLoginErrorMessage();
> 46 |            expect(loginError).toBe(' Warning: No match for E-Mail Address and/or Password.')
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  47 |         }
  48 | 
  49 |     })
  50 |  }
  51 | 
  52 |  test.afterEach(async({page})=>{
  53 | 
  54 |     await page.waitForTimeout(3000);
  55 |     await page.close();
  56 | 
  57 | 
  58 |  })
```