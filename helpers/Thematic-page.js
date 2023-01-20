const { expect } = require('@playwright/test');
const SeThematics = require('../selectors/thematics.json');
const parameters = require('../config/parameters.json');
const data = require('../config/data.json');

module.exports = {

  async  goToHomePage (page) {

    await page.goto(parameters.VedaUIStaging);
    await expect.soft(page.locator(SeThematics.universalHeader)).toHaveText(data.expects.WelcomeHeader);
  },
  async clickThematic (page, thematic){
    const thematicLocator = SeThematics.thematicCards.replace("replString",thematic);
    await page.locator((thematicLocator)).click();
    await expect.soft(page.locator(SeThematics.universalHeader)).toHaveText("Welcome to the "+thematic+" thematic area");
  },

  async storeDiscovery (page){
    //Gets the text of the element desired
    const getDiscovery = await page.locator(SeThematics.discoveryNumber).textContent();
    //The variable getDiscovery is converted into an integer and it's returned
    const realInt = await parseInt(getDiscovery);
    return realInt
  },
  async storeDatasets (page){
    //Gets the text of the element desired
    const getDatasets = await page.locator(SeThematics.datasetsNumber).textContent();
    //The variable getDiscovery is converted into an integer and it's returned   
    const realInt = await parseInt(getDatasets);
    return realInt
  },
  async compareDiscovery (page){
    //Calls the function storeDiscovery and stores the returned value
    const discoveryValue = await this.storeDiscovery(page);
    await page.locator((SeThematics.discoveryNumber)).click();
    await expect(page.locator(SeThematics.universalHeader)).toHaveText("Discoveries");
    //Counts the quantity of elements which matches the selector
    const cardQuantity = await page.locator(SeThematics.cardElemQuantity).count();
    //Compares both numbers
    await expect(cardQuantity).toEqual(discoveryValue);
    //Check if every element counted exists
    if(cardQuantity != 0){
        for(var i = 1; i <= cardQuantity; i++){
            await expect(page.locator(SeThematics.checkCards+"["+i+"]//header[contains(@class,'card__CardHeader')]")).toHaveCount(1);
            await expect(page.locator(SeThematics.checkCards+"["+i+"]//div[contains(@class,'card__CardBody')]")).toHaveCount(1);
        }
    }
  },
  async compareDataset (page){
    //Calls the function storeDatasets and stores the returned value
    const datasetValue = await this.storeDatasets(page);
    await page.locator((SeThematics.datasetsNumber)).click();
    await expect(page.locator(SeThematics.universalHeader)).toHaveText("Datasets");
    //Counts the quantity of elements which matches the selector
    const cardQuantity = await page.locator(SeThematics.cardElemQuantity).count();
    //Compares both numbers
    await expect(cardQuantity).toEqual(datasetValue);
    //Check if every element counted exists
    if(cardQuantity != 0){
        for(var i = 1; i <= cardQuantity; i++){
            await expect(page.locator(SeThematics.checkCards+"["+i+"]//header[contains(@class,'card__CardHeader')]")).toHaveCount(1);
            await expect(page.locator(SeThematics.checkCards+"["+i+"]//div[contains(@class,'card__CardBody')]")).toHaveCount(1);
        }
    }
    
  }

}