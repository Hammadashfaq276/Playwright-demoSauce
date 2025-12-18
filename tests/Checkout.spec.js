  import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddToCartPage } from '../pages/AddToCartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('SauceDemo checkout flow using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new AddToCartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // ---- LOGIN ----
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLogin();
    console.log("Login Done ✔");

    // ---- ADD PRODUCT (SauceDemo requires at least 1) ----
    await cartPage.addBackpack();
    console.log("Backpack added ✔");

    // ---- OPEN CART ----
    await cartPage.openCart();
    console.log("Cart page opened ✔");

    // ---- START CHECKOUT ----
    await cartPage.startCheckout();

    // ---- FILL CUSTOMER INFO ----
    await checkoutPage.fillCustomerInfo('Test', 'User', '99999');
    await checkoutPage.continue();
    console.log("Customer info filled ✔");

    // ---- FINISH ORDER ----
    await checkoutPage.finish();

    // ---- VERIFY ORDER COMPLETE ----
    await checkoutPage.verifyOrderComplete();
    console.log("Order completed ✔");
});

