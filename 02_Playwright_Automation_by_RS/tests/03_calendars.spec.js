const {test, expect} = require('@playwright/test');
test.describe('Calendar Tests', () => {
  test('Calendar Validations', async ({page}) => {
    const monthNumber = 6; // June
    const date = 15; // 15th of June
    const year = 2027; // Year 2027

    const expectedList = ['monthNumber', 'date', 'year']; // Expected date format

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');


    //open the calendar by clicking on the date picker icon
    await page.locator(".react-date-picker__inputGroup").click();

    //select year - need click on the year label to open the year selection
    // Use the locator to find the year label and click on it
     await page.locator(".react-calendar__navigation__label").click();
     await page.locator(".react-calendar__navigation__label").click();
     await page.getByText(year).click();

     //select the month
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();

    //select the date
    // Use the XPath locator to find the date element
    await page.locator("//abbr[text()='"+date+"']").click();

    // Verify the selected date
    const selectedDate = await page.locator(".react-date-picker__inputGroup__input");

    for(let index = 0; index < selectedDate.length; index++) {
      selectedDate[index].getAttribute('value');
      expect(value).toEqual(expectedList[index]);
    }

    // Verify the selected date
  });

});
