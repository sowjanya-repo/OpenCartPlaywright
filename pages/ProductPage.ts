import { Page,Locator } from "@playwright/test";
import { SearchResultsPage } from "./SearchResultsPage";
import { ShoppingCartPage } from "./ShoppingCartPage";

export class ProductPage{

    private readonly page:Page;

     private readonly textBoxQty:Locator;
     private readonly btnAddToCart:Locator;
     private readonly msgSuccess:Locator;
     private readonly btnItems:Locator;
     private readonly iconViewCart:Locator;

    constructor(page:Page){
        this.page=page;
        this.textBoxQty=page.locator("input[name='quantity']");
        this.btnAddToCart=page.locator("button:has-text('Add to Cart')");
        this.msgSuccess=page.getByText('Success: You have added ');
        this.btnItems=page.locator("span[id='cart-total']");
        this.iconViewCart=page.getByRole('link',{name:' View Cart'});
       
    }

    async enterQuantity(qty:string){
        try {
            await this.textBoxQty.clear();
            await this.textBoxQty.fill(qty);
        } catch (error) {
            console.log(`Execpetion thrown while entering quantity, ${error}`)
        }
    }

    async clcikAddToCart(){

       try {
        await this.btnAddToCart.click();
       } catch (error) {
        console.log(`Execpetion thrown while clcking add to cart, ${error}`)
       }
    }

    isSuccessBannerVisible(){

       try {
         if (this.msgSuccess!=null) {
 
             return true;
             
         } else {
             return false;
         }
       } catch (error) {

        console.log(`Confirmation message not found: ${error}`);
        return false;
        
       }
    }

    async clickItemsButton(){

        try {
           await this.btnItems.click();
            
        } catch (error) {
            console.log(`Exception while clciking add item button ,${error}`);
        }
    }

    async clcikViewCartIcon():Promise<ShoppingCartPage>{

        try {
            await this.iconViewCart.click();
            return new ShoppingCartPage(this.page)
        } catch (error) {
             console.log(`Error in selecting view caart icon: ${error}`);
             throw error;
        }

    }

    async addProductToCarrt(qty:string){

        await this.enterQuantity(qty);
        await this.clcikAddToCart();
        this.isSuccessBannerVisible();
    }

}