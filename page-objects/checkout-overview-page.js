class CheckoutOverviewPage {

    async getTotalPurchaseCost( total )  {
        let totalLabel = await page.locator('#checkout_summary_container .summary_subtotal_label').textContent()
       return totalLabel
    }
    async assertOrderDetails( orderDetails ) {
        let products = orderDetails.rows()
        const order = await page.locator('div.cart_item > .cart_item_label > a > div').allTextContents()
        const price = await page.locator('div.cart_item > .cart_item_label > .item_pricebar > .inventory_item_price').allTextContents()
        let elementsCount = await page.locator('div.cart_item').count()
        expect(elementsCount).to.equal(products.length)
        for(let index=0; index < elementsCount; index++) {
            expect(order[index]).to.equal(products[index][0])
            expect(price[index]).to.equal(products[index][1])

        }
    }
}
module.exports = { CheckoutOverviewPage }