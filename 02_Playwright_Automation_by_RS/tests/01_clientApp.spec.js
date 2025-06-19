const {test, expect} = require("@playwright/test");

test('Page Playwright Test', async ({page})=> {
    const userName = page.locator("#userEmail");
    const passWord = page.locator("#userPassword");
    const signInBtn = page.locator("#login");
    const cardTitles = page.locator(".card-body b");
    await page.goto("https://rahulshettyacademy.com/client");
    await userName.fill("anshika@gmail.com");
    await passWord.fill("Iamking@000");
    await signInBtn.click();
    await page.waitForLoadState("networkidle"); // it work only on Service Oriented Application
    await cardTitles.first().waitFor(); // wait for the card titles to be visible
    const allTitles = await cardTitles.allTextContents(); // all elements
    console.log(allTitles);
  });