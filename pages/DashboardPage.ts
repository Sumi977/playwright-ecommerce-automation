import { Page, Locator } from '@playwright/test'

export class DashboardPage {
    page: Page;
    searchBox: Locator;

    products: Locator;
    cart: Locator;
    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.locator('input[placeholder="search"]').last();
        this.products = page.locator('#products .card');
        this.cart = page.locator('[routerlink="/dashboard/cart"]');


    }
    getAddToCartButton(productName: string) {
        return this.products.filter({ hasText: productName })
            .locator('button', { hasText: ' Add To Cart' });
    }


    async searchProductAndAddToCart(productName: string) {
        await this.searchBox.fill(productName);
        await this.products.first().waitFor({ state: 'visible', timeout: 3000 });
        const count = await this.products.count();

        for (let i = 0; i < count; i++) {
            if (await this.products.nth(i).locator('b').textContent() === productName) {
                await this.products.nth(i).locator('button', { hasText: 'Add To Cart' }).click();
                break;
            }
        }

    }

    async navigateToCart() {

        await this.cart.click();


    }
}