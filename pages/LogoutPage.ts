import { Page,Locator } from "@playwright/test"
import { HomePage } from "./HomePage";

export class LogoutPage{

    private readonly page:Page;
    private readonly lblLogout:Locator;
    private readonly btnContinue:Locator;

    constructor(page:Page){

        this.page=page;
       this.lblLogout= page.getByRole('heading',{name:'Account Logout'});
       this.btnContinue=page.getByText('Continue');
    }

    async isLogoutheadingVisibile(){

        try {
            return await this.lblLogout.isVisible();
        } catch (error) {
            console.log(`Exception while checking heading of lagout page,${error}`);
            throw error;
        }
    }

    async clickContinueButton():Promise<HomePage>{

        try {
            await this.btnContinue.click();
            return new HomePage(this.page);
        } catch (error) {
            console.log(`Exception while clicking continue button,${error}`);
            throw error
        }
    }
}