const removeProductBtn = '#remove-sauce-labs-backpack';
const cartItems = '.cart_item';
const cartList = '.cart_list > div';
const removedItem = '.removed_cart_item'

class CartPage{
    getRemoveBtn(){
        return cy.get(removeProductBtn);
    }

    getCartItems(){
        return cy.get(cartItems);
    }

    getCartList(){
        return cy.get(cartList);
    }

    getRemovedItem(){
        return cy.get(removedItem);
    }

    removeProduct(){
        this.getRemoveBtn().click();
    }
}

export default new CartPage();