register

import { faker } from "@faker-js/faker";
import { register } from "../../support/pages/registerPage";
import { loginPage } from "../../support/pages/loginPage";
import { adminManagement } from "../../support/pages/adminManagementPage";





describe('US01-TC01-Aday ogrenciler sisteme kayit olabilmelidir.', () => {
  let questData
  let registerData
  let fakeName
  let fakeSurname
  let fakePhoneNumber = generateFakePhone()
  let fakessn = generateFakeSSN()
  function generateFakeSSN() {
    return Array.from({ length: 9 }, () => Math.floor(Math.random() * 10))
      .join('')
      .replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3")
  }

  function generateFakePhone() {
    const randomNumber = () => Math.floor(Math.random() * 10);
    return `${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;
  }


  before(() => {
    cy.fixture('register-data').then((data) => {
      registerData = data
      fakeName = faker.person.firstName()
      //fakeNachname=faker.name.lastName()
      fakeSurname = faker.person.lastName()
    })
    cy.fixture('dean_guest_user').then((data) => {
        questData = data
      })
    


  });

  beforeEach(() => {
    cy.visit('/' + Cypress.env('register'));
   
  });
 

  it('US01-TC01-Aday ogrenciler sisteme kayit olabilmelidir.', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    register.writeRegisterName(registerData.Name)
    register.writeRegisterNachname(registerData.Surname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(registerData.Ssn)
    register.writeRegisterNutzername(registerData.User_Name)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()

  })
  it('US02-TC01-Admin Guest User List, Name, Phone Number, SSN, User Name bilgilerini görebilmeli', () => {
    loginPage.clickLoginIcon()
    loginPage.writeUserName(questData.DeanUserName)
    loginPage.writePassword(questData.DeanPassword)
    loginPage.clickLoginButton()
    adminManagement.verifyGuestName()
    adminManagement.verifyGuestGender()
    adminManagement.verifyGuestPhone()
    adminManagement.verifyGuestSsn()
    adminManagement.verifyGuestUserName()

  });
  

})





