const { expect } = require('@playwright/test');
const SeDatasets = require('../selectors/datasets.json');
module.exports = {

    async clickCard (page,card){
        const card1 = (SeDatasets.universalCard).toString();
        const card2 = card1.replace('varreplace',card)
        await page.locator(card2).click();
        await expect(page.locator(SeDatasets.universalHeader)).toHaveText(card+" Overview");
    },
    async clickExploration(page){
        await page.locator(SeDatasets.buttons.Exploration).click();
    },

}