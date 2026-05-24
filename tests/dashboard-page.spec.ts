import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'


test.describe('Dashboard Test', () => {
    let dashboardPage: DashboardPage;
    const productName = 'ZARA COAT 3';
    test.beforeEach('login to the app', async ({ page }) => {
        const loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        await loginPage.goto();
        await loginPage.login('johnsmith26@gmail.com', 'Learning@26');
        await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');

    })
    test('Add to cart button is visible', async ({ page }) => {

        await expect(dashboardPage.getAddToCartButton(productName)).toBeVisible();

    })

    test('search product and add to cart', async ({ page }) => {


        await dashboardPage.searchProductAndAddToCart(productName);
        await dashboardPage.navigateToCart();


    })



    test.afterEach(async ({ page }) => {
        await page.close();
    })



})