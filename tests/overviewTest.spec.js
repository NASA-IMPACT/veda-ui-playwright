const { test } = require('@playwright/test');
const discoveryPage = require('../helpers/Discovery-page.js');
const datasetsPage = require('../helpers/Datasets-page.js')
const thematicPage = require('../helpers/Thematic-page.js');
const menuSection = require('../helpers/Menu-section.js');
const overview1 = require('../helpers/thematics/covid-19/datasets/nighttime-lights/overview/overview1.js');

test.use({headless: true});
test('Test of Nightime Lights dataset on Overview view', async ({page})=> {
await discoveryPage.goToHomePage(page);
await thematicPage.clickThematic(page,'COVID-19');
await menuSection.openMenu(page);
await menuSection.goToDatasets(page);
await datasetsPage.clickCard(page,'Nighttime Lights');
await overview1.checkFirstParagraph(page);
await overview1.checkExploreBtn(page);
await overview1.checkFirstBodyParagraph(page);
await overview1.checkSecondBodyParagraph(page);
await overview1.checkFirstPageSection(page);
await overview1.checkSecondPageSection(page);
await overview1.checkCreditsSection(page);
await overview1.checkBottomPage(page);
});