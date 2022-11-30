const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { ProductsPage } = require('../page-objects/products-page')

const productsPage = new ProductsPage()

When('I sort the price {string}', async function( sortOrder ) {
   await productsPage.sortProductsListing( sortOrder )
})

When('I add the first product into the cart', async function() {
   await productsPage.addFirstItemToCart()
})

When('I add the last product into the cart', async function() {
   await productsPage.addLastItemToCart()
})
