class CheckoutYourCartPage {
    async checkout() {
        await page.locator('[data-test=checkout]').click();
    }
}

module.exports = { CheckoutYourCartPage }