const { Then } = require('@cucumber/cucumber')
const { CheckoutOverviewPage } = require('../page-objects/checkout-overview-page')

checkoutOverviewPage = new CheckoutOverviewPage()
Then('the following products are present in the cart', async function(orderDetails) {
 console.log(orderDetails);
    await checkoutOverviewPage.assertOrderDetails(orderDetails)
})
Then('the total purchase cost should be {string}', async function( total ) {
    let totalPurchaseCost = await checkoutOverviewPage.getTotalPurchaseCost( total )
    await expect(totalPurchaseCost).contains( total )
})