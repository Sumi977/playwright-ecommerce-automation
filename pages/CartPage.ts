import { Page, Locator } from '@playwright/test'
export class CartPage {
    page: Page;
    checkoutButton: Locator;
    cartItems: Locator;
    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('.cart ');
        this.checkoutButton = page.getByText('Checkout');

    }

    async checkout(productName: string) {
        const count = await this.cartItems.count();
        console.log(count)
        for (let i = 0; i < count; i++) {
            if (await this.cartItems.nth(i).locator('h3').textContent() === productName) {
                await this.checkoutButton.click();
                break;

            }

        }
    }


}