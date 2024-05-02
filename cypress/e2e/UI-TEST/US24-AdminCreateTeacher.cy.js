import { da } from "@faker-js/faker";
import {teachercreatewithadmin} from "../support/pages/teacherCreateWithAdmin"; 
describe('Teacher Creation with Admin', () => {
  let createTeacherWithAdmin;
  let register_dataAdmin;
  
  before(() => {
      cy.fixture("createTeacherWithAdmin").then((data) => {
        createTeacherWithAdmin = data;
      })
    cy.fixture("register_dataAdmin").then((data) => {
      register_dataAdmin = data;
    })
  });
    beforeEach(() => {
         cy.visit('/');
        teachercreatewithadmin.clickOnLoginBanner()
        teachercreatewithadmin.setUsername(createTeacherWithAdmin.username)
        teachercreatewithadmin.setPassword(createTeacherWithAdmin.password)
        teachercreatewithadmin.clickOnLoginButton()
    });
    it('Teacher Creation with Admin successfully', () => {
      teachercreatewithadmin.clickOnMenu()
      teachercreatewithadmin.clickOnTeacherManagementButton()
      teachercreatewithadmin.chooseLessonsDropDown(register_dataAdmin.chooseLesson)
      teachercreatewithadmin.enterTeacherName(register_dataAdmin.teacherName)
      teachercreatewithadmin.enterTeacherSurName(register_dataAdmin.teacherSurname)
      teachercreatewithadmin.enterBirthPlace(register_dataAdmin.birthPlace)
      teachercreatewithadmin.enterEmail(register_dataAdmin.email)
      teachercreatewithadmin.enterPhone(register_dataAdmin.phone)
      teachercreatewithadmin.enterTeacherGender(register_dataAdmin.gender)
      teachercreatewithadmin.enterBirthDay(register_dataAdmin.dateOfBirth)
      teachercreatewithadmin.enterSSN(register_dataAdmin.ssn)
      teachercreatewithadmin.teacherUserNameEnter(register_dataAdmin.username)
      teachercreatewithadmin.enterTeacherPassword(register_dataAdmin.password)
      teachercreatewithadmin.clickOnTeacherSubmit()
      teachercreatewithadmin.verifyTeacherRegistration()
    });
})
