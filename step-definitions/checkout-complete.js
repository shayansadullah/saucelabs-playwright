const { Then } = require('@cucumber/cucumber')
const { CheckoutCompletePage} = require('../page-objects/checkout-complete-page')
const { CheckoutOverviewPage } = require('../page-objects/checkout-overview-page')


checkoutCompletedPage = new CheckoutCompletePage()
checkoutOverviewPage = new CheckoutOverviewPage()
Then('I complete the purchase', async function() {
    await checkoutOverviewPage.finish()
    const isCheckoutComplete = await checkoutCompletedPage.assertCheckoutCompleted()
})

