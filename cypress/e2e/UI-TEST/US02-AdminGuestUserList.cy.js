
homePage
adminManagement
import { faker } from "@faker-js/faker";
import { adminManagement } from "../../support/pages/UI-PAGES/adminManagementPage";
import { GuestPage } from "../../support/pages/UI-PAGES/guestUserListPage";
import { homePage } from "../../support/pages/UI-PAGES/homePage";
import { loginPage } from "../../support/pages/UI-PAGES/loginPage";
import { register } from "../../support/pages/UI-PAGES/registerPage";
faker
register
loginPage
GuestPage

describe('Dean Guest User List, Name, Phone Number, SSN, User Name bilgilerini görebilmeli', () => {
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
    cy.fixture('dean_guest_user').then((data) => {
      questData = data

    })
    cy.fixture('register-data').then((data) => {
      registerData = data
      fakeName = faker.person.firstName()
      fakeSurname = faker.person.lastName()

    })



  });

  beforeEach(() => {
    // cy.visit('/' + Cypress.env('login'));
    // cy.visit('/' + Cypress.env('guest'));
    cy.visit('/' + Cypress.env('register'));
  });
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
  it.only('US02-TC02-Admin Guest User List bilgilerini silebilmeli...', () => {
    //  adminManagement.deleteGuestUser()


    register.writeRegisterName(fakeName)
    register.writeRegisterNachname(fakeSurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(fakessn)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()
    cy.wait(4000)
    cy.visit('/' + Cypress.env('login'));
    loginPage.clickLoginIcon()
    loginPage.writeUserName(questData.DeanUserName)
    loginPage.writePassword(questData.DeanPassword)
    loginPage.clickLoginButton()
    homePage.clickMenuButton()
    homePage.clickGastBenutzerButton()



  });


});