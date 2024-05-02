import { vicedeanteachercreatepage } from "../support/pages/viceDeanTeacherCreatePage";
describe('Teacher Creation with Vice DEAN', () => {
  let createTeacherWithDean;
  let register_dataTeacher;
  
  before(() => {
      cy.fixture("createTeacherWithDean").then((data) => {
        createTeacherWithDean = data;
      })
    cy.fixture("register_dataTeacher").then((data) => {
      register_dataTeacher = data;
    })
  });
    beforeEach(() => {
      cy.visit('/');
      vicedeanteachercreatepage.clickOnLoginBanner()
      vicedeanteachercreatepage.setUsername(createTeacherWithDean.username)
      vicedeanteachercreatepage.setPassword(createTeacherWithDean.password)
      vicedeanteachercreatepage.clickOnLoginButton()
    });
    
    it('Creating teachers with dean successfully', () => {
      
      vicedeanteachercreatepage.clickOnMenu()
      vicedeanteachercreatepage.clickOnTeacherManagementButton()
      vicedeanteachercreatepage.chooseLessonsDropDown(register_dataTeacher[0].chooseLesson)
      vicedeanteachercreatepage.enterTeacherName(register_dataTeacher[0].teacherName)
      vicedeanteachercreatepage.enterTeacherSurName(register_dataTeacher[0].teacherSurname)
      vicedeanteachercreatepage.enterBirthPlace(register_dataTeacher[0].birthPlace)
      vicedeanteachercreatepage.enterEmail(register_dataTeacher[0].email)
      vicedeanteachercreatepage.enterPhone(register_dataTeacher[0].phone)
      vicedeanteachercreatepage.isAdvisorTeacherCheckbox()
      vicedeanteachercreatepage.enterTeacherGender(register_dataTeacher[0].gender)
      vicedeanteachercreatepage.enterBirthDay(register_dataTeacher[0].dateOfBirth)
      vicedeanteachercreatepage.enterSSN(register_dataTeacher[0].ssn)
      vicedeanteachercreatepage.teacherUserNameEnter(register_dataTeacher[0].username)
      vicedeanteachercreatepage.enterTeacherPassword(register_dataTeacher[0].password)
      vicedeanteachercreatepage.clickOnTeacherSubmit()
      vicedeanteachercreatepage.verifyTeacherRegistration()
    });
  it('Teacher cannot be created, name field is left blank', () => {
      
      vicedeanteachercreatepage.clickOnMenu()
      vicedeanteachercreatepage.clickOnTeacherManagementButton()
      vicedeanteachercreatepage.chooseLessonsDropDown(register_dataTeacher[0].chooseLesson)
      //vicedeanteachercreatepage.enterTeacherName(register_dataTeacher[0].teacherName)
      vicedeanteachercreatepage.enterTeacherSurName(register_dataTeacher[0].teacherSurname)
      vicedeanteachercreatepage.enterBirthPlace(register_dataTeacher[0].birthPlace)
      vicedeanteachercreatepage.enterEmail(register_dataTeacher[0].email)
      vicedeanteachercreatepage.enterPhone(register_dataTeacher[0].phone)
      vicedeanteachercreatepage.isAdvisorTeacherCheckbox()
      vicedeanteachercreatepage.enterTeacherGender(register_dataTeacher[0].gender)
      vicedeanteachercreatepage.enterBirthDay(register_dataTeacher[0].dateOfBirth)
      vicedeanteachercreatepage.enterSSN(register_dataTeacher[0].ssn)
      vicedeanteachercreatepage.teacherUserNameEnter(register_dataTeacher[0].username)
      vicedeanteachercreatepage.enterTeacherPassword(register_dataTeacher[0].password)
      vicedeanteachercreatepage.verifyTeacherNameIsLeftBlank()
  });
  
  it('Teacher cannot be created, surname field is left blank', () => {
      
    vicedeanteachercreatepage.clickOnMenu()
    vicedeanteachercreatepage.clickOnTeacherManagementButton()
    vicedeanteachercreatepage.chooseLessonsDropDown(register_dataTeacher[0].chooseLesson)
    vicedeanteachercreatepage.enterTeacherName(register_dataTeacher[0].teacherName)
    //vicedeanteachercreatepage.enterTeacherSurName(register_dataTeacher[0].teacherSurname)
    vicedeanteachercreatepage.enterBirthPlace(register_dataTeacher[0].birthPlace)
    vicedeanteachercreatepage.enterEmail(register_dataTeacher[0].email)
    vicedeanteachercreatepage.enterPhone(register_dataTeacher[0].phone)
    vicedeanteachercreatepage.isAdvisorTeacherCheckbox()
    vicedeanteachercreatepage.enterTeacherGender(register_dataTeacher[0].gender)
    vicedeanteachercreatepage.enterBirthDay(register_dataTeacher[0].dateOfBirth)
    vicedeanteachercreatepage.enterSSN(register_dataTeacher[0].ssn)
    vicedeanteachercreatepage.teacherUserNameEnter(register_dataTeacher[0].username)
    vicedeanteachercreatepage.enterTeacherPassword(register_dataTeacher[0].password)
    vicedeanteachercreatepage.verifyTeacherSurNameIsLeftBlank()
  });

  it('Teacher cannot be created, birth place field is left blank', () => {
      
    vicedeanteachercreatepage.clickOnMenu()
    vicedeanteachercreatepage.clickOnTeacherManagementButton()
    vicedeanteachercreatepage.chooseLessonsDropDown(register_dataTeacher[0].chooseLesson)
    vicedeanteachercreatepage.enterTeacherName(register_dataTeacher[0].teacherName)
    vicedeanteachercreatepage.enterTeacherSurName(register_dataTeacher[0].teacherSurname)
    //vicedeanteachercreatepage.enterBirthPlace(register_dataTeacher[0].birthPlace)
    vicedeanteachercreatepage.enterEmail(register_dataTeacher[0].email)
    vicedeanteachercreatepage.enterPhone(register_dataTeacher[0].phone)
    vicedeanteachercreatepage.isAdvisorTeacherCheckbox()
    vicedeanteachercreatepage.enterTeacherGender(register_dataTeacher[0].gender)
    vicedeanteachercreatepage.enterBirthDay(register_dataTeacher[0].dateOfBirth)
    vicedeanteachercreatepage.enterSSN(register_dataTeacher[0].ssn)
    vicedeanteachercreatepage.teacherUserNameEnter(register_dataTeacher[0].username)
    vicedeanteachercreatepage.enterTeacherPassword(register_dataTeacher[0].password)
    vicedeanteachercreatepage.verifyTeacherBirthPlaceIsLeftBlank()
  });

  it('Teacher cannot be created, email field is left blank', () => {
      
    vicedeanteachercreatepage.clickOnMenu()
    vicedeanteachercreatepage.clickOnTeacherManagementButton()
    vicedeanteachercreatepage.chooseLessonsDropDown(register_dataTeacher[0].chooseLesson)
    vicedeanteachercreatepage.enterTeacherName(register_dataTeacher[0].teacherName)
    vicedeanteachercreatepage.enterTeacherSurName(register_dataTeacher[0].teacherSurname)
    vicedeanteachercreatepage.enterBirthPlace(register_dataTeacher[0].birthPlace)
    //vicedeanteachercreatepage.enterEmail(register_dataTeacher[0].email)
    vicedeanteachercreatepage.enterPhone(register_dataTeacher[0].phone)
    vicedeanteachercreatepage.isAdvisorTeacherCheckbox()
    vicedeanteachercreatepage.enterTeacherGender(register_dataTeacher[0].gender)
    vicedeanteachercreatepage.enterBirthDay(register_dataTeacher[0].dateOfBirth)
    vicedeanteachercreatepage.enterSSN(register_dataTeacher[0].ssn)
    vicedeanteachercreatepage.teacherUserNameEnter(register_dataTeacher[0].username)
    vicedeanteachercreatepage.enterTeacherPassword(register_dataTeacher[0].password)
    vicedeanteachercreatepage.verifyTeacherEmailIsLeftBlank()
  });

  it('Teacher cannot be created, phone field is left blank', () => {
      
    vicedeanteachercreatepage.clickOnMenu()
    vicedeanteachercreatepage.clickOnTeacherManagementButton()
    vicedeanteachercreatepage.chooseLessonsDropDown(register_dataTeacher[0].chooseLesson)
    vicedeanteachercreatepage.enterTeacherName(register_dataTeacher[0].teacherName)
    vicedeanteachercreatepage.enterTeacherSurName(register_dataTeacher[0].teacherSurname)
    vicedeanteachercreatepage.enterBirthPlace(register_dataTeacher[0].birthPlace)
    vicedeanteachercreatepage.enterEmail(register_dataTeacher[0].email)
    //vicedeanteachercreatepage.enterPhone(register_dataTeacher[0].phone)
    vicedeanteachercreatepage.isAdvisorTeacherCheckbox()
    vicedeanteachercreatepage.enterTeacherGender(register_dataTeacher[0].gender)
    vicedeanteachercreatepage.enterBirthDay(register_dataTeacher[0].dateOfBirth)
    vicedeanteachercreatepage.enterSSN(register_dataTeacher[0].ssn)
    vicedeanteachercreatepage.teacherUserNameEnter(register_dataTeacher[0].username)
    vicedeanteachercreatepage.enterTeacherPassword(register_dataTeacher[0].password)
    vicedeanteachercreatepage.verifyTeacherPhoneIsLeftBlank()
  });

  it('Teacher cannot be created, is advisor teacher  field is left blank', () => {
      
    vicedeanteachercreatepage.clickOnMenu()
    vicedeanteachercreatepage.clickOnTeacherManagementButton()
    vicedeanteachercreatepage.chooseLessonsDropDown(register_dataTeacher[0].chooseLesson)
    vicedeanteachercreatepage.enterTeacherName(register_dataTeacher[0].teacherName)
    vicedeanteachercreatepage.enterTeacherSurName(register_dataTeacher[0].teacherSurname)
    vicedeanteachercreatepage.enterBirthPlace(register_dataTeacher[0].birthPlace)
    vicedeanteachercreatepage.enterEmail(register_dataTeacher[0].email)
    vicedeanteachercreatepage.enterPhone(register_dataTeacher[0].phone)
    //vicedeanteachercreatepage.isAdvisorTeacherCheckbox()
    vicedeanteachercreatepage.enterDeanGender(register_dataTeacher[0].gender)
    vicedeanteachercreatepage.enterBirthDay(register_dataTeacher[0].dateOfBirth)
    vicedeanteachercreatepage.enterSSN(register_dataTeacher[0].ssn)
    vicedeanteachercreatepage.teacherUserNameEnter(register_dataTeacher[0].username)
    vicedeanteachercreatepage.enterTeacherPassword(register_dataTeacher[0].password)
    vicedeanteachercreatepage.verifyTeacherIsAdvisorTeacherIsLeftBlank()
  });


  it('Teacher cannot be created, gender  field is left blank', () => {
      
    vicedeanteachercreatepage.clickOnMenu()
    vicedeanteachercreatepage.clickOnTeacherManagementButton()
    vicedeanteachercreatepage.chooseLessonsDropDown(register_dataTeacher[0].chooseLesson)
    vicedeanteachercreatepage.enterTeacherName(register_dataTeacher[0].teacherName)
    vicedeanteachercreatepage.enterTeacherSurName(register_dataTeacher[0].teacherSurname)
    vicedeanteachercreatepage.enterBirthPlace(register_dataTeacher[0].birthPlace)
    vicedeanteachercreatepage.enterEmail(register_dataTeacher[0].email)
    vicedeanteachercreatepage.enterPhone(register_dataTeacher[0].phone)
    vicedeanteachercreatepage.isAdvisorTeacherCheckbox()
    //vicedeanteachercreatepage.enterTeacherGender(register_dataTeacher[0].gender)
    vicedeanteachercreatepage.enterBirthDay(register_dataTeacher[0].dateOfBirth)
    vicedeanteachercreatepage.enterSSN(register_dataTeacher[0].ssn)
    vicedeanteachercreatepage.teacherUserNameEnter(register_dataTeacher[0].username)
    vicedeanteachercreatepage.enterTeacherPassword(register_dataTeacher[0].password)
    vicedeanteachercreatepage.verifyTeacherGenderIsLeftBlank()
  });

  it('Teacher cannot be created, Date Of Birth  field is left blank', () => {
      
    vicedeanteachercreatepage.clickOnMenu()
    vicedeanteachercreatepage.clickOnTeacherManagementButton()
    vicedeanteachercreatepage.chooseLessonsDropDown(register_dataTeacher[0].chooseLesson)
    vicedeanteachercreatepage.enterTeacherName(register_dataTeacher[0].teacherName)
    vicedeanteachercreatepage.enterTeacherSurName(register_dataTeacher[0].teacherSurname)
    vicedeanteachercreatepage.enterBirthPlace(register_dataTeacher[0].birthPlace)
    vicedeanteachercreatepage.enterEmail(register_dataTeacher[0].email)
    vicedeanteachercreatepage.enterPhone(register_dataTeacher[0].phone)
    vicedeanteachercreatepage.isAdvisorTeacherCheckbox()
    vicedeanteachercreatepage.enterTeacherGender(register_dataTeacher[0].gender)
    //vicedeanteachercreatepage.enterBirthDay(register_dataTeacher[0].dateOfBirth)
    vicedeanteachercreatepage.enterSSN(register_dataTeacher[0].ssn)
    vicedeanteachercreatepage.teacherUserNameEnter(register_dataTeacher[0].username)
    vicedeanteachercreatepage.enterTeacherPassword(register_dataTeacher[0].password)
    vicedeanteachercreatepage.verifyDateOfBirthLeftBlank()
  });

  it('Teacher cannot be created, SSN  field is left blank', () => {
      
    vicedeanteachercreatepage.clickOnMenu()
    vicedeanteachercreatepage.clickOnTeacherManagementButton()
    vicedeanteachercreatepage.chooseLessonsDropDown(register_dataTeacher[0].chooseLesson)
    vicedeanteachercreatepage.enterTeacherName(register_dataTeacher[0].teacherName)
    vicedeanteachercreatepage.enterTeacherSurName(register_dataTeacher[0].teacherSurname)
    vicedeanteachercreatepage.enterBirthPlace(register_dataTeacher[0].birthPlace)
    vicedeanteachercreatepage.enterEmail(register_dataTeacher[0].email)
    vicedeanteachercreatepage.enterPhone(register_dataTeacher[0].phone)
    vicedeanteachercreatepage.isAdvisorTeacherCheckbox()
    vicedeanteachercreatepage.enterTeacherGender(register_dataTeacher[0].gender)
    vicedeanteachercreatepage.enterBirthDay(register_dataTeacher[0].dateOfBirth)
    //vicedeanteachercreatepage.enterSSN(register_dataTeacher[0].ssn)
    vicedeanteachercreatepage.teacherUserNameEnter(register_dataTeacher[0].username)
    vicedeanteachercreatepage.enterTeacherPassword(register_dataTeacher[0].password)
    vicedeanteachercreatepage.verifySSNLeftBlank()
  });

  it('Teacher cannot be created, Username  field is left blank', () => {
      
    vicedeanteachercreatepage.clickOnMenu()
    vicedeanteachercreatepage.clickOnTeacherManagementButton()
    vicedeanteachercreatepage.chooseLessonsDropDown(register_dataTeacher[0].chooseLesson)
    vicedeanteachercreatepage.enterTeacherName(register_dataTeacher[0].teacherName)
    vicedeanteachercreatepage.enterTeacherSurName(register_dataTeacher[0].teacherSurname)
    vicedeanteachercreatepage.enterBirthPlace(register_dataTeacher[0].birthPlace)
    vicedeanteachercreatepage.enterEmail(register_dataTeacher[0].email)
    vicedeanteachercreatepage.enterPhone(register_dataTeacher[0].phone)
    vicedeanteachercreatepage.isAdvisorTeacherCheckbox()
    vicedeanteachercreatepage.enterTeacherGender(register_dataTeacher[0].gender)
    vicedeanteachercreatepage.enterBirthDay(register_dataTeacher[0].dateOfBirth)
    vicedeanteachercreatepage.enterSSN(register_dataTeacher[0].ssn)
    //vicedeanteachercreatepage.teacherUserNameEnter(register_dataTeacher[0].username)
    vicedeanteachercreatepage.enterTeacherPassword(register_dataTeacher[0].password)
    vicedeanteachercreatepage.verifyUserNameLeftBlank()
  });


  it('Teacher cannot be created, User Password  field is left blank', () => {
      
    vicedeanteachercreatepage.clickOnMenu()
    vicedeanteachercreatepage.clickOnTeacherManagementButton()
    vicedeanteachercreatepage.chooseLessonsDropDown(register_dataTeacher[0].chooseLesson)
    vicedeanteachercreatepage.enterTeacherName(register_dataTeacher[0].teacherName)
    vicedeanteachercreatepage.enterTeacherSurName(register_dataTeacher[0].teacherSurname)
    vicedeanteachercreatepage.enterBirthPlace(register_dataTeacher[0].birthPlace)
    vicedeanteachercreatepage.enterEmail(register_dataTeacher[0].email)
    vicedeanteachercreatepage.enterPhone(register_dataTeacher[0].phone)
    vicedeanteachercreatepage.isAdvisorTeacherCheckbox()
    vicedeanteachercreatepage.enterTeacherGender(register_dataTeacher[0].gender)
    vicedeanteachercreatepage.enterBirthDay(register_dataTeacher[0].dateOfBirth)
    vicedeanteachercreatepage.enterSSN(register_dataTeacher[0].ssn)
    vicedeanteachercreatepage.teacherUserNameEnter(register_dataTeacher[0].username)
    //vicedeanteachercreatepage.enterTeacherPassword(register_dataTeacher[0].password)
    vicedeanteachercreatepage.verifyUserPasswordLeftBlank()
  });
})
