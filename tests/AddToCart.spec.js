import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddToCartPage } from '../pages/AddToCartPage';

test('Basic Add to Cart flow using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addToCartPage = new AddToCartPage(page);

    // ---- LOGIN ----
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLogin();
    console.log("Login Done ✔");

    // ---- ADD 4 PRODUCTS ----
   await addToCartPage.addProducts();
    console.log("4 products added ✔");

    // ---- REMOVE 1 PRODUCT (bikeLight) ----
    await addToCartPage.removeProduct('bikeLight');
    console.log("1 product removed ✔");

    // ---- OPEN CART ----
    await addToCartPage.openCart();
    console.log("Cart page opened ✔");

    // ---- VERIFY CART COUNT = 3 ----
    await addToCartPage.verifyCartCount(3);
    console.log("Cart has 3 items ✔");
});






