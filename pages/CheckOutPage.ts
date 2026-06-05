import { Page,Locator,expect } from "@playwright/test";

export class CheckOutPage{

    private readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

      // Check if checkout page exists
        async isCheckoutPageExists() {
            try {
                await expect(this.page).toHaveTitle("Checkout");
                return true;
            } catch (error) {
                return false;
            }
        }
    
}