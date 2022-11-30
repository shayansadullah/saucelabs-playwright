const { When, Then } = require('@cucumber/cucumber')
const { CheckoutOverviewPage } = require('../page-objects/checkout-overview-page')

checkoutOverviewPage = new CheckoutOverviewPage()

Then('the following products are present in the cart', async function(orderName) {
 console.log(orderName);
    let products = orderName.rows()
    products.forEach((score) => console.log(`This is: ${score[0]}`))
    await checkoutOverviewPage.checkOrderInfo()
})

Then('the total purchase cost should be {string}', async function( total ) {
    let totalPurchaseCost = await checkoutOverviewPage.getTotalPurchaseCost( total )
    await expect(totalPurchaseCost).contains(total)
})