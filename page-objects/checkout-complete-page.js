class CheckoutCompletePage {
    async assertCheckoutCompleted() {
       const isCheckoutCompleteSection = await page.locator('span.title').textContent()
        expect(isCheckoutCompleteSection).contains('Complete')
    }
}
module.exports = { CheckoutCompletePage }