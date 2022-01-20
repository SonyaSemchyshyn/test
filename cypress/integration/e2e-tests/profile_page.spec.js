import AuthorizationPage from "../../support/Pages/Authorization_Page";
import Profile from "../../support/Pages/Profile";
import checkProfileFields from "../../support/Helper/profileTestData";
import {authorizationDataRegUser}  from "../../support/en.json";

describe('Verify profile page table', () => {
    const authorizationPage = new AuthorizationPage();
    const profile = new Profile();

    let preConditionResult = [];
    let profileResult = [];

    function goToProfilePage() {
        authorizationPage.logInBtn.click()
        authorizationPage.emailInput.should('be.visible')
        authorizationPage.emailInput.type(authorizationDataRegUser.email)
        authorizationPage.passwordInput.type(authorizationDataRegUser.password)
            .invoke('val')
            .should('not.be.empty')
        authorizationPage.loginBtn.click()  
        profile.openSslsAutomationDropDown()
        profile.selectSslsAutomationDropDownValue('Profile').click()
    }

    before(() => {
        cy.visit("/")

        goToProfilePage()

        preConditionResult = checkProfileFields().forEach(({ name, value}) => {
            cy.contains('span', name)
                .should('exist')
                .and('contain', name)
            cy.contains('span', value)
                .should('exist')
                .and('contain', value)
        })
    
        profile.openSslsAutomationDropDown()
        profile.logOutBtn.click()

    })

    it('My profile page. Client area', () => {
        let resultOfComparingProfileTable;
        goToProfilePage()

        profileResult = checkProfileFields().forEach(({ name, value}) => {
            cy.contains('span', name)
                .should('exist')
                .and('contain', name)
            cy.contains('span', value)
                .should('exist')
                .and('contain', value)
        })
        resultOfComparingProfileTable = JSON.stringify(preConditionResult) === JSON.stringify(profileResult) 
        
        assert.isTrue(resultOfComparingProfileTable, 'Actual result equeals to Expected result')
    })

})