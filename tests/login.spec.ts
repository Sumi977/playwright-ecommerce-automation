import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
const username = 'johnsmith26@gmail.com';
const password = 'Learning@26'

test('valid login test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username, password);

    expect(await page.title()).toContain("Let's Shop");

    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');

    await loginPage.signOut();



})