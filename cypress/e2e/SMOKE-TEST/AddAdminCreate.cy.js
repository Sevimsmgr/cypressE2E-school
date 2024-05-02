const { adminManagement } = require("../../support/pages/adminManagementPage");
const {loginPage } = require("../../support/pages/loginPage");
const { faker } = require("@faker-js/faker");
describe('Admin Ekleme', () => {
   let adminManagementData
   let loginData
   
   let addadmindata
   let fakeSSN = generateFakeSSN();
   let fakephoneNumber = generateFakePhone();
  
   let fakeUsername;
   let fakeSurname;

   fakeUsername = faker.person.firstName();
fakeSurname = faker.person.firstName();

   function generateFakeSSN() {
       return Array.from({ length: 9 }, () => Math.floor(Math.random() * 10))
           .join('')
           .replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3");
   }

   function generateFakePhone() {
       const randomNumber = () => Math.floor(Math.random() * 10);
       return `${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;
   }
   
    before(() => {
        cy.fixture('login_data').then((data) => {
            loginData = data
        })
       
        cy.fixture('admin_management_data').then((data) => {
            adminManagementData = data
        })

        cy.fixture('add_admin_data').then((data) => {
            addadmindata = data
        })
    
       
    });
  
    beforeEach(() => {
          cy.visit('/')
          loginPage.clickLoginIcon()
          loginPage.writeUserName(loginData.AdminUsername)
          loginPage.writePassword(loginData.AdminPassword)
          loginPage.clickLoginButton();
      });
    it('US22_TC01 Tüm alanlar geçerli verilerle doldurulduğunda admin yeni admin ekleyebilmelidir', () => {
        
    adminManagement.writeName(adminManagementData.name)
    adminManagement.writeSurname(fakeSurname)
    adminManagement.writeBirthPlace(adminManagementData.birthPlace)
    adminManagement.clickGender(adminManagementData.gender)
    adminManagement.writeDateOf(adminManagementData.dateOfBirth)
    adminManagement.writePhone(fakephoneNumber)
    adminManagement.writeSsn(fakeSSN)
    adminManagement.writeUserName(fakeUsername)
    adminManagement.writePassword(adminManagementData.password)
    adminManagement.clickSubmitButton()
    adminManagement.verifySubmitSaveMessage(adminManagementData.submitSaveMessage)
      
  
          
    }) ;
})