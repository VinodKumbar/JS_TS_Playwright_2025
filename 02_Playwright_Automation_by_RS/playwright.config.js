// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 30 * 1000, // Set the timeout for each test to 30 seconds
  expect: {
    timeout: 5000, // Set the timeout for expect assertions to 5 seconds
  },
  reporter : 'html', // Use HTML reporter for test results

  use: {

    browserName: 'chromium', // Use Chromium browser by default
    headless: false, // Run tests in headful mode (visible browser)
    viewport: { width: 1280, height: 720 }, // Set the viewport size
    trace: 'retain-on-failure', // Collect trace when retrying the failed test // types of trace : 'on' , 'off', 'retain-on-failure'
    screenshot: 'on', // Take screenshots only on test failure // types of screenshot : 'on' , 'off', 'retain-on-failure'
    video: 'retain-on-failure', // Record video only on test failure


    //browername : 'firefox', // Use Firefox browser by default
    // headless: true, // Uncomment to run tests in headless mode (invisible browser)
    // viewport: { width: 1280, height: 720 }, // Set the viewport size for Firefox

    //browserName: 'webkit', // Use WebKit browser by default
    // headless: true, // Uncomment to run tests in headless mode (invisible browser)
    // viewport: { width: 1280, height: 720 }, // Set the viewport size for WebKit
    
  

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

  },


});

module.exports = config

