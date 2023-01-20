const { test } = require('@playwright/test');
const discoveryPage = require('../helpers/Discovery-page.js');
const discovery1 = require('../helpers/thematics/covid-19/discoveries/discovery1.js');



test.use({headless: true});
test.describe('Test about discovery1', async () => {
   test('Test of Air Quality and Covid-19 view', async ({ page }) => {
    await discoveryPage.goToHomePage(page);
    await discoveryPage.clickCard(page,'COVID-19');
    await discovery1.gotoAirQualityDiscovery(page);
    await discovery1.checkTopPageSection(page);
    await discovery1.checkGoingThroughChangesSection(page);
    await discovery1.checkGTCFirstPharagraphSection(page);
    await discovery1.checkGTCSecondPharagraphSection(page);
    await discovery1.checkGTCThirdPharagraphSection(page);
    await discovery1.checkGTCFourthPharagraphSection(page);
    await discovery1.checkWhatMakesAirSection(page);
    await discovery1.checkWMAFirstPharagraphSection(page);
    await discovery1.checkWMASecondPharagraphSection(page);
    await discovery1.checkWMAThirdPharagraphSection(page);
    await discovery1.checkCitiesExperiencingClearerSection(page);
    await discovery1.checkCECFirstPharagraphSection(page);
    await discovery1.checkLikeFlippingaSwitchSection(page);
    await discovery1.checkSeasonalChangesSection(page);
    await discovery1.checkSCFirstPharagraphSection(page);
    await discovery1.checkSeeingAirPollutionSection(page);
    await discovery1.checkReinforcingMeasurementsSection(page);
    await discovery1.checkRMFirstPharagraphSection(page);
    await discovery1.checkMeasuringAirPollutionSection(page);
    await discovery1.checkRightSideOfFirstMap(page);
    await discovery1.checkLeftSideOfFirstMap(page);
    await discovery1.checkMAPFirstPharagraphSection(page);
    await discovery1.checkRightSideOfSecondMap(page);
    await discovery1.checkLeftSideOfSecondMap(page);   
    await discovery1.checkMAPSecondPharagraphSection(page);
    await discovery1.checkRightSideOfThirdMap(page);
    await discovery1.checkLeftSideOfThirdMap(page);   
    await discovery1.checkSeeingReboundsSection(page);
    await discovery1.checkRightSideOfFourthMap(page);
    await discovery1.checkLeftSideOfFourthMap(page);   
    await discovery1.checkViewFooterSection(page);
   });

});  