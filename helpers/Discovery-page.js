const data = require('../config/data.json');
const parameters = require('../config/parameters.json');
const { expect } = require('@playwright/test');
const SeDiscovery = require('../selectors/discovery.json');
const SeWelcome = require('../selectors/welcome.json');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
    async goToHomePage (page) {
        await page.goto(parameters.VedaUIStaging);
        await expect.soft(page.locator(SeWelcome.welcomeHeader)).toHaveText(data.expects.WelcomeHeader);
      },
    async clickCard (page,card){
        const card1 = (SeDiscovery.thematicAreas.universalCard).toString();
        const card2 = card1.replace('varreplace',card)
        await page.locator(card2).click();
        await expect(page.locator(SeDiscovery.thematicAreas.universalHeader)).toHaveText("Welcome to the "+card+" thematic area");
    }
};