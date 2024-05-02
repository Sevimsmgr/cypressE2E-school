class viceDeanTeacherCreatePages{
    loginLink = "a[href='/login']";
    menuButton = "[class='fw-semibold text-white bg-primary navbar-toggler collapsed']";
    teacherManagementButton = "body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2)";
    usernameBox = "#username";
    passwordBox = "#password";
    loginLinkButton = "[class='fw-semibold btn btn-primary']"; //cy.get('.d-grid > .fw-semibold')
    chooseLessons = "//*[@class=' css-19bb58m']";
    name = "#name";
    surname = "#surname";
    birthPlace = "#birthPlace";
    email = "#email";
    phoneNumber = "#phoneNumber";
    isAdvisorTeacher = "#isAdvisorTeacher";
    genderFemale = "[value='FEMALE']";
    genderMale = "[value='MALE']";
    birthDay = "#birthDay";
    ssn = "#ssn";
    teacherUserName = "#username";
    teacherPassword = "#password";
    teacherSavedPopUp ="body > div:nth-child(2) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"


    // reusable methods- recommended
    clickOnLoginBanner(){
        cy.get(this.loginLink).click()
    }
    setUsername(username){
        cy.get(this.usernameBox).type(username)
    }
    setPassword(password){
        cy.get(this.passwordBox).type(password)
    }

    clickOnLoginButton(){
        cy.get(this.loginLinkButton).click()
    }
    clickOnMenu(){
        cy.get(this.menuButton).click({force: true })
    }
    clickOnTeacherManagementButton(){
        cy.get(this.teacherManagementButton).click()
    }
    chooseLessonsDropDown(chooseLessons){
        cy.xpath(this.chooseLessons).click({ force: true }).type('C#{enter}');
    }
    enterTeacherName(name){
        cy.get(this.name).type(name, { force: true })
    } 
    enterTeacherSurName(surname){
        cy.get(this.surname).type(surname, { force: true })
    }

    enterBirthPlace(birthplace){
        cy.get(this.birthPlace).type(birthplace)
    }
    enterEmail(email){
        cy.get(this.email).type(email)
    }

    enterPhone(phone){
        cy.get(this.phoneNumber).type(phone)
    }
    isAdvisorTeacherCheckbox(){
        cy.get(this.isAdvisorTeacher).click()
    }

    enterTeacherGender(gender){
        if(gender=="female"){
        cy.get(this.genderFemale).click()
        }else{
            cy.get(this.genderMale).click()
        }
    }
    enterBirthDay(birthday){
        cy.get(this.birthDay).type(birthday)
    }
   
    enterSSN(ssn){
        cy.get(this.ssn).type(ssn)
    }
    teacherUserNameEnter(teacherUserName){
        cy.get(this.teacherUserName).type(teacherUserName)
    }
    enterTeacherPassword(teacherPassword){
        cy.get(this.teacherPassword).type(teacherPassword)
    }
    clickOnTeacherSubmit(){
        cy.get(this.teacherSubmit).click()
    }
    verifyTeacherRegistration(){
        cy.get(this.teacherSavedPopUp).should('be.visible')
    }
    verifyTeacherNameIsLeftBlank() {
        cy.get(this.name).should('have.value', '')
    }
    verifyTeacherSurNameIsLeftBlank() {
        cy.get(this.surname).should('have.value', '')
    }
    verifyTeacherBirthPlaceIsLeftBlank() {
        cy.get(this.birthPlace).should('have.value', '')
    }
    verifyTeacherEmailIsLeftBlank() {
        cy.get(this.email).should('have.value', '')
    }
    verifyTeacherPhoneIsLeftBlank() {
        cy.get(this.phoneNumber).should('have.value', '')
    }

    verifyTeacherIsAdvisorTeacherIsLeftBlank() {
        cy.get(this.isAdvisorTeacher).should('not.be.checked')
    }
    verifyTeacherGenderIsLeftBlank() {
        cy.get(this.genderFemale).should('not.be.checked')
        cy.get(this.genderMale).should('not.be.checked')
    }
    verifyDateOfBirthLeftBlank() {
        cy.get(this.birthDay).should('have.value', '')
    }

    verifySSNLeftBlank() {
        cy.get(this.ssn).should('have.value', '')
    }
    verifyUserNameLeftBlank() {
        cy.get(this.teacherUserName).should('have.value', '')
    }
    verifyUserPasswordLeftBlank() {
        cy.get(this.teacherPassword).should('have.value', '')
    }

}
export const vicedeanteachercreatepage = new viceDeanTeacherCreatePages()