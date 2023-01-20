const { expect } = require('@playwright/test');
const SeAnalysis = require('../../../../selectors/analysis.json');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
    async validateTitle (page){
        await expect(page.locator(SeAnalysis.universalHeader)).toHaveText('Start analysis');
    },
    async scrollToMap (page){
        //Scrolls navigation t
        await page.evaluate(() => window.scrollTo(0, 200));
    },
    async zoomMap (page){
        //Get properties of the map/canvas element
        const elem = await page.locator(SeAnalysis.mapCanvas).boundingBox();
        /*Top-left corner of map: X=32 Y=156*/
        //Click on zoom button two times
        await page.mouse.click(elem.x+48,elem.y+47);
        await page.mouse.click(elem.x+48,elem.y+47);
    },
    async swipeToRight (page){
        //Get properties of the map/canvas element
        const elem = await page.locator(SeAnalysis.mapCanvas).boundingBox();
        //Swipe from the center of map to the right
        await page.mouse.move(parseInt(elem.x+494), parseInt(elem.y+100));
        await page.mouse.down();
        await page.mouse.move(parseInt(elem.x+968), parseInt(elem.y+100));
        await page.mouse.up();
    },
    async swipeDown(page){
        //Get properties of the map/canvas element
        const elem = await page.locator(SeAnalysis.mapCanvas).boundingBox();
        //Swipe from the (almost) bottom of the map element to the top of said element
        await page.mouse.move(parseInt(elem.x+494), parseInt(elem.y+344));
        await page.mouse.down();
        await page.mouse.move(parseInt(elem.x+494), parseInt(elem.y));
        await page.mouse.up();
    },
    async surroundUruguay(page){
        //Get properties of the map/canvas element
        const elem = await page.locator(SeAnalysis.mapCanvas).boundingBox();
        
        //Surrounds said country with a form of a square
        await page.mouse.click(elem.x+285,elem.y+205);

        await page.mouse.click(elem.x+350,elem.y+205);

        await page.mouse.click(elem.x+350,elem.y+273);

        await page.mouse.click(elem.x+285,elem.y+273);

        await page.mouse.click(elem.x+285,elem.y+205);

        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('markedCountry.png');
    }




}