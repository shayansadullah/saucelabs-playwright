class CheckoutOverviewPage {

    async getTotalPurchaseCost( total )  {
        let totalLabel = await page.locator('#checkout_summary_container .summary_subtotal_label').textContent()
       return totalLabel
    }
    async checkOrderInfo() {
        let elementsCount = await page.locator('div.cart_item_label').count()
        for( let index=1; index < elementsCount+1; index++ ) {
            const elementitem = await page.locator(`div.cart_item_label:nth-child(${index.toString()})`)
            const innerText = await elementitem.locator('span')
        }
    }
}
module.exports = { CheckoutOverviewPage }