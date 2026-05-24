import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import fs from 'fs';

const jsonPath = 'test-data/loginData.json';
const loginData: any = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

for (const data of loginData) {
    test(`negative login test${data.email} ${data.password}`, async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(data.email, data.password);

        if (data.validity.toLowerCase() === 'invalid') {
            expect(await loginPage.registerHere()).toContain('Register here');
            await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/login')
        }

    })
};