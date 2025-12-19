 import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddToCartPage } from '../pages/AddToCartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('E2E: Login, Add to Cart, Checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new AddToCartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // ---- LOGIN ----
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLogin();

    // ---- ADD 4 PRODUCTS ----
    await cartPage.addProducts();

    // ---- REMOVE 1 PRODUCT ----
    await cartPage.removeProduct('bikeLight');

    // ---- OPEN CART & VERIFY COUNT ----
    await cartPage.openCart();
    await cartPage.verifyCartCount(3);

    // ---- CHECKOUT ----
    await cartPage.startCheckout();
    await checkoutPage.fillCustomerInfo('Test', 'User', '99999');
    await checkoutPage.continue();
    await checkoutPage.finish();
    await checkoutPage.verifyOrderComplete();
});
