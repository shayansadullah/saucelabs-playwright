
# SauceLabs Javascript and Cucumber filtering and purchase

Saucelabs javascript is a simple project for ordering and purchasing clothing items. This ensures that the most and least expenisve items (after being orderd from most expensive to least expensive) are included in the checkout process.

## Installation

In WebStorm 2022.x: make sure that the Node.js Core library is enabled in Settings (Preferences) | Languages & Frameworks | Node.js and NPM


## Usage

npm run test

## Project Description
Create a E2E test that comprises the below steps:
1. Login to https://www.saucedemo.com/ using the "standard_user" account
2. Sort the products by Price (high to low)
3. Add the cheapest & costliest products to your basket
4. Open the basket
5. Checkout
6. Enter details and Finish the purchase
What we are expecting:
• Using best practices write a Test framework that can test the above user journey
• Use Java or JavaScript with Cucumber/Gherkin and Selenium/WebDriverIO
• We don't expect every single aspect of the journey to be thoroughly tested, but
would expect to see scenario without glue code in such cases