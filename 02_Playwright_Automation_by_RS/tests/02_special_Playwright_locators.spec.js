import {test, expect} from '@playwright/test';

test.describe('Special Playwright Locators', () => {
  test('should find elements using special locators', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/angularpractice/');

     await page.getByLabel('Check me out if you Love IceCreams!').check();
     await page.getByLabel("Employed").check();
     await page.getByLabel("Gender").selectOption("Female");

     //await page.getByPlaceholder('Name').fill('John Doe');
     //await page.getByPlaceholder('Email').fill('    ');
     await page.getByPlaceholder('Password').fill('password123');   
    
     // Using the 'getByRole' locator to find a button by its role and name
     await page.getByRole("button", {name: "Submit"}).click();
   
     // Using the 'getByText' locator to find an element by its text content
     await page.getByText('Success! The Form has been submitted successfully!').isVisible();
     
        // Using the 'getByRole' locator to find a link by its role and name
     await page.getByRole('link', { name: 'Shop' }).click();

    //chaining locators to find a specific product and click on it
     await page.locator("app-card").filter({ hasText: 'Samsung Note 8' }).getByRole('button',{name : 'Add'}).click();
 


  });
});