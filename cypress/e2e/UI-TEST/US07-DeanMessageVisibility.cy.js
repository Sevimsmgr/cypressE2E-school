const { contactMessagePage } = require("../../support/pages/contactMessagePage");
const { homePage } = require("../../support/pages/homePage");
const {loginPage } = require("../../support/pages/loginPage");


describe('Dean kullanicilarin gönderdiği mesajlari görebilmelidir', () => {
    let deanLoginData
  
    before(() => {
        cy.fixture('dean_login_data').then((data) => {
            deanLoginData = data
        })
       
    });
  
    beforeEach(() => {
        cy.visit('/' );
    });
    it('Dean mesajlari, yazarlarini, e-maillerini, gönderilme tarihi ve  subject bilgilerini görüntüleyebilmelidir', () => {
      cy.visit('/')
      loginPage.clickLoginIcon()
      loginPage.writeUserName(deanLoginData.userName)
          loginPage.writePassword(deanLoginData.passwordInput)
          loginPage.clickLoginButton();
          homePage.clickMenuButton();
          homePage.clickContactGetAllButton2();
          contactMessagePage.verifyMessageName();
          contactMessagePage.verifyMessageEmail();
          contactMessagePage.verifyMessageDate();
          contactMessagePage.verifyMessageSubject();
          contactMessagePage.verifyMessageDetails();
         
  
          
    })})