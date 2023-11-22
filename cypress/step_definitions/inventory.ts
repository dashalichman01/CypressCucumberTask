import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import inventoryPage from "../support/pages/inventory.page";

When(/^User click on item name$/, () => {
	inventoryPage.openItemPage();
});

Then(/^cart item page is opened$/, () => {
	cy.url().should('contain', '/inventory-item.html')
});

When(/^User add to cart product$/, () => {
	inventoryPage.clickAddToCartBtn();
});

When(/^User open cart$/, () => {
	inventoryPage.openCart();
});

Then(/^Remove button is displsyed$/, () => {
	inventoryPage.getRemoveBtn().should('be.visible');
});

Then(/^Cart badge is equal to 1$/, () => {
	inventoryPage.getCartBadgeNumber().should('equal', '1');
});

When(/^User remove product$/, () => {
	inventoryPage.clickRemoveBtn();
});

Then(/^Add to cart button is displayed$/, () => {
	inventoryPage.getAddToCartBtn().should('be.visible');
});

When(/^User click burger menu button$/, () => {
	inventoryPage.clickBurgerBtn();
});

When(/^User click logout button$/, () => {
	inventoryPage.clickLogoutBtn();
});

Then(/^User is redirected to inventory page$/, () => {
	cy.url().should('include', '/inventory.html');
});

When(/^User click add to cart button$/, () => {
	inventoryPage.clickAddToCartBtn();
});

When(/^User open cart$/, () => {
	inventoryPage.openCart();
});