import { ne } from "@faker-js/faker";

class teacherCreateWithAdmin{
    loginLink = "a[href='/login']";
    menuButton = "button[class='fw-semibold text-white bg-primary navbar-toggler collapsed']";
    teacherManagementButton = "body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > a:nth-child(5)";
    usernameBox = "#username";
    passwordBox = "#password";
    loginLinkButton = "[class='fw-semibold btn btn-primary']";
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
    teacherSubmit = "[class='fw-semibold btn btn-primary btn-lg']";
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
        cy.get(this.menuButton).click()
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
    
}
export const teachercreatewithadmin = new teacherCreateWithAdmin()