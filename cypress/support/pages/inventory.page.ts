const burgerBtn = '#react-burger-menu-btn';
const logoutBtn = '#logout_sidebar_link';
const addToCartBtn = '#add-to-cart-sauce-labs-backpack';
const inventoryItems = '.inventory_item';
const cartBtn = '.shopping_cart_link';
const cartBadge = '.shopping_cart_badge';
const removeBtn = '#remove-sauce-labs-backpack';
const itemName = '.inventory_item_name ';


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

    clickOnFooterBtn(btn:string){
            cy.get(btn + ">a").invoke('removeAttr', 'target').should('exist').click();  
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false});
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

    openCart(){
        this.getCartBtn().click();
    }

    openItemPage(){
        this.getItemName().click();
    }
}

export default new InventoryPage();