import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import cartPage from "../support/pages/cart.page";

When(/^User remove product from cart$/, () => {
	cartPage.removeProduct();
});

Then(/^Cart is empty$/, () => {
	cartPage.getRemovedItem().should('exist');
});
