class ViceDeanManagementPage {
    // WebElements
    constructor() {
        this.nameInput = '#name';
        this.surnameInput = '#surname';
        this.birthPlaceInput = '#birthPlace';
        this.genderFemaleInput = '[value="FEMALE"]';
        this.genderMaleInput = '[value="MALE"]';
        this.birthDayInput = '#birthDay';
        this.phoneNumberInput = '#phoneNumber';
        this.ssnInput = '#ssn';
        this.userNameInput = '#username';
        this.passwordInput = '#password';
        this.submitButton = '.fw-semibold.btn.btn-primary.btn-lg';
        this.inputRequired = '.invalid-feedback';
        this.errorMessage2 = '.Toastify__toast-body > :nth-child(2)';
        this.vicedeanSavedMessage = '.Toastify__toast-body > :nth-child(2)';
        this.errorMessage3 = '.Toastify__toast-body > :nth-child(2)';
        this.errorMessage4 = '.Toastify__toast-body > :nth-child(2)';
        this.passsworderror = '[class="invalid-feedback"]';
        this.menu ='[class="fw-semibold text-white bg-primary navbar-toggler collapsed"]';
         this.vicedeanManagement="//*[.='Vice Dean Management']" ;
   
   
    }

    // Methods

    writeName(ViceDeanName) {
        cy.get(this.nameInput).click({force:true});
        cy.wait(2000);

    
        cy.get(this.nameInput).type(ViceDeanName);
        cy.wait(2000);

    }

    writeSurName(ViceDeanSurName) {
        cy.get(this.surnameInput, { timeout: 10000 }).should('be.visible').type(ViceDeanSurName);
    }

    writeBirthPlace(BirthPlace) {
        cy.get(this.birthPlaceInput, { timeout: 10000 }).should('be.visible').type(BirthPlace);
    }

    clickGenderFemaleButton() {
        cy.get(this.genderFemaleInput).click();
    }

    clickGenderMaleButton() {
        cy.get(this.genderMaleInput).click();
    }

    writeDateOfBirth(DateOfBirth) {
        cy.get(this.birthDayInput, { timeout: 10000 }).should('be.visible').type(DateOfBirth);
    }

    writeDateofBirth(DateofBirth) {
    cy.get(this.birthDayInput, { timeout: 10000 }).should('be.visible').type(DateofBirth);
}

    writePhoneNumber(PhoneNumber) {
        cy.get(this.phoneNumberInput, { timeout: 10000 }).should('be.visible').type(PhoneNumber);
    }

    writeSsn(ssn) {
        cy.get(this.ssnInput, { timeout: 10000 }).should('be.visible').type(ssn);
    }

    writeUserName(ViceDeanUsername) {
        cy.get(this.userNameInput, { timeout: 10000 }).should('be.visible').type(ViceDeanUsername);
    }

    writePassword(ViceDeanPassword) {
        cy.get(this.passwordInput).type(ViceDeanPassword);
    }

    clickSubmitButton() {
        cy.get(this.submitButton).click();
    }

    visibleRequiredMessage(errorMessage) {
        cy.get(this.inputRequired).should('contain', errorMessage);
    }

    visibleErrorMessage(errorMessage2) {
        cy.get(this.errorMessage2).should('contain', errorMessage2);
    }

    invisibleSavedMessage() {
        cy.get(this.vicedeanSavedMessage).should('not.exist');
    }

    visibleViceDeanSaved(viceDeanSaved) {
      
        cy.get(this.vicedeanSavedMessage,{ timeout: 5000 }).should('contain', viceDeanSaved);
    }
    
    visiblePasswordErrorMessage(passworderror) {
        cy.get(this.passsworderror).should('contain', passworderror);
    }

    clickMenubutton(){
        cy.get(this.menu).click();
    }


    clickVicedeanManagement() {

        cy.xpath(this.vicedeanManagement).click();
    }
    }
    


export const viceDeanManagementPage = new ViceDeanManagementPage();