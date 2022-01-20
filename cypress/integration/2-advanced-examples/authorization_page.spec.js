import AuthorizationPage from "../../support/Pages/Authorization_Page";
import {authorizationDataRegUser, authorizationDataInCorrectUser, authorizationDataUnregUser}  from "../../support/en.json";

describe('verify autorization page', () => {
    const authorizationPage = new AuthorizationPage();

    beforeEach(() => {
        cy.visit("/")
    })

    it ('Authorization page (Welcome back!)', () => {
        authorizationPage.logInBtn
            .click()

        authorizationPage.emailInput
            .type(authorizationDataRegUser.email)
            .should('have.value', Cypress.env('email'))

        authorizationPage.passwordInput
            .type(authorizationDataRegUser.password)
            .should('have.value', Cypress.env('password'))

        authorizationPage.eyeIcon
            .click()

        authorizationPage.passwordInput 
            .scrollIntoView()

        authorizationPage.loginBtn
            .click()    
    })

    it('Authorization page. Not registered user', () => {
        authorizationPage.logInBtn
            .click()

        authorizationPage.emailInput
            .type(authorizationDataUnregUser.email)

        authorizationPage.passwordInput
            .type(authorizationDataUnregUser.password)

        authorizationPage.eyeIcon
            .click()

        authorizationPage.passwordInput 
            .scrollIntoView()

        authorizationPage.loginBtn
            .click() 
        
        authorizationPage.errorUnregUserMessage
            .scrollIntoView()
            .contains('Uh oh! Email or password is incorrect')
    })

    it('Authorization page. Invalid email', ()=> {
        authorizationPage.logInBtn
        .click()

        authorizationPage.emailInput
            .type(authorizationDataInCorrectUser.email)

        authorizationPage.passwordInput
            .type(authorizationDataInCorrectUser.password)

        authorizationPage.eyeIcon
            .click()

        authorizationPage.passwordInput 
            .scrollIntoView()

        authorizationPage.loginBtn
            .click() 
        
        authorizationPage.errorInvalidEmailMessage
            .scrollIntoView()
            .should('contain', 'isn’t an email')
    })

})