Feature: Purchase action
    As a user
    I want to be able to sort by price (high to low)
    so that I can then purchase the most expensive and cheapest products

    Scenario: Ordering High to Low and Purchasing the most expensive and cheapest products should have the correct items in the cart
      Given I visit the login page
      When I fill in the login form with valid credentials
      And I sort the price "Price (high to low)"
      And I add the first product into the cart
      And I add the last product into the cart
      When I complete the purchase
      Then the following products are present in the cart
        | name                     | price |
        | Sauce Labs Fleece Jacket | 49.99 |
        | Sauce Labs Onesize       | 7.99  |
      And the total purchase cost should be "55.98"