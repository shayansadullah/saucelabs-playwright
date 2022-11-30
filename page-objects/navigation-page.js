class NavigationPage {
    async shoppingCartLink() {
        await page.locator('#shopping_cart_container').click()
    }
}

module.exports = { NavigationPage }