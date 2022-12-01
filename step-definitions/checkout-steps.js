const { Given, When, Then } = require('@cucumber/cucumber')
const { NavigationPage } = require('../page-objects/navigation-page')
const { CheckoutYourCartPage } = require('../page-objects/checkout-your-cart-page')
const { CheckoutYourInfoPage } = require('../page-objects/checkout-your-info-page')

const navigationPage = new NavigationPage()
const checkoutYourCartPage = new CheckoutYourCartPage()
const checkoutYourInfoPage = new CheckoutYourInfoPage()

When('I get to the checkout overview page', async function () {
    await navigationPage.shoppingCartLink()
    await checkoutYourCartPage.checkout()
    await checkoutYourInfoPage.fillInformationDetails()
    await checkoutYourInfoPage.continue()
})
