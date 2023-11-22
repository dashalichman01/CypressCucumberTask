const loginPageUrl = '/';
const usernameField = '#user-name';
const passwordField = '#password';
const loginBtn = '#login-button';
const errrorMessage  = '.error-message-container.error';

class LoginPage{

    openLoginPage() {
        cy.visit(loginPageUrl);
    }

    getUsernameField(){
        return cy.get(usernameField);
    }

    getPasswordField(){
        return cy.get(passwordField);
    }

    getloginBtn () {
        return cy.get(loginBtn);
    }

    getErrorMsg(){
        return cy.get(errrorMessage).invoke('text');
    }

    setUsername(username:string){
        this.getUsernameField().type(username);
    }
    
    setPassword(password:string){
        this.getPasswordField().type(password);
    }

    clickLoginBtn(){
        this.getloginBtn().click();
    }

    login(username:string, password:string){
        this.setUsername(username);
        this.setPassword(password);
        this.clickLoginBtn();
    }
}

export default new LoginPage()