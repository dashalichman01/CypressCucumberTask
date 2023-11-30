const burgerBtn = '#react-burger-menu-btn';
const logoutBtn = '#logout_sidebar_link';
const addToCartBtn = '#add-to-cart-sauce-labs-backpack';
const inventoryItems = '.inventory_item';
const cartBtn = '.shopping_cart_link';
const cartBadge = '.shopping_cart_badge';
const removeBtn = '#remove-sauce-labs-backpack';
const itemName = '.inventory_item_name ';
const twitterBtn = '.social_twitter>a';
const facebookBtn = '.social_facebook>a';


class InventoryPage{
    getBurgerBtn(){
        return cy.get(burgerBtn);
    }

    getLogoutBtn(){
        return cy.get(logoutBtn);
    }

    getInventoryItem(){
        return cy.get(inventoryItems).first();
    }

    getAddToCartBtn(){
        return cy.get(addToCartBtn);
    }

    getRemoveBtn(){
        return cy.get(removeBtn);
    }

    getCartBadgeNumber(){
        return cy.get(cartBadge).invoke('text');
    }

    getCartBtn(){
        return cy.get(cartBtn);
    }

    getItemName(){
        return cy.get(itemName).first();
    }

    getTwitterBtn(){
        return cy.get(twitterBtn).invoke('removeAttr', 'target');
    }

    getFacebookBtn(){
        return cy.get(facebookBtn).invoke('removeAttr', 'target');
    }

    clickOnFooterBtn(btn:string){
            switch(btn){
                case 'Twitter':
                    this.clickTwitterBtn();
                    Cypress.on('uncaught:exception', (err, runnable) => {
                        return false});
                    break;
                case 'Facebook':
                    this.clickFacebookBtn();
                    Cypress.on('uncaught:exception', (err, runnable) => {
                        return false});
                    break;
            }
    }
   
    clickBurgerBtn(){
        this.getBurgerBtn().click();
    }

    clickLogoutBtn(){
        this.getLogoutBtn().click();
    }

    clickAddToCartBtn(){
        this.getAddToCartBtn().click();
    }

    clickRemoveBtn(){
        this.getRemoveBtn().click();
    }

    clickTwitterBtn(){
        this.getTwitterBtn().click();
    }

    clickFacebookBtn(){
        this.getFacebookBtn().click();
    }

    openCart(){
        this.getCartBtn().click();
    }

    openItemPage(){
        this.getItemName().click();
    }
}

export default new InventoryPage();