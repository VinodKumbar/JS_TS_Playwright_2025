const {test, expect} = require("@playwright/test");

test('Page Playwright Test', async ({page})=> {

    const email = "anshika@gmail.com"
    const userName = page.locator("#userEmail");
    const passWord = page.locator("#userPassword");
    const signInBtn = page.locator("#login");
    const cardTitles = page.locator(".card-body b");
    const products = page.locator(".card-body");
    const productName = "ZARA COAT 3";

    await page.goto("https://rahulshettyacademy.com/client");
    await userName.fill(email);
    await passWord.fill("Iamking@000");
    await signInBtn.click();
   // await page.waitForLoadState("networkidle"); // it work only on Service Oriented Application
    await cardTitles.first().waitFor(); // wait for the card titles to be visible
    const allTitles = await cardTitles.allTextContents(); // all elements
    console.log(allTitles);

    // select the Zara jacket
     const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
 
   await page.locator("[routerlink*='cart']").click();
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
 
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
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



