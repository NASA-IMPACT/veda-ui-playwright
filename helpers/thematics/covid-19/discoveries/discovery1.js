const { expect } = require('@playwright/test');
const SeDiscovery = require('../../../../selectors/discovery.json');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
module.exports = {
    //On this script, clicking webpage elements that are non clickable causes a scrolling on the browser, helping to do visual testing
    async gotoAirQualityDiscovery (page){
        const elementProperties = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidCard);
        const box = await elementProperties.boundingBox();
        const elementLocation = await (box.y + box.height / 2);
        //Scrolls webpage to the elementLocation's position
        await page.evaluate((elementLocation) =>  window.scrollTo(0, parseInt(elementLocation)), elementLocation);
        await page.locator((SeDiscovery.thematicAreas.CovidView.AirQualityCovidCard)).click();
    },
    async checkTopPageSection (page){
        await delay (16000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('TopPageSection.png');
    },
    async checkGoingThroughChangesSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.GoingThroughChangesSubtitle);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('GoingThroughChangesSubtitle.png');
    },
    async checkGTCFirstPharagraphSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.GTCFirstPharagraph);
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other        
        await expect.soft(page).toHaveScreenshot('GTCFirstPharagraph.png');
    },
    async checkGTCSecondPharagraphSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.GTCSecondPharagraph);
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('GTCSecondPharagraph.png');
    },
    async checkGTCThirdPharagraphSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.GTCThirdPharagraph);
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('GTCThirdPharagraph.png');
    },
    async checkGTCFourthPharagraphSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.GTCFourthPharagraph);
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('GTCFourthPharagraph.png');
    },
    async checkWhatMakesAirSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.WhatMakesAirSubtitle);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('WhatMakesAirSubtitle.png');
    },
    async checkWMAFirstPharagraphSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.WMAFirstPharagraph);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('WMAFirstPharagraph.png');
    },
    async checkWMASecondPharagraphSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.WMASecondPharagraph);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('WMASecondPharagraph.png');
    },
    async checkWMAThirdPharagraphSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.WMAThirdPharagraph);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('WMAThirdPharagraph.png');
    },
    async checkCitiesExperiencingClearerSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.CitiesExperiencingClearerSubtitle);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('CitiesExperiencingClearerSubtitle.png');
    },
    async checkCECFirstPharagraphSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.CECFirstPharagraph);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('CECFirstPharagraph.png');
    },   
    async checkLikeFlippingaSwitchSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.LikeFlippingaSwitchSubtitle);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('LikeFlippingaSwitchSubtitle.png');
    },
    async checkSeasonalChangesSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.SeasonalChangesSubtitle);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('SeasonalChangesSubtitle.png');
    },
    async checkSCFirstPharagraphSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.SCFirstPharagraph);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('SCFirstPharagraph.png');
    },   
    async checkSeeingAirPollutionSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.SeeingAirPollutionSubtitle);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('SeeingAirPollutionSubtitle.png');
    }, 
    async checkReinforcingMeasurementsSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.ReinforcingMeasurementsSubtitle);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('ReinforcingMeasurementsSubtitle.png');
    },
    async checkRMFirstPharagraphSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.RMFirstPharagraph);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('RMFirstPharagraph.png');
    },
    async checkMeasuringAirPollutionSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.MeasuringAirPollutionSubtitle);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('MeasuringAirPollutionSubtitle.png');
    },
    async checkRightSideOfFirstMap(page){
        const firstElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.FirstMap.FirstElement);
        const secondElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.FirstMap.SecondElement);
        const thirdElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.FirstMap.ThirdElement);
        await thirdElement.click();
        //Move the slider to the left
        await firstElement.evaluate( element => element.style.clip = 'rect(0px, 0px, 512px, 0px)');
        await secondElement.evaluate( element => element.style.clip = 'rect(0px, 999em, 512px, 0px)');
        await thirdElement.evaluate(element => element.style.transform = 'translate(0px, 0px)')
        await delay(2000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('RightSideOfFirstMap.png');

    },
    async checkLeftSideOfFirstMap(page){
        const firstElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.FirstMap.FirstElement);
        const secondElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.FirstMap.SecondElement);
        const thirdElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.FirstMap.ThirdElement);
        //Move the slider to the right
        await firstElement.evaluate( element => element.style.clip = 'rect(0px, 487.575px, 512px, 0px)');
        await secondElement.evaluate( element => element.style.clip = 'rect(0px, 999em, 512px, 487.575px)');
        await thirdElement.evaluate(element => element.style.transform = 'translate(487.575px, 0px)')
        await delay(2000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('LeftSideOfFirstMap.png');

    },

    async checkMAPFirstPharagraphSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.MAPFirstPharagraph);       
        await elementProperties.click();
        await delay(13000);
        await expect.soft(page).toHaveScreenshot('MAPFirstPharagraph.png');
    },

    async checkRightSideOfSecondMap(page){
        const firstElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.SecondMap.FirstElement);
        const secondElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.SecondMap.SecondElement);
        const thirdElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.SecondMap.ThirdElement);
        await thirdElement.click();
        //Move the slider to the left
        await firstElement.evaluate( element => element.style.clip = 'rect(0px, 0px, 512px, 0px)');
        await secondElement.evaluate( element => element.style.clip = 'rect(0px, 999em, 512px, 0px)');
        await thirdElement.evaluate(element => element.style.transform = 'translate(0px, 0px)')
        await delay(2000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('RightSideOfSecondMap.png');

    },
    async checkLeftSideOfSecondMap(page){
        const firstElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.SecondMap.FirstElement);
        const secondElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.SecondMap.SecondElement);
        const thirdElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.SecondMap.ThirdElement);
        //Move the slider to the right
        await firstElement.evaluate( element => element.style.clip = 'rect(0px, 487.575px, 512px, 0px)');
        await secondElement.evaluate( element => element.style.clip = 'rect(0px, 999em, 512px, 615.531px)');
        await thirdElement.evaluate(element => element.style.transform = 'translate(487.575px, 0px)')
        await delay(2000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('LeftSideOfSecondMap.png');

    },
    async checkMAPSecondPharagraphSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.MAPSecondPharagraph);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('MAPSecondPharagraph.png');
    },
    async checkRightSideOfThirdMap(page){
        const firstElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.ThirdMap.FirstElement);
        const secondElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.ThirdMap.SecondElement);
        const thirdElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.ThirdMap.ThirdElement);
        await thirdElement.click();
        //Move the slider to the left
        await firstElement.evaluate( element => element.style.clip = 'rect(0px, 0px, 512px, 0px)');
        await secondElement.evaluate( element => element.style.clip = 'rect(0px, 999em, 512px, 0px)');
        await thirdElement.evaluate(element => element.style.transform = 'translate(0px, 0px)')
        await delay(2000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('RightSideOfThirdMap.png');

    },
    async checkLeftSideOfThirdMap(page){
        const firstElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.ThirdMap.FirstElement);
        const secondElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.ThirdMap.SecondElement);
        const thirdElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.ThirdMap.ThirdElement);
        //Move the slider to the right
        await firstElement.evaluate( element => element.style.clip = 'rect(0px, 487.575px, 512px, 0px)');
        await secondElement.evaluate( element => element.style.clip = 'rect(0px, 999em, 512px, 487.575px)');
        await thirdElement.evaluate(element => element.style.transform = 'translate(487.575px, 0px)')
        await delay(2000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('LeftSideOfThirdMap.png');

    },  
    async checkSeeingReboundsSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.SeeingReboundsSubtitle);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('SeeingReboundsSubtitle.png');
    },
    async checkRightSideOfFourthMap(page){
        const firstElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.FourthMap.FirstElement);
        const secondElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.FourthMap.SecondElement);
        const thirdElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.FourthMap.ThirdElement);
        await thirdElement.click();
        //Move the slider to the left
        await firstElement.evaluate( element => element.style.clip = 'rect(0px, 0px, 512px, 0px)');
        await secondElement.evaluate( element => element.style.clip = 'rect(0px, 999em, 512px, 0px)');
        await thirdElement.evaluate(element => element.style.transform = 'translate(0px, 0px)')
        await delay(2000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('RightSideOfFourthMap.png');

    },
    async checkLeftSideOfFourthMap(page){
        const firstElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.FourthMap.FirstElement);
        const secondElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.FourthMap.SecondElement);
        const thirdElement = await page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.Maps.FourthMap.ThirdElement);
        //Move the slider to the right
        await firstElement.evaluate( element => element.style.clip = 'rect(0px, 487.575px, 512px, 0px)');
        await secondElement.evaluate( element => element.style.clip = 'rect(0px, 999em, 512px, 487.575px)');
        await thirdElement.evaluate(element => element.style.transform = 'translate(487.575px, 0px)')
        await delay(2000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('LeftSideOfFourthMap.png');

    },
    async checkViewFooterSection (page){
        const elementProperties = page.locator(SeDiscovery.thematicAreas.CovidView.AirQualityCovidView.ViewFooter);       
        await elementProperties.click();
        await delay(13000);
        //Screenshots the entire section of the page and compares it with a previously stored screenshot, and throws error if they're different each other
        await expect.soft(page).toHaveScreenshot('ViewFooter.png');
    },

};