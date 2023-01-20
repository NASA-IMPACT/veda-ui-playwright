const { expect } = require('@playwright/test');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const SeDatasets = require('../../../../../../selectors/dataset/nighttimelights.json');
const SeMainDatasets = require('../../../../../../selectors/datasets.json');
const DataDatasets = require('../../../../../../data/datasets/nighttime-lights/nighttime-lights-data.json');
module.exports = {
async checkFirstParagraph (page){
    await expect(page.locator(SeDatasets.FirstParagraphHead)).toHaveText(DataDatasets.FirstParagraphHead);
},
async checkExploreBtn (page){
    await page.locator(SeDatasets.ExploreDataBtn).click();
    const selectedBtn = (SeMainDatasets.buttons.Exploration).toString();
    //Adds a new condition on the XPATH route to the element 
    const selectedBtn2 = selectedBtn.replace("'Overview'","'Overview' and contains(@class,'active')");
    await expect(page.locator(selectedBtn2)).toBeVisible;
    await page.locator(SeMainDatasets.buttons.Overview).dblclick();
    await delay(1000);
},
async checkFirstBodyParagraph(page){
    await expect(page.locator(SeDatasets.FirstBodyParagraph)).toHaveText(DataDatasets.FirstBodyParagraph)
},

async checkSecondBodyParagraph(page){
    await expect(page.locator(SeDatasets.SecondBodyParagraph)).toHaveText(DataDatasets.SecondBodyParagraph)
},

async checkFirstPageSection(page){
    await page.locator(SeDatasets.FirstSubtitle).click();
    await page.evaluate(() => window.scrollBy(0,150));
    await expect(page.locator(SeDatasets.FirstSubtitle)).toHaveText(DataDatasets.FirstSubtitle);
    await expect(page.locator(SeDatasets.ThirdBodyParagraph)).toHaveText(DataDatasets.ThirdBodyParagraph);
    await expect(page.locator(SeDatasets.FourthBodyParagraph)).toHaveText(DataDatasets.FourthBodyParagraph);
    await expect.soft(page).toHaveScreenshot('FirstPageSection.png');
},
async checkSecondPageSection(page){
    await page.locator(SeDatasets.SecondSubtitle).click();
    await page.evaluate(() => window.scrollBy(0,150));
    await expect(page.locator(SeDatasets.SecondSubtitle)).toHaveText(DataDatasets.SecondSubtitle);
    await expect(page.locator(SeDatasets.FifthBodyParagraph)).toHaveText(DataDatasets.FifthBodyParagraph);
    await expect(page.locator(SeDatasets.SixthBodyParagraph)).toHaveText(DataDatasets.SixthBodyParagraph);
    await expect.soft(page).toHaveScreenshot('SecondPageSection.png');
},
async checkCreditsSection(page){
    await expect(page.locator(SeDatasets.ThirdSubtitle)).toHaveText(DataDatasets.ThirdSubtitle);
    await expect(page.locator(SeDatasets.SeventhBodyParagraph)).toHaveText(DataDatasets.SeventhBodyParagraph);
},

async checkResourcesSection(page){
    await expect(page.locator(SeDatasets.FourthSubtitle)).toHaveText(DataDatasets.FourthSubtitle);

    await expect(page.locator(SeDatasets.FifthSubtitle)).toHaveText(DataDatasets.FifthSubtitle);
    await expect(page.locator(SeDatasets.FirstVignette)).toHaveText(DataDatasets.FirstVignette);

    await expect(page.locator(SeDatasets.SixthSubtitle)).toHaveText(DataDatasets.SixthSubtitle);
    await expect(page.locator(SeDatasets.SecondVignette)).toHaveText(DataDatasets.SecondVignette);

    await expect(page.locator(SeDatasets.SeventhSubtitle)).toHaveText(DataDatasets.SeventhSubtitle);
    await expect(page.locator(SeDatasets.ThirdVignette)).toHaveText(DataDatasets.ThirdVignette);
    await expect(page.locator(SeDatasets.FourthVignette)).toHaveText(DataDatasets.FourthVignette);

},
async checkBottomPage (page){
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect.soft(page).toHaveScreenshot('BottomPage.png');

}
};