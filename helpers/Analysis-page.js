const { expect } = require('@playwright/test');
const SeAnalysis = require('../selectors/analysis.json');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports =  {
    async checkLoadingGraphicsQuantity(page){
        const quantity = await page.locator(SeAnalysis.resultsView.graphicsElements.loadingGraphics).count();
        return quantity;
    },
    async selectDate (page,startDate,endDate){
        await page.locator(SeAnalysis.startDateInput).type(startDate);
        await page.locator(SeAnalysis.endDateInput).type(endDate);
    },
    async clickGenerateBtn(page){
        await page.locator(SeAnalysis.generateBtn).click();
        await delay(1000);
        await expect(page.locator(SeAnalysis.resultsView.resultsLabel)).toHaveText('Results');
        //await expect(page).toHaveScreenshot('ResultsViewMap.png');
    },
    async clickDatasets(page,expectedDataset){
        switch (expectedDataset){
            case 'No2':
                await page.locator(SeAnalysis.datasets.No2).click();
                break;
            case 'No2 (Diff)':
                await page.locator(SeAnalysis.datasets.No2_Diff).click();
                break;
            default:
                throw 'Dataset not found/Invalid dataset';
        }
    },
    async openViewMenu (page){
        await page.locator(SeAnalysis.resultsView.viewMenuBtn).click();
        await expect(page.locator(SeAnalysis.resultsView.viewMenuBody)).toBeVisible({ timeout: 2000 });

    },

    async closeViewMenu (page){
        await page.locator(SeAnalysis.resultsView.viewMenuBtn).click();
        await delay(2000)
        var bool = await page.locator(SeAnalysis.resultsView.viewMenuBody).isVisible();
        if (bool == true){
            throw '"View" menu is visible';
        }
        

    },

    async toggleGraphicLines(page,option){
        await expect(page.locator(SeAnalysis.resultsView.viewMenuBody)).toBeVisible({ timeout: 2000 });
            for(const optionVar of option){
                switch (optionVar){
                    case 'Min':
                        await page.locator(SeAnalysis.resultsView.viewMenu.min).click();
                        break;
                    case 'Average':
                        await page.locator(SeAnalysis.resultsView.viewMenu.average).click();
                        break;
                    case 'Max':
                        await page.locator(SeAnalysis.resultsView.viewMenu.max).click();
                        break;
                    case 'St Deviation':
                        await page.locator(SeAnalysis.resultsView.viewMenu.deviation).click();
                        break;
                    default:
                        throw 'Invalid option';                                
             }
        }

    },
    async scrollToGraphics(page){
        await page.evaluate(() => window.scrollTo(0, 200));
        //await expect(page).toHaveScreenshot('ResultsViewGraphicsDefault.png');

    },
    async takeOrCompareScreenshot(page,screenshotname){
        await expect.soft(page).toHaveScreenshot(screenshotname, {maxDiffPixels: 1000});
    },
    async showGraphicsLineData(page){
        const loadingElementsQuantity = await this.checkLoadingGraphicsQuantity(page);
        
        do{
            await delay(500);

        }while(await page.locator("//li["+loadingElementsQuantity+"]"+SeAnalysis.resultsView.graphicsElements.loadingGraphics).isVisible() == true);
        
        const graphContProps = await page.locator(SeAnalysis.resultsView.graphicsElements.firstGraphicContent).boundingBox();
        await page.mouse.click((graphContProps.x + 100), (graphContProps.y + 20));
        await delay(3000);
    },
    async modifyGraphicsSlider(page){
        const graphSliderProps = await page.locator(SeAnalysis.resultsView.graphicsElements.firstDragBar).boundingBox();
        await page.mouse.move((graphSliderProps.x + graphSliderProps.width),graphSliderProps.y + 10);
        await page.mouse.down();
        await page.mouse.move((graphSliderProps.x + (graphSliderProps.width / 2)),graphSliderProps.y + 10);
        await page.mouse.up();
    },
    async moveGraphicsSlider(page){
        const graphSliderProps2 = await page.locator(SeAnalysis.resultsView.graphicsElements.firstDragBar).boundingBox();
        await page.mouse.click(graphSliderProps2.x + 10, graphSliderProps2.y + 10)
        await page.mouse.move((graphSliderProps2.x + (graphSliderProps2.width / 4)), graphSliderProps2.y + 10);
        await page.mouse.down();
        await page.mouse.move((graphSliderProps2.x + (graphSliderProps2.width * 2)), graphSliderProps2.y + 10);
        await page.mouse.up();

    }

        


};