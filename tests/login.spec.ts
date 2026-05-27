import { test, expect } from '../fixtures/baseTest'

//const username = 'johnsmith26@gmail.com';
//const password = 'Learning@26'

test('valid login test', async ({ page, loginPage }) => {

    //await loginPage.goto();
    //await loginPage.login(username, password);

    expect(await page.title()).toContain("Let's Shop");

    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');

    await loginPage.signOut();



})