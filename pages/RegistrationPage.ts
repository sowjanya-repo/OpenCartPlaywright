import { Page,Locator } from "@playwright/test";

export class RegistrationPage{

    private readonly page:Page;
    private readonly firstNameTextBox:Locator;
    private readonly lastNametextBox:Locator;
    private readonly emailTextBox:Locator;
    private readonly phoneTextBox:Locator;

    private readonly passwordTextBox:Locator;
    private readonly confirmPasswordTextBox:Locator;

    private readonly privacyPolicyCheckBox:Locator;
    private readonly continueButton:Locator;

    private readonly txtConfirmation:Locator;

    constructor(page:Page){

        this.page=page;
        this.firstNameTextBox=this.page.getByPlaceholder('First Name');
        this.lastNametextBox=this.page.getByPlaceholder('Last Name');
        this.emailTextBox=this.page.getByPlaceholder('E-Mail');
        this.phoneTextBox=this.page.getByPlaceholder('Telephone');
        
        this.passwordTextBox=this.page.locator("input[name='password']");
        this.confirmPasswordTextBox=this.page.locator("input[name='confirm']");

        this.privacyPolicyCheckBox=this.page.locator("input[name='agree']");
        this.continueButton=this.page.locator("input[value='Continue']");

        this.txtConfirmation=this.page.getByText('Your Account Has Been Created!');


    }

    async isRegisterPageExist():Promise<boolean>{

       let title:string=await this.page.title();
       if(title){
        return true;
       }

       return false
    }

    async enterFirstName(firstName:string)   {

        try {
            await this.firstNameTextBox.fill(firstName);
              
        } catch (error) {
            console.log(`Exception thrown while entering "First Name" in register page,${error}`);
                 
        }
    }
    async enterLastName(lastName:string)   {

        try {
            await this.lastNametextBox.fill(lastName);
              
        } catch (error) {
            console.log(`Exception thrown while entering "Last Name" in register page,${error}`);
                 
        }
    }

    async enterEMailID(emailID:string)   {

        try {
            await this.emailTextBox.fill(emailID);
              
        } catch (error) {
            console.log(`Exception thrown while entering "Email Id" in register page,${error}`);
                 
        }
    }

    async enterTelephoneNo(telephoneNo:string)   {

        try {
            await this.phoneTextBox.fill(telephoneNo);
              
        } catch (error) {
            console.log(`Exception thrown while entering "Telephone no" in register page,${error}`);
                 
        }
    }

    async enterPassword(password:string)   {

        try {
            await this.passwordTextBox.fill(password);
              
        } catch (error) {
            console.log(`Exception thrown while entering "Password" in register page,${error}`);
                 
        }
    }

     async enterConfirmPassword(confirmPassword:string)   {

        try {
            await this.confirmPasswordTextBox.fill(confirmPassword);
              
        } catch (error) {
            console.log(`Exception thrown while entering "Confirm Password" in register page,${error}`);
                 
        }
    }
     async checkPrivacyPolcy()   {

        try {
            await this.privacyPolicyCheckBox.check();
              
        } catch (error) {
            console.log(`Exception thrown while checking "Privacy Policy" in register page,${error}`);
                 
        }
    }

     async clickContinue()   {

        try {
            await this.continueButton.click();
             
        } catch (error) {
            console.log(`Exception thrown while clicking "Continue" in register page,${error}`);
                 
        }
    }

     async getTextConfirmation():Promise<boolean>{

        try {
            let message=await this.txtConfirmation.textContent();
            if(message?.includes("Your Account Has Been Created!")){
                  return true
            }
           
        } catch (error) {
            console.log(`Exception thrown while checking the message "Your Account Has Been Created!" in register page,${error}`);
                
        }
          
    return false
 }
}