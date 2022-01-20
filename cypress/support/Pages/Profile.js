class Profile {

    openSslsAutomationDropDown(){
        return cy.contains('button', 'ssls.automation')
            .click()
    }

    selectSslsAutomationDropDownValue(value){
        return cy.contains('a', value)
    }

    get logOutBtn() {
        return cy.contains('button', 'Log out')
    }

}

export default Profile;