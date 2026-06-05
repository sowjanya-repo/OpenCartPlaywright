import { Page,Locator } from "@playwright/test";
import{ProductPage} from '../pages/ProductPage.ts'

export class SearchResultsPage{

    private readonly page:Page;
    private readonly searchPageheader:Locator;
    private readonly searchProduct:Locator;

    constructor(page:Page){
        this.page=page;
        this.searchPageheader=page.locator('#content h1');
        this.searchProduct=page.locator('h4>a');

    }

    async isSearcHResultExist():Promise<boolean>{

       try {
        const headerText=await this.searchPageheader.textContent();
        return headerText?.includes('Search - ') ?? false;
       } catch (error) {
         return false;
       }

    }

    async getProductCount(): Promise<number>{

        return await this.searchProduct.count();
    }

    async isSearchProductExist(productName:string):Promise<Boolean>{

        try {
            let count=await this.searchProduct.count();
            for(let i=0;i<=count;count++){
                let product=this.searchProduct.nth(i);
                let title:string=(await product.textContent())??"";
                if(productName.includes(title)){
                    return true;
                }
            }
        } catch (error) {

            console.log(`Error checking product existence: ${error}`);
            
        }
        return false;
    }

    async selectProduct(productName:string):Promise<ProductPage|null>{

  try {
        const products= await this.searchProduct.all();
        for(let product of products){
  
          let title=await product.textContent();
          if(productName===title){
              await product.click();
              return new ProductPage(this.page); 
          }
          console.log(`Product does not exist,${productName}`)
        }
  } catch (error) {

      console.log(`Error in selecting product: ${error}`);
        //throw error;
  }
  return null;
    }

}
