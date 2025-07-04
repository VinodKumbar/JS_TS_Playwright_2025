const {test, expect} = require("@playwright/test");
const {POManager} = require('../page_Objects_model/POManager');
const {customtest} = require('../utils.js/test_base');

//JSON --> String --> JSObject
const dataset = JSON.parse(JSON.stringify(require('../utils.js/login_testData.json')));

for (const data of dataset){


test(`Client App login for ${data.productName}`, async ({page})=> {

   
    const poManager = new POManager(page)

    const loginPage = poManager.getLoginPage()
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);


    const dashboardpage = poManager.getdashboardpage();
    await dashboardpage.search_add_product_to_cart(data.productName);
    await dashboardpage.navigateToCart();    
  
   // await page.pause();
    await page.locator("div li").first().waitFor(); // wait for the cart items to be visible
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible(); // verify product is visible in the cart
   expect(bool).toBeTruthy(); // assert that the product is visible in the cart
   await page.locator("text=Checkout").click();

  await page.locator("[placeholder*='Country']").pressSequentially("ind");
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   expect(page.locator(".user__name [type='text']").first()).toHaveText(dataset.username);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
     
  });

}
