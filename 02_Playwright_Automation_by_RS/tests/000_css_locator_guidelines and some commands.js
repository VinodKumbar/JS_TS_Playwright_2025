/**

1. If ID is present
css -> tagname#id or #id
ex : input#username or #username

2. If class attribute present
css -> tagname.class or .class
ex : input.form-control or .form-control

3. How to write css based on any attribute ?
css -> [attribute = 'value']
ex : [name = 'username']

4. How to write css with traversing from Parent to child
css -> parentTagName >> childTagName

5. If needs to write the locator based on text
text = ''

Debug the test using Playwright Inspector
npx playwright test tests/00_uiBasicstest.spec.js --debug


Record and Playback 
npx playwright codegen https://google.com

Trace View Report
npx playwright show-report C:\\Users\\VinodKumbar\\Playwright_Test_Automation\\Playwright_Automation_by_RS\\playwright-report


Website Link
trace.playwright.dev

UI Interface command
npx playwright test --ui

**/