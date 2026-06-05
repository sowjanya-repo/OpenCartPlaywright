import { Page,Locator } from "@playwright/test";
import { LogoutPage } from "./LogoutPage";
export class MyAccountPage{

    private readonly page:Page;
    private readonly menuMyAccount:Locator;
    private readonly btnLogout:Locator;

    constructor(page:Page){

        this.page=page;
        this.menuMyAccount=this.page.getByTitle('My Account');
        this.btnLogout=this.page.locator('div.list-group a:has-text("Logout")');
 
    }

    async checkIsthisMyAccountPage(): Promise<boolean>{

       try {
        const isVisible= await this.menuMyAccount.isVisible();
        return isVisible;

       } catch (error) {
         console.log(`Error checking My Account page heading visibility: ${error}`);
            return false;
       }
    }

    async clickLogout():Promise<LogoutPage>{

      try {
         await this.btnLogout.click();
         return new LogoutPage(this.page);
      } catch (error) {
        console.log(`Unable to click Logout link: ${error}`);
            throw error;
      }
    }

    

}