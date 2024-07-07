Feature: Shopping Experience - Adding Items to Cart and Completing Checkout

  Background:
    Given I am logged in as a 'standard' user
    Given I am on the products page

  Scenario: Purchase an item and confirm checkout completion
    When I add an item to the cart
    When I go to the cart
    Then I should see the item in the cart
    When I proceed to checkout
    When I complete the checkout process
    Then I should see the checkout confirmation
