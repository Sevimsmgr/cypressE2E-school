


import { contactMessagePage } from "../../support/pages/contactMessagePage";
import { homePage } from "../../support/pages/homePage";
import { loginPage } from "../../support/pages/loginPage";



describe('Vice Dean, kullanicilarin gönderdiği mesajlari görebilmelidir', () => {
    let loginData
  
    before(() => {
        cy.fixture('login_data').then((data) => {
            loginData = data
        })
       
    });
  
    beforeEach(() => {
        cy.visit('/' );
    });
    it('Vice Dean, mesajlari, yazarlarini, e-maillerini, gönderilme tarihi ve  subject bilgilerini görüntüleyebilmelidir', () => {
      
          loginPage.clickLoginIcon()
          loginPage.writeUserName(loginData.AdminUsername)
          loginPage.writePassword(loginData.AdminPassword)
          loginPage.clickLoginButton();
          homePage.clickMenuButton();
          homePage.clickContactGetAllButton();
          contactMessagePage.verifyMessageName();
          contactMessagePage.verifyMessageEmail();
          contactMessagePage.verifyMessageDate();
          contactMessagePage.verifyMessageSubject();
          contactMessagePage.verifyMessageDetails();
         
  
          
    })})