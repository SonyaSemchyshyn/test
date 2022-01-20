class AuthorizationPage {
    
    get logInBtn() {
        return cy.contains('button','Log in')
    }
    get emailInput() {
        return cy.get('input[type="email"]')
    }
    get passwordInput() {
        return cy.get('input[name="password"]')
    }
    get eyeIcon() {
        return cy.get('.btn-input')
    }
    get loginBtn() {
        return cy.get('.btn')
    }
    get errorUnregUserMessage() {
        return cy.contains('Uh oh! Email or password is incorrect')
            .parent('.ssls-notification__info')
    }
    get errorInvalidEmailMessage() {
        return cy.contains('isn’t an email')
            
    }
    openSslsAutomationDropDown() {
        return cy.contains('button', 'ssls.automation')
            .click()
    }
    selectSslsAutomationDropDownValue(value) {
        return cy.contains('a', value)
    }
    get panel() {
        return cy.contains('.panel')
    }
    
}

export default AuthorizationPage;