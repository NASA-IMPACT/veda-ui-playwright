const { test } = require('@playwright/test');
const discoveryPage = require('../helpers/Discovery-page.js');
const datasetsPage = require('../helpers/Datasets-page.js');
const thematicPage = require('../helpers/Thematic-page.js');
const explorationPage = require('../helpers/Exploration-page.js')
const menuSection = require('../helpers/Menu-section.js');
const exploration1 = require('../helpers/thematics/covid-19/datasets/nighttime-lights/exploration/exploration1.js')
test.use({headless: true});
test.describe('Compilation of test on Exploration view', () => {
    test('Test of Nitrogen Dioxide dataset on Exploration view', async ({page})=> {
        await discoveryPage.goToHomePage(page);
        await thematicPage.clickThematic(page,'COVID-19');
        await menuSection.openMenu(page);
        await menuSection.goToDatasets(page);
        await datasetsPage.clickCard(page,'Nitrogen Dioxide');
        await datasetsPage.clickExploration(page);
        await explorationPage.openFirstCalendar(page);
        await explorationPage.chooseYear(page,'2021');
        await explorationPage.chooseMonth(page,'July');
        await explorationPage.saveMonth(page);
        await explorationPage.validateDateSelected(page);
        await explorationPage.takeOrCompareScreenshot(page,'July2021Map.png');
    });
    test('Compare layers information on Exploration view', async ({page})=> {
        await discoveryPage.goToHomePage(page);
        await thematicPage.clickThematic(page,'COVID-19');
        await menuSection.openMenu(page);
        await menuSection.goToDatasets(page);
        await datasetsPage.clickCard(page,'Nitrogen Dioxide');
        await datasetsPage.clickExploration(page);
        await explorationPage.clickLayer(page,'No2');
        await explorationPage.clickLayerInfoAndStore(page,'No2');
        await explorationPage.compareInfoLayers(page);
        await explorationPage.clickLayer(page,'No2 (Diff)');
        await explorationPage.clickLayerInfoAndStore(page,'No2 (Diff)');
        await explorationPage.compareInfoLayers(page);
    });
    
    test('Test of date comparisons on Exploration view', async ({page})=> {
        await discoveryPage.goToHomePage(page);
        await thematicPage.clickThematic(page,'COVID-19');
        await menuSection.openMenu(page);
        await menuSection.goToDatasets(page);
        await datasetsPage.clickCard(page,'Nitrogen Dioxide');
        await datasetsPage.clickExploration(page);
        await explorationPage.openFirstCalendar(page);
        await explorationPage.chooseYear(page,'2016');
        await explorationPage.chooseMonth(page,'January');
        await explorationPage.saveMonth(page);
        await explorationPage.validateDateSelected(page);
        await explorationPage.takeOrCompareScreenshot(page,'Jan2016Map.png');
        await explorationPage.toggleDateComparisonBtn(page);
        await explorationPage.openSecondCalendar(page);
        await explorationPage.chooseYear(page,'2020');
        await explorationPage.chooseMonth(page,'July');
        await explorationPage.saveMonth(page);
        await explorationPage.validateDatesComparisonsSelected(page);
        await explorationPage.clickLayer(page,'No2');
        await explorationPage.takeOrCompareScreenshot(page,'ComparisonNo2MidSwipe.png');
        await explorationPage.swipeBtnToLeft(page);
        await explorationPage.takeOrCompareScreenshot(page,'ComparisonNo2LeftSwipe.png');
        await explorationPage.swipeBtnToRight(page);
        await explorationPage.takeOrCompareScreenshot(page,'ComparisonNo2RightSwipe.png');
        await explorationPage.swipeBtnToMiddle(page);
        await explorationPage.clickLayer(page,'No2 (Diff)');
        await explorationPage.takeOrCompareScreenshot(page,'ComparisonNo2DiffMidSwipe.png');
        await explorationPage.swipeBtnToLeft(page);
        await explorationPage.takeOrCompareScreenshot(page,'ComparisonNo2DiffLeftSwipe.png');
        await explorationPage.swipeBtnToRight(page);
        await explorationPage.takeOrCompareScreenshot(page,'ComparisonNo2DiffRightSwipe.png');
        await explorationPage.swipeBtnToMiddle(page);
    });

});

