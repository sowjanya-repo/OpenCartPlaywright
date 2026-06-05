import { Page,Locator } from "@playwright/test";

export class LoginPage{

    private readonly page:Page;
    private readonly emailAddressText:Locator;
    private readonly passwordText:Locator;
    private readonly loginBtn:Locator;
    private readonly txtErrorMessage: Locator;

    constructor(page:Page){

        this.page=page;
        this.emailAddressText=this.page.getByPlaceholder('E-Mail Address');
        this.passwordText=this.page.getByPlaceholder('Password');
        this.loginBtn=this.page.getByRole('button',{name:'Login'});
        this.txtErrorMessage=page.locator('.alert.alert-danger.alert-dismissible');
    }

    async isLoginPageExist(){

       const pageTitle=await this.page.title();
       if(pageTitle){
        return true;
       }
       return false;
    }

    async enterEmailAddress(emailID:string){

       try {
         await this.emailAddressText.fill(emailID);
       } catch (error) {
        
        console.log(`Exception occured while entering on "email id",${error}`);
       }

    }

    async enterPassword(password:string){

       try {
        await this.passwordText.fill(password);
       } catch (error) {

        console.log(`Exception occured while entering on "Passsword",${error}`);
        
       }
    }

    async clickLogin(){

       try {
        await this.loginBtn.click();
       } catch (error) {
        console.log(`Exception occured while clicking on "Login button",${error}`);
       }
    }

    async getLoginErrorMessage(): Promise<string | null>{
        
       return (await this.txtErrorMessage.textContent())

    }
}