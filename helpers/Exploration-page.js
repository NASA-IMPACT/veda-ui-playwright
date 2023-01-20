const SeExploration = require('../selectors/exploration.json')
const { expect } = require('@playwright/test');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
var storedLayerInfo;

module.exports = {

    async openFirstCalendar (page){
        const calendar = (SeExploration.dateControls.calendarBtn).replace("selectvar","1")
        await page.locator(calendar).click();
    },
    async openSecondCalendar (page){
        const calendar = (SeExploration.dateControls.calendarBtn).replace("selectvar","2")
        await page.locator(calendar).click();
    },
    async chooseYear(page,year){
        await page.locator(SeExploration.calendar_controls.inputSectionBtn).click();
        await page.locator(SeExploration.calendar_controls.yearInput).fill(year);
        await page.locator(SeExploration.calendar_controls.calendarSectionBtn).click();
        await expect(page.locator(SeExploration.calendar_controls.dateSelectedLabel)).toContainText(year);
    },
    async chooseMonth(page,month){
        const monthTrimmed = month.substring(0,3);
        const monthModified = SeExploration.calendar_controls.monthBtns;
        const monthModified2 = monthModified.replace('changevariable',month);
        await page.locator(monthModified2).click();
        await expect(page.locator(SeExploration.calendar_controls.dateSelectedLabel)).toContainText(monthTrimmed);
    },
    async saveMonth(page){
        const storedDate = await page.locator(SeExploration.calendar_controls.dateSelectedLabel).textContent();
        await page.locator(SeExploration.calendar_controls.saveBtn).click();
        await delay(15000);
    },
    async validateDateSelected (page){
        const selectedDate = await page.locator(SeExploration.dateControls.dateLabel).textContent();
        const dateLabelText = await page.locator(SeExploration.mapElements.mapDateLabel);
        await expect(dateLabelText).toHaveText(selectedDate);
    },
    async validateDatesComparisonsSelected (page){
        await delay(1000);
        const dateLabelText = await page.locator(SeExploration.mapElements.mapDateLabel);
        const selectedDate = await page.locator(SeExploration.dateControls.dateLabel).textContent();
        const selectedDateComparison = await page.locator((SeExploration.dateControls.dateLabel).replace("article[1]","article[2]")).textContent();
        await expect(dateLabelText).toHaveText(selectedDate+" VS "+selectedDateComparison);
    },
    async takeOrCompareScreenshot(page,screenshotname){
        await expect.soft(page).toHaveScreenshot(screenshotname, {maxDiffPixels: 1000});
    },
    async clickLayer(page,layername){
        switch(layername){
            case 'No2':
                await page.locator(SeExploration.dateControls.layerNames.no2).click();
                break;
            case 'No2 (Diff)':
                await page.locator(SeExploration.dateControls.layerNames.no2_Diff).click();
                break;
            default:
                throw 'Layer name not fount/Invalid layer name';
        };
        await delay(6000)
        await expect(page.locator(SeExploration.mapElements.layerSelectedName)).toHaveText(layername);
    },
    async clickLayerInfoAndStore(page,layername){
        const layerInfoBtn = (SeExploration.dateControls.layerInfoButton).replace("changevar",layername);
        await page.locator(layerInfoBtn).click();
        switch(layername){
            case 'No2':
                storedLayerInfo = await page.locator(SeExploration.dateControls.layerInfoContent.no2).textContent();
                break;
            case 'No2 (Diff)':
                storedLayerInfo = await page.locator(SeExploration.dateControls.layerInfoContent.no2_Diff).textContent();
                break;       
            default:
                throw 'Layer name not fount/Invalid layer name';
        };
    },
    async compareInfoLayers(page){
        var bool = await page.locator(SeExploration.mapElements.layerSelectedInfoContent).isVisible();
        if (bool == false){
            await page.locator().click(SeExploration.mapElements.layerSelectedInfoButton);
        }
        await expect(page.locator(SeExploration.mapElements.layerSelectedInfoContent)).toHaveText(storedLayerInfo);

    },
    async takeOrCompareScreenshot(page,screenshotname){
        await expect.soft(page).toHaveScreenshot(screenshotname, {maxDiffPixels: 2500});
    },
    async toggleDateComparisonBtn(page){
        await page.locator(SeExploration.dateControls.switchToggleComparison).click();
    },
    async swipeBtnToLeft (page){
        const btnProps = await page.locator(SeExploration.mapElements.swiperVerticalComparison).boundingBox();
        const mapProps = await page.locator(SeExploration.mapElements.mapCanvas).boundingBox();
        await page.locator(SeExploration.mapElements.swiperVerticalComparison).click();
        await page.mouse.move((btnProps.x + (btnProps.width / 2)),(btnProps.y + (btnProps.height / 2)));
        await page.mouse.down();
        await page.mouse.move((mapProps.x),(mapProps.y + (mapProps.height / 2)));
        await page.mouse.up();
        await delay(3000);
    },
    async swipeBtnToRight (page){
        const btnProps = await page.locator(SeExploration.mapElements.swiperVerticalComparison).boundingBox();
        const mapProps = await page.locator(SeExploration.mapElements.mapCanvas).boundingBox();
        await page.locator(SeExploration.mapElements.swiperVerticalComparison).click();
        await page.mouse.move((btnProps.x + (btnProps.width / 2)),(btnProps.y + (btnProps.height / 2)));
        await page.mouse.down();
        await page.mouse.move(((mapProps.x + mapProps.width)),((mapProps.y + (mapProps.height / 2))));
        await page.mouse.up();
        await delay(3000);
    },
    async swipeBtnToMiddle (page){
        const btnProps = await page.locator(SeExploration.mapElements.swiperVerticalComparison).boundingBox();
        const mapProps = await page.locator(SeExploration.mapElements.mapCanvas).boundingBox();
        await page.locator(SeExploration.mapElements.mapCanvas).click();
        await page.mouse.move(((btnProps.x + (btnProps.width / 2)) - 3),(btnProps.y + (btnProps.height / 2)));
        await page.mouse.down();
        await page.mouse.move((mapProps.x + (mapProps.width / 2) ), (mapProps.y + (mapProps.height / 2)));
        await page.mouse.up();
        await delay(3000);
    }

};