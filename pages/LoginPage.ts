import { Page, Locator } from '@playwright/test'

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly registerMessage: Locator;
    readonly signOutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.loginButton = page.locator('#login');
        this.registerMessage = page.getByText("Don't have an account? Register here");
        this.signOutButton = page.getByRole('button', { name: ' Sign Out ' });



    }

    async goto() {
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }

    async login(username: string, password: string) {

        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click();


    }

    async registerHere() {
        const registerMessage = await this.registerMessage.textContent();
        return registerMessage;
    }

    async signOut() {
        await this.signOutButton.click();
    }

}