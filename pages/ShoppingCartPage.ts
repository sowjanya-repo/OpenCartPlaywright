import { Page,Locator } from "@playwright/test";
import { CheckOutPage } from "./CheckOutPage";

export class ShoppingCartPage{

    private readonly page:Page;

    private readonly lblTotal:Locator;
    private readonly btnContinue:Locator;
    private readonly headingShopingCart:Locator;

    constructor(page:Page){

        this.page=page;
        this.headingShopingCart=page.getByRole('heading',{name:'Shopping Cart'});
        this.lblTotal= page.locator("div[class='col-sm-4 col-sm-offset-8'] table[class='table table-bordered'] tbody tr:nth-child(4) td:nth-child(2)");
        this.btnContinue=page.locator("a[class='btn btn-primary']");
    }

    async isshoppingCartPageLoaded(){
       try {
        return await this.headingShopingCart.isVisible();
       } catch (error) {
        console.log(`Exception while loading checkout page, ${error}`)
        return false;
       }
    }

    async getTotalPrice():Promise<string|null>{

        try {
           return await this.lblTotal.textContent();
        } catch (error) {
            console.log(`Unable to retrieve total price: ${error}`);
            return null;
        }

    }


    async clickCOntinue():Promise<CheckOutPage|null>{
       try {
        await this.btnContinue.click();
        return new CheckOutPage(this.page);
       } catch (error) {
        console.log(`Exception while clicking checkout button ,${error}`);
       }
       return null;
    }


}