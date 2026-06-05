# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> Verify Account creation @sanity @master @regression
- Location: tests\AccountRegistration.spec.ts:26:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | import { HomePage } from '../pages/HomePage'
  4  | import {RegistrationPage} from '../pages/RegistrationPage.ts'
  5  | import { TestConfig } from '../test.config.ts'
  6  | import{ dataProvider } from '../utils/dataProvider.ts'
  7  | import { randamDataGenerator } from '../utils/randamDataGenerator.ts' 
  8  | 
  9  | let testConfig:TestConfig;
  10 | let homePge:HomePage;
  11 | let registrationPage:RegistrationPage;
  12 | 
  13 | test.beforeEach(async ({page})=>{
  14 | 
  15 |  testConfig=new TestConfig();
  16 |  await page.goto(testConfig.appUrl);
  17 | 
  18 |  homePge=new HomePage(page);
  19 |  registrationPage=new RegistrationPage(page);
  20 | 
  21 | }
  22 | 
  23 | )
  24 | 
  25 | 
  26 | test('Verify Account creation @sanity @master @regression',async ()=>{
  27 | 
  28 |     await homePge.clickMyAccount();
  29 |     await homePge.clickRegister();
  30 | 
  31 |     const isRegExist=await registrationPage.isRegisterPageExist();
  32 |     expect(isRegExist).toBeTruthy();
  33 |     await registrationPage.enterFirstName(randamDataGenerator.getFirstname());
  34 |     await registrationPage.enterLastName(randamDataGenerator.getLastname());
  35 |     await registrationPage.enterEMailID(randamDataGenerator.getEmailID());
  36 |     await registrationPage.enterTelephoneNo(randamDataGenerator.getTelephoneNo());
  37 |     const password=randamDataGenerator.getPassword();
  38 |     await registrationPage.enterPassword(password);
  39 |     await registrationPage.enterConfirmPassword(password);
  40 | 
  41 |     await registrationPage.checkPrivacyPolcy();
  42 |     await registrationPage.clickContinue();
  43 | 
  44 |     const confirmationText=await registrationPage.getTextConfirmation();
  45 |     expect(confirmationText).toBeTruthy();
  46 | }
  47 | )
  48 | 
  49 | test.afterEach(async ({page})=>{
> 50 |     await page.waitForTimeout(3000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  51 |     await page.close();
  52 | })
```