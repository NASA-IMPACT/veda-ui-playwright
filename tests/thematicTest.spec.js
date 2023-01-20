const { test } = require('@playwright/test');
const thematic = require('../helpers/Thematic-page.js');

test.beforeEach(async ({ page }) => {
   
});

test.describe('Check quantity of datasets and discoveries', () => {

   test('Check agricultures discoveries', async ({ page }) => {
    await thematic.goToHomePage(page);
    await thematic.clickThematic(page,"Agriculture");
    await thematic.compareDiscovery(page);
   });

   test('Check agricultures datasets', async ({ page }) => {
   await thematic.goToHomePage(page);
   await thematic.clickThematic(page,"Agriculture");
   await thematic.compareDataset(page);
   });

   test('Check air quality discoveries', async ({ page }) => {
    await thematic.goToHomePage(page);
    await thematic.clickThematic(page,"Air Quality");
    await thematic.compareDiscovery(page);
   });

   test('Check air quality datasets', async ({ page }) => {
   await thematic.goToHomePage(page);
   await thematic.clickThematic(page,"Air Quality");
   await thematic.compareDataset(page);
   });

   test('Check COVID-19 discoveries', async ({ page }) => {
    await thematic.goToHomePage(page);
    await thematic.clickThematic(page,"COVID-19");
    await thematic.compareDiscovery(page);
   });

   test('Check COVID-19 datasets', async ({ page }) => {
   await thematic.goToHomePage(page);
   await thematic.clickThematic(page,"COVID-19");
   await thematic.compareDataset(page);
   });

   test('Check void area discoveries', async ({ page }) => {
    await thematic.goToHomePage(page);
    await thematic.clickThematic(page,"Void area");
    await thematic.compareDiscovery(page);
   });

   test('Check void area datasets', async ({ page }) => {
   await thematic.goToHomePage(page);
   await thematic.clickThematic(page,"Void area");
   await thematic.compareDataset(page);
   });

});  