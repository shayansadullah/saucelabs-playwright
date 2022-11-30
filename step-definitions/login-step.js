const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('I visit the login page', async function () {
    await loginPage.navigateToLoginScreen()
})

When('I fill in the login form with valid credentials', async function () {
    await loginPage.submitLoginForm()
})

Then('I should see the home page', async function () {
    await loginPage.assertUserIsLoggedIn()
})
