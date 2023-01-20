const { expect } = require('@playwright/test');
const SeWelcome = require('../selectors/welcome.json');
const data = require('../config/parameters.json');

module.exports = {

  async  goToHomePage (page) {

    await page.goto(data.VedaUIStaging);
    await expect.soft(page.locator(SeWelcome.welcomeHeader)).toHaveText("Welcome to Dashboard Delta");
  }

}