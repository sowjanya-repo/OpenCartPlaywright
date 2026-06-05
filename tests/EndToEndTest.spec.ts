import{test,expect,Page} from '@playwright/test'
import { RegistrationPage } from '../pages/RegistrationPage'
import { HomePage } from '../pages/HomePage'
import { MyAccountPage } from '../pages/MyAccountPage'
import { LoginPage } from '../pages/LoginPage'
import { SearchResultsPage } from '../pages/SearchResultsPage'
import { ProductPage } from '../pages/ProductPage'
import { ShoppingCartPage } from '../pages/ShoppingCartPage'
import { LogoutPage } from '../pages/LogoutPage'
import { TestConfig } from '../test.config'
import { randamDataGenerator } from '../utils/randamDataGenerator'
import { CheckOutPage } from '../pages/CheckOutPage'


// This is the main test block that runs the entire flow
test('End to End testing @end-to-end',async({page})=>{

    const testConfig=new TestConfig();

     // Navigate to the application's home page
     await page.goto(testConfig.appUrl);

     // Step 1: Register a new account and capture the generated email
    let regEmail=await performRegistration(page);
    console.log("✅ Registration is completed!");

    // Step 2: Logout after successful registration
    await performLogout(page);
    console.log("✅ Logout is completed!");

    // Step 3: Login with the registered email

    await performLogin(page,regEmail) ;
    console.log("✅ Login is completed!");

    await page.waitForTimeout(3000);
    
      // Step 4: Search for a product and add it to the cart
    await addProductToCart(page);
    console.log("✅ Product added to cart!");

    await page.waitForTimeout(3000);

    // Step 5: Verify the contents of the shopping cart
    await verifyShoppingCart(page);
    console.log("✅ Shopping cart verification completed!");

    // Step 6: Perform checkout (skipped for demo site)
    // await performCheckout(page);
    await performCheckout(page);
    console.log("✅ checkout verification completed!");

})

// Function to register a new user account

async function performRegistration(page:Page){

    const homePage=new HomePage(page);
    expect(homePage.isHomePageExist()).toBeTruthy();
    await homePage.clickMyAccount();
    await homePage.clickRegister();

    const registrationPage=new RegistrationPage(page);
    await registrationPage.enterFirstName(randamDataGenerator.getFirstname());
    await registrationPage.enterLastName(randamDataGenerator.getLastname() );
    let email:string=randamDataGenerator.getEmailID()
    await registrationPage.enterEMailID(email);
    await registrationPage.enterTelephoneNo(randamDataGenerator.getTelephoneNo());
    await registrationPage.enterPassword('test123');
    await registrationPage.enterConfirmPassword('test123');
    await registrationPage.checkPrivacyPolcy();
    await registrationPage.clickContinue();


    // Validate that the registration was successful

    expect(await registrationPage.getTextConfirmation()).toBeTruthy();
    
    return email;

}

// Function to log out the current user

async function performLogout(page:Page){

    const myAccountPage=new MyAccountPage(page);
    const logoutPage:LogoutPage=await myAccountPage.clickLogout();
    expect(await logoutPage.isLogoutheadingVisibile()).toBeTruthy();

    const homePage:HomePage=await logoutPage.clickContinueButton();

}

// Function to log in using the registered email
async function performLogin(page:Page,email:string){

    const testConfig=new TestConfig();
    await page.goto(testConfig.appUrl);

    const homePage=new HomePage(page);
    expect(await homePage.isHomePageExist()).toBeTruthy();

    await homePage.clickMyAccount();
    const loginPage:LoginPage=await homePage.clickLogin();

    await loginPage.enterEmailAddress(email);
    await loginPage.enterPassword('test123');
    loginPage.clickLogin();

    const myAccountPage=new MyAccountPage(page);
    expect(await myAccountPage.checkIsthisMyAccountPage()).toBeTruthy();

}

// Function to search for a product and add it to cart

async function addProductToCart(page:Page){

    const homePage=new HomePage(page);

    const testConfig=new TestConfig();
    const productName:string=testConfig.productName;
    const productQuantity:string=testConfig.productQuantity;

    await homePage.enterProduct(productName);
    const serachResultPage:SearchResultsPage=await homePage.clickSearch();
    expect(await serachResultPage.isSearcHResultExist()).toBeTruthy();

    expect(serachResultPage.isSearchProductExist(productName)).toBeTruthy();

    const productPage=await serachResultPage.selectProduct(productName);
    await productPage?.enterQuantity(productQuantity);
    await productPage?.clcikAddToCart();

    await page.waitForTimeout(3000);
    expect( productPage?.isSuccessBannerVisible()).toBe(true);

}

// Function to verify the shopping cart details

async function verifyShoppingCart(page:Page){

    const productPage=new ProductPage(page);

    await productPage.clickItemsButton();
    const shoppingCartPage:ShoppingCartPage=await productPage.clcikViewCartIcon();
    await page.waitForTimeout(3000);
    expect(await shoppingCartPage.isshoppingCartPageLoaded()).toBeTruthy();
    console.log("🛒 Navigated to shopping cart!");

    const testConfig=new TestConfig();

    expect(await shoppingCartPage.getTotalPrice()).toBe(testConfig.totalPrice);

    await shoppingCartPage.clickCOntinue();

}


// Function to perform checkout (disabled for demo site)
async function performCheckout(page: Page) {
    // Checkout feature is not implemented since it's a demo site.
    // Place your checkout flow logic here if backend is available.
    const checkoutPage=new CheckOutPage(page);
    expect(await checkoutPage.isCheckoutPageExists()).toBeTruthy();

}