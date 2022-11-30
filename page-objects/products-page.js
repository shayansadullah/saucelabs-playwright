class ProductsPage {
    async sortProductsListing( sortOrder ) {
        await page.locator('.product_sort_container').selectOption({label: sortOrder})
    }

    async addFirstItemToCart() {
      await page.locator('#inventory_container .inventory_item:nth-child(1) button').click()
    }

    async addLastItemToCart() {
        let inventoryItems = await page.locator('#inventory_container .inventory_item').count()
        await page.locator(`#inventory_container .inventory_item:nth-child(${inventoryItems.toString()}) button`).click()
    }
}
module.exports = { ProductsPage }