const { test } = require('@playwright/test');
const welcome = require('../helpers/Welcome-page.js');




test.describe('test 1', async () => {

   test('test 1', async ({ page }) => {
    
       await welcome.goToHomePage(page)
   });

});  