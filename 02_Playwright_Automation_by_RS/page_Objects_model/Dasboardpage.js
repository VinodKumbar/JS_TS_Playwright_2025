class Dashboardpage {
    constructor(page){
        
         this.page = page;
         this.products = page.locator(".card-body"); 
         this.productsText = page.locator(".card-body b");        
         this.cart = page.locator("[routerlink*='cart']")
    }

    async search_add_product_to_cart(productName){
       
            await this.products.waitFor(); // wait for the card titles to be visible
            const allTitles = await this.productsText.allTextContents(); // all elements
            console.log(allTitles);
            const count = await this.products.count();
           for (let i = 0; i < count; ++i) {
              if (await this.products.nth(i).locator("b").textContent() === productName) {
                 //add to cart
                 await this.products.nth(i).locator("text= Add To Cart").click();
                 break;
              }
           }
         
    }

    async navigateToCart(){
         await this.cart.click();
    }

}

module.exports = {Dashboardpage}