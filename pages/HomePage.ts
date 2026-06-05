import { tr } from "@faker-js/faker";
import { Page,Locator } from "@playwright/test";
import { SearchResultsPage } from "./SearchResultsPage";
import { LoginPage } from "./LoginPage";


export class HomePage{
    private readonly page:Page
    private readonly myAccountMenu:Locator;
    private readonly registerLink:Locator;
    private readonly loginLink:Locator;
    private readonly searchIcon:Locator;
    private readonly searchTextBox:Locator;

    constructor(page:Page){

      this.page=page;
      this.myAccountMenu= page.locator("a[title='My Account']");
      this.registerLink=page.locator("a:has-text('Register')");
      this.loginLink= page.locator("ul.dropdown-menu a:has-text('Login')");
      this.searchIcon= page.locator("div[id='search'] button");
      this.searchTextBox=page.locator("input[name='search']");

    }

    async isHomePageExist():Promise<Boolean>     {

       let title:string=await this.page.title();
       if(title){
          return true;
       }
       return false;  

    }
    async clickMyAccount()      {

       try {
        await this.myAccountMenu.click();
          
       } catch (error) {
        
        console.log(`Exception occured while clicking on "My account',${error}`);
          
       }

    }

    async clickRegister()     {
         try {
        await this.registerLink.click();
          
       } catch (error) {
        
        console.log(`Exception occured while clicking on "Register",${error}`);
          
       }

    }

    async clickLogin()  :Promise<LoginPage>   {
try {
    
           await this.loginLink.click();
           return new LoginPage(this.page);
             
} catch (error) {
    console.log(`Exception occured while clicking on "Login",${error}`);
          throw error;
    
}
    }

    async enterProduct(productName:string)     {

        try {
           await this.searchTextBox.fill(productName);
              
        } catch (error) {
            console.log(`Exception occured while entering on "Search text box",${error}`);
              
        }
    }

    async clickSearch() :Promise<SearchResultsPage>    {

        try {
            await this.searchIcon.click();
            return new SearchResultsPage(this.page);
              
        } catch (error) {
            console.log(`Exception occured while clicking on "Search icon",${error}`);
              throw error;
        }
    }


}