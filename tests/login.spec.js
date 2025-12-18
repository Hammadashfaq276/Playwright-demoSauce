import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLogin();
    console.log("Login Success ✔");

    // Logout inline
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
    await page.locator('#login-button').isVisible();
    console.log("Logout Success ✔");
});


