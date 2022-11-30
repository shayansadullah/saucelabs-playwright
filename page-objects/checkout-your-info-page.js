class CheckoutYourInfoPage{
    async fillInformationDetails() {
        await page.fill('[data-test="firstName"]', 'somefirstname')
        await page.fill('[data-test="lastName"]', 'somelastname')
        await page.fill('[data-test="postalCode"]', 'GU22 4EK')
    }

    async continue() {
        await page.locator('#continue').click()
    }
}
module.exports = { CheckoutYourInfoPage }