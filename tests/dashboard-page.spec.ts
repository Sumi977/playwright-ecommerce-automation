import { test, expect } from '../fixtures/baseTest'

const productName = 'ZARA COAT 3';




test('Add to cart button is visible', async ({ loginPage, dashboardPage }) => {

    await expect(dashboardPage.getAddToCartButton(productName)).toBeVisible();
});

test('search product and add to cart', async ({ loginPage, dashboardPage }) => {


    await dashboardPage.searchProductAndAddToCart(productName);
    await dashboardPage.navigateToCart();


})






