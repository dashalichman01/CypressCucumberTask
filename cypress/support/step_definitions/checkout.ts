import {Then, When } from "@badeball/cypress-cucumber-preprocessor";
import checkoutPage from "../pages/checkout.page";
import faker from "../../helper/faker";

When(/^User click 'checkout' button$/, () => {
	checkoutPage.clickCheckoutBtn();
});

When(/^User enter data$/, () => {
	checkoutPage.setFirstName(faker.getRandomFirstName());
	checkoutPage.setLastName(faker.getRandomLastName());
	checkoutPage.setPostalCode(faker.getRandomPostalCode());
});

When(/^User click 'continue' button$/, () => {
	checkoutPage.clickContinueBtn();
});

When(/^User click 'finish' button$/, () => {
	checkoutPage.clickFinishBtn();
});

Then(/^Success message "([^"]*)" is displayed$/, (msg) => {
	checkoutPage.getSuccessMsg().should('contain',msg);
});

When(/^User enter first name and last name$/, () => {
	checkoutPage.setFirstName(faker.getRandomFirstName());
	checkoutPage.setLastName(faker.getRandomLastName());
});

Then(/^Error message "([^"]*)" is displayed$/, (msg) => {
	checkoutPage.getErrorMsg().should('contain',msg);
});

When(/^Checkout with correct data$/, () => {
	checkoutPage.clickCheckoutBtn();
	checkoutPage.setFirstName(faker.getRandomFirstName());
	checkoutPage.setLastName(faker.getRandomLastName());
	checkoutPage.setPostalCode(faker.getRandomPostalCode());
	checkoutPage.clickContinueBtn();
});

