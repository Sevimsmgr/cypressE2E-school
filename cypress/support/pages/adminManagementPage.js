class AdminManagementPage {
    constructor() {
        this.name='#name'
        this.surname ='#surname'
        this.birthPlace ='#birthPlace'
        this.gender = '[value="FEMALE"]'
        this.dateOfBirth = '#birthDay'
        this.phone = '#phoneNumber'
        this.ssn = '#ssn'
        this.username = '#username'
        this.password = '#password'
        this.submitButton = '.mx-auto > .fw-semibold'
        this.nameErrorMessage = '[id="name"][class="form-control is-invalid"]'
        this.submitSaveMessage ='.Toastify__toast-body'
        this.errorMessage1 =':nth-child(1) > .mb-4 > .invalid-feedback'
        this.errorMessage2 =':nth-child(2) > .mb-4 > .invalid-feedback'
        this.errorMessage3 =':nth-child(3) > .mb-4 > .invalid-feedback'
        this.errorMessage4 =':nth-child(4) > .mb-4 > .invalid-feedback'
        this.errorMessage5 =':nth-child(5) > .mb-4 > .invalid-feedback'
        this.errorMessage6 =':nth-child(6) > .mb-4 > .invalid-feedback'
        this.errorMessage7 =':nth-child(7) > .mb-4 > .invalid-feedback'
        this.errorMessage8 =':nth-child(8) > .mb-4 > .invalid-feedback'
        this.errorMessage9 =':nth-child(7) > .mb-4 > .invalid-feedback'
        this.errorMessage10=':nth-child(9) > .mb-4 > .invalid-feedback'
        this.invaliSsnMessage='.Toastify__toast-body'
        this.invaliPasswordMessage=':nth-child(9) > .mb-4 > .invalid-feedback'  
        this.GuestName="//tbody/tr[13]/td[1]" 
        this.GuestGender="//tbody/tr[13]/td[2]"
        this.GuestPhone="//tbody/tr[13]/td[3]"
        this.GuestSsn="//tbody/tr[13]/td[4]"
        this.GuestUsername="//tbody/tr[13]/td[5]"
        this.GuestDelete="//tbody/tr[13]/td[6]"
        
    }

   // Methodlar
  writeName(name) {
    cy.wait(2000)
  cy.get(this.name).type(name)
  cy.wait(2000)
  }
 writeSurname(surname) {
    cy.get(this.surname).type(surname)

 }
writeBirthPlace(birthPlace) {
    cy.get(this.birthPlace).type(birthPlace)
}


clickGender(genderAdminManagement) {
    cy.get(this.gender).click();
}


writeDateOf(dateOfBirth) {
    cy.get(this.dateOfBirth).type(dateOfBirth)
}

writeSsn(ssn) {
    cy.get(this.ssn).type(ssn)
}
writePhone(phone) {
    cy.get(this.phone).type(phone)
}
writeUserName(username) {
cy.get(this.username).type(username)
}
writePassword(password) {
    cy.get(this.password).type(password)
}
clickSubmitButton(submitButton) {
    cy.get(this.submitButton).click
}

verifySubmitSaveMessage(submitSaveMessage){
cy.get().should('have.to', submitSaveMessage);

}
verifyErrorMessage1(errorMessage1) {
  
     cy.get(this.errorMessage1).should('have.to',errorMessage1);

}

verifyErrorMessage2(errorMessage2) {
    cy.wait(4000)
     cy.get(this.errorMessage2).should('have.to',errorMessage2);
   cy.wait(2000)
}clear


writeBosSurname(bossurname){
    cy.get(this.surname).type(bossurname)
 }
 writeBosBirthPlace(bosbirthPlace){
    cy.get(this.birthPlace).type(bosbirthPlace)
 }
 verifyErrorMessage3(errorMessage3) {
    cy.wait(2000)
     cy.get(this.errorMessage3).should('have.to',errorMessage3);
   cy.wait(2000)
}clear
writeBosDateOfBirth (bosdateOfBirth ){
    cy.get(this.dateOfBirth ).type(bosdateOfBirth )
 }
 verifyErrorMessage4(errorMessage4) {
    cy.wait(2000)
     cy.get(this.errorMessage4).should('have.to',errorMessage4);
   cy.wait(2000)
}clear
verifyErrorMessage5(errorMessage5) {
    cy.wait(2000)
     cy.get(this.errorMessage5).should('have.to',errorMessage5);
   cy.wait(2000)
}clear

verifyErrorMessage6(errorMessage6) {
    cy.wait(2000)
     cy.get(this.errorMessage6).should('have.to',errorMessage6);
   cy.wait(2000)
}clear

verifyErrorMessage7(errorMessage7) {
    cy.wait(2000)
     cy.get(this.errorMessage7).should('have.to',errorMessage7);
   cy.wait(2000)
}clear

verifyErrorMessage8(errorMessage8) {
    cy.wait(2000)
     cy.get(this.errorMessage8).should('have.to',errorMessage8);
   cy.wait(2000)
}clear
writeInvalidSSN1(invalidssn1){
    cy.get(this.ssn ).type(invalidssn1)
 
}
writeInvalidSSN2(invalidssn2){
    cy.get(this.ssn ).type(invalidssn2)
 
}

writeInvalidPassword1(invalidpassword1){
    cy.get(this.ssn ).type(invalidpassword1)
 
}
writeInvalidPassword3(invalidpassword3){
    cy.get(this.ssn ).type(invalidpassword3)
 
}
verifyErrorMessage9(errorMessage9) {
    
     cy.get(this.errorMessage9).should('have.to',errorMessage9);
  
}
verifyErrorMessage10(errorMessage10) {
   
     cy.get(this.errorMessage10).should('have.to',errorMessage10);
   
}
verifyInvalidSSN2(invaliSsnMessage){
    cy.get(this.invaliSsnMessage).should('have.to',invaliSsnMessage);
}
verifyInvalidpassword3(invaliPasswordMessage){
    cy.get(this.invaliPasswordMessage).should('have.to',invaliPasswordMessage);
}

verifyGuestName(){
    cy.xpath(this.GuestName).should('be.visible')
}

verifyGuestGender(){
    cy.xpath(this.GuestGender).should('be.visible')
}

verifyGuestPhone(){
    cy.xpath(this.GuestPhone).should('be.visible')
}


verifyGuestSsn(){
    cy.xpath(this.GuestSsn).should('be.visible')
}

verifyGuestUserName(){
    cy.xpath(this.GuestUsername).should('be.visible')
}
deleteGuestUser(){
    cy.xpath(this.GuestDelete).click()
}
}
export const adminManagement = new AdminManagementPage()