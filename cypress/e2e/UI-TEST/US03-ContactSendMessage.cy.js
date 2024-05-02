
const { contactPage } = require("../../support/pages/contactPage");
const { loginPage } = require("../../support/pages/loginPage");

//import { loginPage } from "../support/pages/loginPage";

describe('Kullanicilar sayfadan mesaj gönderebilmeli', () => {
    let loginData
    let contactMessageData
    
    before(() => {
        // cy.fixture('login_data').then((data) => {
        //     loginData = data
        // })

        cy.fixture('contact_message_data').then((data)=>{
            contactMessageData = data
        })
       
    });

    beforeEach(() => {
        cy.visit('/' ); 
        // loginPage.clickLoginButton1()
        // loginPage.writeUserName(loginData.userName)
        //     loginPage.writePassword(loginData.passwordInput)
        //     loginPage.clickLoginButton2();
    });
    it('Kullancilar Contact den Mesaj gönderebilmeli', () => {
        
        contactPage.clickContactButton()
        contactPage.writeUserName(contactMessageData.userName)
        contactPage.writeUserEmail(contactMessageData.userEmail)
        contactPage.writeUserSubject(contactMessageData.userSubject)
        contactPage.writeUserMessageDetails(contactMessageData.userMessageDetails)

        contactPage.clickSendButton()
          
    })
    
})