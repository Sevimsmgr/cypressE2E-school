
class TeacherManagement{
    
    constructor(){
      this.selectLesson="//*[@class=' css-19bb58m']"
      this.name="#name"
      this.surname="#surname"
      this.birthPlace="#birthPlace"
      this.email="#email"
      this.phoneNumber="#phoneNumber"
      this.isAdvisorTeacher="#isAdvisorTeacher"
      this.genderCheck="input[value='FEMALE']"
      this.birthDay="#birthDay"
      this.ssn="#ssn"
      this.username="#username"
      this.password="#password"
      this.submitButton="button[class='fw-semibold btn btn-primary btn-lg']"
      this.teacherSavedMassage='.Toastify__toast-body > :nth-child(2)'
      this.clickLastPageButton="//*[@id='controlled-tab-example-tabpane-teachersList']//li[5]//a[1]"
      this.assertname="//tbody[1]/tr[20]/td[1]"
      this.assertphone="//tbody[1]/tr[20]/td[2]"
      this.assertssn="//tbody[1]/tr[20]/td[3]"
      this.assertUsername="//tbody[1]/tr[20]/td[4]"
      this.teacherEditButton="//tbody[1]/tr[17]/td[5]"
    
      


    
}

clickSelectlesson(selectLesson) {
    cy.xpath(this.selectLesson).click(selectLesson).type('Muggle Studies {enter}');
    cy.wait(2000);

}
writeName(name) {
   
    cy.get(this.name).type(name);
}
writeSurname(surname) {

    cy.get(this.surname).type(surname);
}

writeBirthPlace(birthPlace) {
    cy.get(this.birthPlace).type(birthPlace);
}
writeEmail(email) {
    cy.get(this.email).type(email);
}
writePhoneNumber(phoneNumber) {
    
    cy.get(this.phoneNumber).type(phoneNumber);
}

writeSsn(ssn) {
    
    cy.get(this.ssn).type(ssn);
}

writeUsername(username) {
    cy.get(this.username).type(username);
}
writePassword(password) {
    cy.get(this.password).type(password);
}

clickisAdvisorTeacher(isAdvisorTeacher) {
    cy.get(this.isAdvisorTeacher).check(isAdvisorTeacher);
}

selectGender(genderCheck) {
    cy.get(this.genderCheck).check(genderCheck);
}
writeDoB(birthDay) {
    cy.get(this.birthDay).type(birthDay);
}

clickSubmitButton(submitButton) {
    cy.get(this.submitButton).click(submitButton);  
    cy.wait(2000);
    cy.get(this.teacherSavedMassage).should('contain', 'Teacher saved successfully');
   
}

clickLastPage(clickLastPageButton) {
    cy.xpath(this.clickLastPageButton).click(clickLastPageButton);

}

nameAssertion(assertname) {
    cy.xpath(this.assertname).should('be.visible');
    
}

phoneAssertion(assertphone) {
    cy.xpath(this.assertphone).should('be.visible');
}

ssnAssertion(assertssn) {
    cy.xpath(this.assertssn).should('be.visible');
}

usernameAssertion(assertUsername) {
    cy.xpath(this.assertUsername).should('be.visible');
}

clickTeacherEdit(teacherEditButton) {
    cy.xpath(this.teacherEditButton).click(teacherEditButton);
}

}
export const teacherManagement= new TeacherManagement()