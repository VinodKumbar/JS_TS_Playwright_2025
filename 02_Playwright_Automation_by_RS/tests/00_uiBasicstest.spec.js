const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');
// This is a basic Playwright test file that demonstrates how to use Playwright for UI testing.

test('Validate the Login page with Invalid Creds', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.screenshot({ path: 'Rahul_Shetty_webpage.png' });
    //get title and put assert
    const title = await page.title();
    console.log('Page title is: ' + title);
    await expect(title).toBe('LoginPage Practise | Rahul Shetty Academy');
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    
    //fill username and password
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('learning23'); 
    await page.locator('#signInBtn').click();
 
    //wait untill this locator is visible    
    const errorMessage = await page.locator("[style*='block']").textContent();
    console.log('Error message is: ' + errorMessage);

    //assert the error message
    await expect(errorMessage).toContain('Incorrect username/password.');    

});

test('Validate the Login page with Valid Creds', async ({page}) => {   

    //locators
    const username =  page.locator("#username");
    const password =  page.locator("[type=\'password\']");
    const signInBtn =  page.locator("#signInBtn");
    const cardTitles =  page.locator(".card-body a");



    //navigate to the login page
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.screenshot({ path: 'Rahul_Shetty_webpage.png' });
    //get title and put assert
    const title = await page.title();
    console.log('Page title is: ' + title);
    expect(title).toBe('LoginPage Practise | Rahul Shetty Academy');
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    
    //fill username and password
    //await username.fill(" ");
    
    await username.fill('rahulshettyacademy');
    await password.fill('learning'); 
    await signInBtn.click(); 

    //wait for the page to load
    await page.waitForLoadState('networkidle');

    console.log(await page.locator(".card-body a").nth(0).textContent());

    //await cardTitles.nth(0).click();
    //wait for the page to load 
    await page.waitForLoadState('networkidle');

    // get the text of all card titles
    const allCardTitles = await cardTitles.allTextContents()
    console.log('All card titles: ', allCardTitles);   

   // console.log(await cardTitles.first().textContent());
   // console.log(await cardTitles.last().textContent());
    
    
    //click on the first link in the card body
   // await page.locator(".card-body a").first().click();

    //wait for the page to load

  
});


test('Validate the UI controls', async ({browser}) => {   

    const context = await browser.newContext();
    const page = await context.newPage();

    //locators
    const username =  page.locator("#username");
    const password =  page.locator("[type=\'password\']");
    const signInBtn =  page.locator("#signInBtn");
    const documentLink = page.locator(".blinkingText[href*='documents-request']")
    const emailText = page.locator(".red");
    const dropdown =  page.locator("select.form-control");
    const radioBtn =  page.locator(".radiotextsty");
    const okBtn =  page.locator("#okayBtn");
    const checkbox =  page.locator("#terms");
    const cardTitles =  page.locator(".card-body a");



    //navigate to the login page
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    await username.fill('rahulshettyacademy');
    await password.fill('learning'); 
    await dropdown.selectOption('consult');
    await radioBtn.last().click();
    console.log('User button is checked: ' + await radioBtn.last().isChecked());
    await expect(radioBtn.last()).toBeChecked();
    await okBtn.click();
    await checkbox.click();
    console.log('Checkbox is checked: ' + await checkbox.isChecked());
    await expect(checkbox).toBeChecked();
    await checkbox.uncheck();
   expect(await checkbox.isChecked()).toBeFalsy();
    console.log('Checkbox is unchecked: ' + await checkbox.isChecked());
    await expect(documentLink).toHaveAttribute('class', 'blinkingText');
    await expect(documentLink).toHaveAttribute('href', 'https://rahulshettyacademy.com/documents-request');
    
    // Promise has 3 sates: pending, fulfilled, rejected   

    //children of the page i.e Chiild windows - Child Window Handling
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // Wait for the new page to open
        documentLink.click() // Click the link that opens the new page
    ]);

    await newPage.waitForLoadState('networkidle'); // Wait for the new page to load
    const text = await newPage.locator(".red").textContent()
    await console.log('Email text is: ' + text);

    const arrayText = text.split('@') // Split the text by '@'
    const domainName = arrayText[1].split(" ")[0]; // Split the second part by space and take the first element
    console.log('Domain Name extracted from email: ' + domainName);
    await page.locator("#username").fill(domainName); // Fill the username field with the extracted domain name
    await page.pause(); // Pause the test to inspect the page
    console.log(await page.locator("#username").textContent()); // Get the text content of the username field


 
    //await signInBtn.click(); 
     await page.pause(); // Pause the test to inspect the page
});



test('Page Playwright test', async ({page}) => {
    await page.goto('https://vinodkumbar.wordpress.com/');
    await page.screenshot({ path: 'Vinod_Kumbar_webpage.png' });
    //get title and put assert
    const title = await page.title();
    console.log('Page title is: ' + title);
    await expect(title).toBe('Vinod Kumbar');
    await expect(page).toHaveTitle('Vinod Kumbar');

});