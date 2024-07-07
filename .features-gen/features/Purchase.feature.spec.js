/** Generated from: features/Purchase.feature */
import { test } from "../../steps/fixtures.ts";

test.describe('Shopping Experience - Adding Items to Cart and Completing Checkout', () => {

  test.beforeEach(async ({ Given, loginPage, productsPage }) => {
    await Given('I am logged in as a \'standard\' user', null, { loginPage });
    await Given('I am on the products page', null, { productsPage });
  });

  test('Purchase an item and confirm checkout completion', async ({ When, Then, productsPage, cartPage, checkoutPage }) => {
    await When('I add an item to the cart', null, { productsPage });
    await When('I go to the cart', null, { cartPage });
    await Then('I should see the item in the cart', null, { cartPage });
    await When('I proceed to checkout', null, { checkoutPage });
    await When('I complete the checkout process', null, { checkoutPage });
    await Then('I should see the checkout confirmation', null, { checkoutPage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use('features/Purchase.feature'),
});

const testMetaMap = {
  "Purchase an item and confirm checkout completion": {"pickleLocation":"7:3"},
};