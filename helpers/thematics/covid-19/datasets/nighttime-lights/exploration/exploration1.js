const SeExploration = require('../../../../../../selectors/exploration.json')
const { expect } = require('@playwright/test');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
   
    async clickPoint(page,x,y){
        await page.mouse.click(x,y);
        await delay(13000);
    }
}