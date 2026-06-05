import{test,expect} from '@playwright/test'

import { HomePage } from '../pages/HomePage'
import {RegistrationPage} from '../pages/RegistrationPage.ts'
import { TestConfig } from '../test.config.ts'
import{ dataProvider } from '../utils/dataProvider.ts'
import { randamDataGenerator } from '../utils/randamDataGenerator.ts' 

let testConfig:TestConfig;
let homePge:HomePage;
let registrationPage:RegistrationPage;

test.beforeEach(async ({page})=>{

 testConfig=new TestConfig();
 await page.goto(testConfig.appUrl);

 homePge=new HomePage(page);
 registrationPage=new RegistrationPage(page);

}

)


test('Verify Account creation @sanity @master @regression',async ()=>{

    await homePge.clickMyAccount();
    await homePge.clickRegister();

    const isRegExist=await registrationPage.isRegisterPageExist();
    expect(isRegExist).toBeTruthy();
    await registrationPage.enterFirstName(randamDataGenerator.getFirstname());
    await registrationPage.enterLastName(randamDataGenerator.getLastname());
    await registrationPage.enterEMailID(randamDataGenerator.getEmailID());
    await registrationPage.enterTelephoneNo(randamDataGenerator.getTelephoneNo());
    const password=randamDataGenerator.getPassword();
    await registrationPage.enterPassword(password);
    await registrationPage.enterConfirmPassword(password);

    await registrationPage.checkPrivacyPolcy();
    await registrationPage.clickContinue();

    const confirmationText=await registrationPage.getTextConfirmation();
    expect(confirmationText).toBeTruthy();
}
)

test.afterEach(async ({page})=>{
    await page.waitForTimeout(3000);
    await page.close();
})