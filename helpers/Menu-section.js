const SeMenu = require('../selectors/menu.json');

module.exports = {
    async openMenu (page) {
        //Opens the lateral menu
       await page.locator(SeMenu.menuBtn).click();
    },
    async goToAnalysis (page){
        //Clicks the Analysis item on the menu
        await page.locator(SeMenu.sections.analysis).click();
    },
    async goToDatasets (page){
        //Clicks the Datasets item on the menu
        await page.locator(SeMenu.sections.datasets).click();
    }
}