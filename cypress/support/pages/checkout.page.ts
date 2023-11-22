const checkoutBtn = '#checkout';
const firstNameField = '#first-name';
const lastNameField = '#last-name';
const postalCodeField = '#postal-code';
const continueBtn = '#continue';
const finishBtn = '#finish';
const successMsg = '#checkout_complete_container';
const errorMsg = '.error-message-container';

class CheckoutPage {

    getCheckoutBtn(){
        return cy.get(checkoutBtn);
    }

    getFirstNameField(){
        return cy.get(firstNameField);
    }

    getLastNameField(){
        return cy.get(lastNameField);
    }

    getPostalCodeField(){
        return cy.get(postalCodeField);
    }

    getFinishBtn(){
        return cy.get(finishBtn);
    }

    getContinueBtn(){
        return cy.get(continueBtn);
    }

    getSuccessMsg(){
        return cy.get(successMsg).invoke('text');
    }

    getErrorMsg(){
        return cy.get(errorMsg).invoke('text');
    }

    clickCheckoutBtn(){
        this.getCheckoutBtn().click();
    }

    setFirstName(firstName:string){
        this.getFirstNameField().type(firstName);
    }

    setLastName(lastName:string){
        this.getLastNameField().type(lastName);
    }

    setPostalCode(postalCode:string){
        this.getPostalCodeField().type(postalCode);
    }

    clickContinueBtn(){
        this.getContinueBtn().click();
    }

    clickFinishBtn(){
        this.getFinishBtn().click();
    }
}

export default new CheckoutPage();
