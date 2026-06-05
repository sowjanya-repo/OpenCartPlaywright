# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> End to End testing @end-to-end
- Location: tests\EndToEndTest.spec.ts:15:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "$1,204.00"
Received: null
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
      - generic [ref=e42]:
        - button " 2 item(s) - $1,204.00" [ref=e43] [cursor=pointer]:
          - generic [ref=e44]: 
          - text: 2 item(s) - $1,204.00
        - text:   
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
        - link "Shopping Cart" [ref=e71] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=checkout/cart
    - generic [ref=e73]:
      - heading "Shopping Cart (0.00kg)" [level=1] [ref=e74]
      - table [ref=e77]:
        - rowgroup [ref=e78]:
          - row "Image Product Name Model Quantity Unit Price Total" [ref=e79]:
            - cell "Image" [ref=e80]
            - cell "Product Name" [ref=e81]
            - cell "Model" [ref=e82]
            - cell "Quantity" [ref=e83]
            - cell "Unit Price" [ref=e84]
            - cell "Total" [ref=e85]
        - rowgroup [ref=e86]:
          - 'row "MacBook MacBook Reward Points: 1200 Product 16 2   $602.00 $1,204.00" [ref=e87]':
            - cell "MacBook" [ref=e88]:
              - link "MacBook" [ref=e89] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=43
                - img "MacBook" [ref=e90]
            - 'cell "MacBook Reward Points: 1200" [ref=e91]':
              - link "MacBook" [ref=e92] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=43
              - text: "Reward Points: 1200"
            - cell "Product 16" [ref=e93]
            - cell "2  " [ref=e94]:
              - generic [ref=e95]:
                - textbox [ref=e96]: "2"
                - generic [ref=e97]:
                  - button "" [ref=e98] [cursor=pointer]:
                    - generic [ref=e99]: 
                  - button "" [ref=e100] [cursor=pointer]:
                    - generic [ref=e101]: 
            - cell "$602.00" [ref=e102]
            - cell "$1,204.00" [ref=e103]
      - heading "What would you like to do next?" [level=2] [ref=e104]
      - paragraph [ref=e105]: Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.
      - generic [ref=e106]:
        - heading "Use Coupon Code " [level=4] [ref=e109]:
          - link "Use Coupon Code " [ref=e110] [cursor=pointer]:
            - /url: "#collapse-coupon"
            - text: Use Coupon Code
            - generic [ref=e111]: 
        - heading "Use Gift Certificate " [level=4] [ref=e114]:
          - link "Use Gift Certificate " [ref=e115] [cursor=pointer]:
            - /url: "#collapse-voucher"
            - text: Use Gift Certificate
            - generic [ref=e116]: 
      - table [ref=e119]:
        - rowgroup [ref=e120]:
          - 'row "Sub-Total: $1,000.00" [ref=e121]':
            - cell "Sub-Total:" [ref=e122]:
              - strong [ref=e123]: "Sub-Total:"
            - cell "$1,000.00" [ref=e124]
          - 'row "Eco Tax (-2.00): $4.00" [ref=e125]':
            - cell "Eco Tax (-2.00):" [ref=e126]:
              - strong [ref=e127]: "Eco Tax (-2.00):"
            - cell "$4.00" [ref=e128]
          - 'row "VAT (20%): $200.00" [ref=e129]':
            - cell "VAT (20%):" [ref=e130]:
              - strong [ref=e131]: "VAT (20%):"
            - cell "$200.00" [ref=e132]
          - 'row "Total: $1,204.00" [ref=e133]':
            - cell "Total:" [ref=e134]:
              - strong [ref=e135]: "Total:"
            - cell "$1,204.00" [ref=e136]
      - generic [ref=e137]:
        - link "Continue Shopping" [ref=e139] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=common/home
        - link "Checkout" [ref=e141] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout
  - contentinfo [ref=e142]:
    - generic [ref=e143]:
      - generic [ref=e144]:
        - generic [ref=e145]:
          - heading "Information" [level=5] [ref=e146]
          - list [ref=e147]:
            - listitem [ref=e148]:
              - link "About Us" [ref=e149] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=4
            - listitem [ref=e150]:
              - link "Delivery Information" [ref=e151] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=6
            - listitem [ref=e152]:
              - link "Privacy Policy" [ref=e153] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=3
            - listitem [ref=e154]:
              - link "Terms & Conditions" [ref=e155] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=5
        - generic [ref=e156]:
          - heading "Customer Service" [level=5] [ref=e157]
          - list [ref=e158]:
            - listitem [ref=e159]:
              - link "Contact Us" [ref=e160] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - listitem [ref=e161]:
              - link "Returns" [ref=e162] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/return/add
            - listitem [ref=e163]:
              - link "Site Map" [ref=e164] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap
        - generic [ref=e165]:
          - heading "Extras" [level=5] [ref=e166]
          - list [ref=e167]:
            - listitem [ref=e168]:
              - link "Brands" [ref=e169] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer
            - listitem [ref=e170]:
              - link "Gift Certificates" [ref=e171] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/voucher
            - listitem [ref=e172]:
              - link "Affiliate" [ref=e173] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=affiliate/login
            - listitem [ref=e174]:
              - link "Specials" [ref=e175] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special
        - generic [ref=e176]:
          - heading "My Account" [level=5] [ref=e177]
          - list [ref=e178]:
            - listitem [ref=e179]:
              - link "My Account" [ref=e180] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account
            - listitem [ref=e181]:
              - link "Order History" [ref=e182] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order
            - listitem [ref=e183]:
              - link "Wish List" [ref=e184] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - listitem [ref=e185]:
              - link "Newsletter" [ref=e186] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
      - separator [ref=e187]
      - paragraph [ref=e188]:
        - text: Powered By
        - link "OpenCart" [ref=e189] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  52  | // Function to register a new user account
  53  | 
  54  | async function performRegistration(page:Page){
  55  | 
  56  |     const homePage=new HomePage(page);
  57  |     expect(homePage.isHomePageExist()).toBeTruthy();
  58  |     await homePage.clickMyAccount();
  59  |     await homePage.clickRegister();
  60  | 
  61  |     const registrationPage=new RegistrationPage(page);
  62  |     await registrationPage.enterFirstName(randamDataGenerator.getFirstname());
  63  |     await registrationPage.enterLastName(randamDataGenerator.getLastname() );
  64  |     let email:string=randamDataGenerator.getEmailID()
  65  |     await registrationPage.enterEMailID(email);
  66  |     await registrationPage.enterTelephoneNo(randamDataGenerator.getTelephoneNo());
  67  |     await registrationPage.enterPassword('test123');
  68  |     await registrationPage.enterConfirmPassword('test123');
  69  |     await registrationPage.checkPrivacyPolcy();
  70  |     await registrationPage.clickContinue();
  71  | 
  72  | 
  73  |     // Validate that the registration was successful
  74  |     expect(await registrationPage.getTextConfirmation()).toBeTruthy();
  75  |     
  76  |     return email;
  77  | 
  78  | }
  79  | 
  80  | // Function to log out the current user
  81  | 
  82  | async function performLogout(page:Page){
  83  | 
  84  |     const myAccountPage=new MyAccountPage(page);
  85  |     const logoutPage:LogoutPage=await myAccountPage.clickLogout();
  86  |     expect(await logoutPage.isLogoutheadingVisibile()).toBeTruthy();
  87  | 
  88  |     const homePage:HomePage=await logoutPage.clickContinueButton();
  89  | 
  90  | }
  91  | 
  92  | // Function to log in using the registered email
  93  | async function performLogin(page:Page,email:string){
  94  | 
  95  |     const testConfig=new TestConfig();
  96  |     await page.goto(testConfig.appUrl);
  97  | 
  98  |     const homePage=new HomePage(page);
  99  |     expect(await homePage.isHomePageExist()).toBeTruthy();
  100 | 
  101 |     await homePage.clickMyAccount();
  102 |     const loginPage:LoginPage=await homePage.clickLogin();
  103 | 
  104 |     await loginPage.enterEmailAddress(email);
  105 |     await loginPage.enterPassword('test123');
  106 |     loginPage.clickLogin();
  107 | 
  108 |     const myAccountPage=new MyAccountPage(page);
  109 |     expect(await myAccountPage.checkIsthisMyAccountPage()).toBeTruthy();
  110 | 
  111 | }
  112 | 
  113 | // Function to search for a product and add it to cart
  114 | 
  115 | async function addProductToCart(page:Page){
  116 | 
  117 |     const homePage=new HomePage(page);
  118 | 
  119 |     const testConfig=new TestConfig();
  120 |     const productName:string=testConfig.productName;
  121 |     const productQuantity:string=testConfig.productQuantity;
  122 | 
  123 |     await homePage.enterProduct(productName);
  124 |     const serachResultPage:SearchResultsPage=await homePage.clickSearch();
  125 |     expect(await serachResultPage.isSearcHResultExist()).toBeTruthy();
  126 | 
  127 |     expect(serachResultPage.isSearchProductExist(productName)).toBeTruthy();
  128 | 
  129 |     const productPage=await serachResultPage.selectProduct(productName);
  130 |     await productPage?.enterQuantity(productQuantity);
  131 |     await productPage?.clcikAddToCart();
  132 | 
  133 |     await page.waitForTimeout(3000);
  134 |     expect( productPage?.isSuccessBannerVisible()).toBe(true);
  135 | 
  136 | }
  137 | 
  138 | // Function to verify the shopping cart details
  139 | 
  140 | async function verifyShoppingCart(page:Page){
  141 | 
  142 |     const productPage=new ProductPage(page);
  143 | 
  144 |     await productPage.clickItemsButton();
  145 |     const shoppingCartPage:ShoppingCartPage=await productPage.clcikViewCartIcon();
  146 |     await page.waitForTimeout(3000);
  147 |     expect(await shoppingCartPage.isshoppingCartPageLoaded()).toBeTruthy();
  148 |     console.log("🛒 Navigated to shopping cart!");
  149 | 
  150 |     const testConfig=new TestConfig();
  151 | 
> 152 |     expect(await shoppingCartPage.getTotalPrice()).toBe(testConfig.totalPrice);
      |                                                    ^ Error: expect(received).toBe(expected) // Object.is equality
  153 | 
  154 | }
  155 | 
  156 | 
  157 | // Function to perform checkout (disabled for demo site)
  158 | async function performCheckout(page: Page) {
  159 |     // Checkout feature is not implemented since it's a demo site.
  160 |     // Place your checkout flow logic here if backend is available.
  161 | }
```