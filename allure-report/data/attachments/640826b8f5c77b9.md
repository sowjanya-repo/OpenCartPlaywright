# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> End to End testing @regression @master
- Location: tests\EndToEndTest.spec.ts:15:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "Your Store" [ref=e33] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home
        - img "Your Store" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Search" [ref=e71] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/search
    - generic [ref=e73]:
      - heading "Search" [level=1] [ref=e74]
      - generic [ref=e75]: Search Criteria
      - generic [ref=e76]:
        - textbox "Search Criteria" [ref=e78]:
          - /placeholder: Keywords
        - combobox [ref=e80]:
          - option "All Categories" [selected]
          - option "Desktops"
          - option "PC"
          - option "Mac"
          - option "Laptops & Notebooks"
          - option "Macs"
          - option "Windows"
          - option "Components"
          - option "Mice and Trackballs"
          - option "Monitors"
          - option "test 1"
          - option "test 2"
          - option "Printers"
          - option "Scanners"
          - option "Web Cameras"
          - option "Tablets"
          - option "Software"
          - option "Phones & PDAs"
          - option "Cameras"
          - option "MP3 Players"
          - option "test 11"
          - option "test 12"
          - option "test 15"
          - option "test 16"
          - option "test 17"
          - option "test 18"
          - option "test 19"
          - option "test 20"
          - option "test 25"
          - option "test 21"
          - option "test 22"
          - option "test 23"
          - option "test 24"
          - option "test 4"
          - option "test 5"
          - option "test 6"
          - option "test 7"
          - option "test 8"
          - option "test 9"
        - generic [ref=e82] [cursor=pointer]:
          - checkbox "Search in subcategories" [disabled] [ref=e83]
          - text: Search in subcategories
      - paragraph [ref=e84]:
        - generic [ref=e85] [cursor=pointer]:
          - checkbox "Search in product descriptions" [ref=e86]
          - text: Search in product descriptions
      - button "Search" [ref=e87] [cursor=pointer]
      - heading "Products meeting the search criteria" [level=2] [ref=e88]
      - paragraph [ref=e89]: There is no product that matches the search criteria.
  - contentinfo [ref=e90]:
    - generic [ref=e91]:
      - generic [ref=e92]:
        - generic [ref=e93]:
          - heading "Information" [level=5] [ref=e94]
          - list [ref=e95]:
            - listitem [ref=e96]:
              - link "About Us" [ref=e97] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=4
            - listitem [ref=e98]:
              - link "Delivery Information" [ref=e99] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=6
            - listitem [ref=e100]:
              - link "Privacy Policy" [ref=e101] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=3
            - listitem [ref=e102]:
              - link "Terms & Conditions" [ref=e103] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=5
        - generic [ref=e104]:
          - heading "Customer Service" [level=5] [ref=e105]
          - list [ref=e106]:
            - listitem [ref=e107]:
              - link "Contact Us" [ref=e108] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - listitem [ref=e109]:
              - link "Returns" [ref=e110] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/return/add
            - listitem [ref=e111]:
              - link "Site Map" [ref=e112] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap
        - generic [ref=e113]:
          - heading "Extras" [level=5] [ref=e114]
          - list [ref=e115]:
            - listitem [ref=e116]:
              - link "Brands" [ref=e117] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer
            - listitem [ref=e118]:
              - link "Gift Certificates" [ref=e119] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/voucher
            - listitem [ref=e120]:
              - link "Affiliate" [ref=e121] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=affiliate/login
            - listitem [ref=e122]:
              - link "Specials" [ref=e123] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special
        - generic [ref=e124]:
          - heading "My Account" [level=5] [ref=e125]
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "My Account" [ref=e128] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account
            - listitem [ref=e129]:
              - link "Order History" [ref=e130] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order
            - listitem [ref=e131]:
              - link "Wish List" [ref=e132] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - listitem [ref=e133]:
              - link "Newsletter" [ref=e134] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
      - separator [ref=e135]
      - paragraph [ref=e136]:
        - text: Powered By
        - link "OpenCart" [ref=e137] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  21  | 
  22  |      // Step 1: Register a new account and capture the generated email
  23  |     let regEmail=await performRegistration(page);
  24  |     console.log("✅ Registration is completed!");
  25  | 
  26  |     // Step 2: Logout after successful registration
  27  |     await performLogout(page);
  28  |     console.log("✅ Logout is completed!");
  29  | 
  30  |     // Step 3: Login with the registered email
  31  | 
  32  |     await performLogin(page,regEmail) ;
  33  |     console.log("✅ Login is completed!");
  34  |     
  35  |       // Step 4: Search for a product and add it to the cart
  36  |     await addProductToCart(page);
  37  |     console.log("✅ Product added to cart!");
  38  | 
  39  |     // Step 5: Verify the contents of the shopping cart
  40  |     await verifyShoppingCart(page);
  41  |     console.log("✅ Shopping cart verification completed!");
  42  | 
  43  |     // Step 6: Perform checkout (skipped for demo site)
  44  |     // await performCheckout(page);
  45  | 
  46  | })
  47  | 
  48  | // Function to register a new user account
  49  | 
  50  | async function performRegistration(page:Page){
  51  | 
  52  |     const homePage=new HomePage(page);
  53  |     expect(homePage.isHomePageExist()).toBeTruthy();
  54  |     await homePage.clickMyAccount();
  55  |     await homePage.clickRegister();
  56  | 
  57  |     const registrationPage=new RegistrationPage(page);
  58  |     await registrationPage.enterFirstName(randamDataGenerator.getFirstname());
  59  |     await registrationPage.enterLastName(randamDataGenerator.getLastname() );
  60  |     let email:string=randamDataGenerator.getEmailID()
  61  |     await registrationPage.enterEMailID(email);
  62  |     await registrationPage.enterTelephoneNo(randamDataGenerator.getTelephoneNo());
  63  |     await registrationPage.enterPassword('test123');
  64  |     await registrationPage.enterConfirmPassword('test123');
  65  |     await registrationPage.checkPrivacyPolcy();
  66  |     await registrationPage.clickContinue();
  67  | 
  68  | 
  69  |     // Validate that the registration was successful
  70  |     expect(await registrationPage.getTextConfirmation()).toBeTruthy();
  71  |     
  72  |     return email;
  73  | 
  74  | }
  75  | 
  76  | // Function to log out the current user
  77  | 
  78  | async function performLogout(page:Page){
  79  | 
  80  |     const myAccountPage=new MyAccountPage(page);
  81  |     const logoutPage:LogoutPage=await myAccountPage.clickLogout();
  82  |     expect(await logoutPage.isLogoutheadingVisibile()).toBeTruthy();
  83  | 
  84  |     const homePage:HomePage=await logoutPage.clickContinueButton();
  85  | 
  86  | }
  87  | 
  88  | // Function to log in using the registered email
  89  | async function performLogin(page:Page,email:string){
  90  | 
  91  |     const testConfig=new TestConfig();
  92  |     await page.goto(testConfig.appUrl);
  93  | 
  94  |     const homePage=new HomePage(page);
  95  |     expect(await homePage.isHomePageExist()).toBeTruthy();
  96  | 
  97  |     await homePage.clickMyAccount();
  98  |     const loginPage:LoginPage=await homePage.clickLogin();
  99  | 
  100 |     await loginPage.enterEmailAddress(email);
  101 |     await loginPage.enterPassword('test123');
  102 |     loginPage.clickLogin();
  103 | 
  104 |     const myAccountPage=new MyAccountPage(page);
  105 |     expect(await myAccountPage.checkIsthisMyAccountPage()).toBeTruthy();
  106 | 
  107 | }
  108 | 
  109 | // Function to search for a product and add it to cart
  110 | 
  111 | async function addProductToCart(page:Page){
  112 | 
  113 |     const homePage=new HomePage(page);
  114 | 
  115 |     const testConfig=new TestConfig();
  116 |     const productName:string=testConfig.productName;
  117 |     const productQuantity:string=testConfig.productQuantity;
  118 | 
  119 |     await homePage.enterProduct(productName);
  120 |     const serachResultPage:SearchResultsPage=await homePage.clickSearch();
> 121 |     expect(await serachResultPage.isSearcHResultExist()).toBeTruthy();
      |                                                          ^ Error: expect(received).toBeTruthy()
  122 | 
  123 |     expect(serachResultPage.isSearchProductExist(productName)).toBeTruthy();
  124 | 
  125 |     const productPage=await serachResultPage.selectProduct(productName);
  126 |     await productPage?.enterQuantity(productQuantity);
  127 |     await productPage?.clcikAddToCart();
  128 | 
  129 |     await page.waitForTimeout(3000);
  130 |     expect( productPage?.isSuccessBannerVisible()).toBe(true);
  131 | 
  132 | }
  133 | 
  134 | // Function to verify the shopping cart details
  135 | 
  136 | async function verifyShoppingCart(page:Page){
  137 | 
  138 |     const productPage=new ProductPage(page);
  139 | 
  140 |     await productPage.clickItemsButton();
  141 |     const shoppingCartPage:ShoppingCartPage=await productPage.clcikViewCartIcon();
  142 |     expect(await shoppingCartPage.isCheckoutpageLoaded()).toBeTruthy();
  143 |     console.log("🛒 Navigated to shopping cart!");
  144 | 
  145 |     const testConfig=new TestConfig();
  146 | 
  147 |     expect(shoppingCartPage.getTotalPrice()).toBe(testConfig.totalPrice);
  148 | }
  149 | 
  150 | 
  151 | // Function to perform checkout (disabled for demo site)
  152 | async function performCheckout(page: Page) {
  153 |     // Checkout feature is not implemented since it's a demo site.
  154 |     // Place your checkout flow logic here if backend is available.
  155 | }
```