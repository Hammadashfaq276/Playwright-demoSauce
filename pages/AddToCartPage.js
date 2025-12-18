export class AddToCartPage {
    constructor(page) {
        this.page = page;
    }

    async addBackpack() {
        await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    async addProducts() {
        await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
        await this.page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
        await this.page.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        await this.page.click('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    }

    async removeProduct(product) {
        if (product === 'bikeLight') {
            await this.page.click('[data-test="remove-sauce-labs-bike-light"]');
        }
        // Add more if needed
    }

    async openCart() {
        await this.page.click('.shopping_cart_link');
    }

    async startCheckout() {
        await this.page.click('[data-test="checkout"]');
    }

    async verifyCartCount(expectedCount) {
        const badge = this.page.locator('.shopping_cart_badge');
        await badge.waitFor({ state: 'visible' });
        const count = await badge.textContent();
        if (parseInt(count) !== expectedCount) {
            throw new Error(`Expected cart count ${expectedCount}, but got ${count}`);
        }
    }
}