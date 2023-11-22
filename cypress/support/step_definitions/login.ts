import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pages/login.page";

Given(/^User is logged in$/, () => {
	loginPage.openLoginPage();
    loginPage.login('standard_user', 'secret_sauce');
});

Given(/^User is on the main page$/, () => {
	loginPage.openLoginPage();
});

When(/^User enter "([^"]*)" and "([^"]*)"$/, (username:string, password:string) => {
	loginPage.setUsername(username);
	loginPage.setPassword(password);
});

When(/^User click login button$/, () => {
	loginPage.clickLoginBtn();
});

Then(/^User should see "([^"]*)"$/, (message:string) => {
	loginPage.getErrorMsg().should('include', message);
});

When(/^User is loggged in$/, () => {
	loginPage.login('standard_user', 'secret_sauce');
});

Then(/^User is redirected to the login page$/, () => {
	cy.url().should('equal','https://www.saucedemo.com/') 
});

Then(/^login with correct data$/, () => {
	loginPage.login('standard_user', 'secret_sauce');
});
