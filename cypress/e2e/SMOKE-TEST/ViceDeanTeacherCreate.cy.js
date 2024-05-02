const { faker } = require("@faker-js/faker");
import { loginPage } from "../../support/pages/loginPage";
import { vicedeanHomePage } from "../../support/pages/vicedean_home_page";
import { vicedeanMenu } from "../../support/pages/vicedean_menu_page";
import{ teacherManagement } from "../../support/pages/teacherManagementPage";
import { editTeacherPage } from "../../support/pages/editTeacherPage";
describe('US_14 Vice Dean öğretmenleri görebilmeli ve güncelleme yapabilmelidir.', () => {
 
  let name= faker.person.firstName();
  let email =faker.internet.email();
  let password= faker.internet.password();
  let surname="Potter"
  let birthPlace="Hogwarts"
  let fakeSSN=generateFakeSSN();
  let vicedeanlogindata 
  let phoneNumber=generateFakePhone();
  let birthDay="1960-01-10";
  function generateFakePhone() {
    const randomNumber = () => Math.floor(Math.random() * 10);
    return `${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;
  }
  function generateFakeSSN() {
    return Array.from({length: 9}, () => Math.floor(Math.random() * 10))
                .join('')
                .replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3");
}
  before(() => {
  
    cy.fixture('vicedeanlogindata').then((data) => {
      vicedeanlogindata = data
    })
});
beforeEach(() => {
   cy.visit('/');
   loginPage.clickLoginIcon();
   loginPage.writeUserName(vicedeanlogindata.userName);
   loginPage.writePassword(vicedeanlogindata.password);
   loginPage.clickLoginButton();
});
 
  
  it('US_14_TC_01 Oluşturulan öğretmenin Name, Phone Number, SSN, User Name bilgileri görülebilmeli', ()=> {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
  })
      
   vicedeanHomePage.clickMenuButton();
   vicedeanMenu.clickTeacherManagement();
   cy.wait(2000);
   teacherManagement.clickSelectlesson();
   cy.wait(2000);
   teacherManagement.writeName(name);
   teacherManagement.writeSurname(surname);
   teacherManagement.writeBirthPlace(birthPlace);
   teacherManagement.writeEmail(email);
   teacherManagement.writePhoneNumber(phoneNumber);
   teacherManagement.clickisAdvisorTeacher();
   teacherManagement.selectGender();
   teacherManagement.writeDoB(birthDay);
   teacherManagement.writeSsn(fakeSSN);
   teacherManagement.writeUsername(name);
   teacherManagement.writePassword(password + 1);
   teacherManagement.clickSubmitButton();
   teacherManagement.clickLastPage();
   teacherManagement.nameAssertion();
   teacherManagement.phoneAssertion();
   teacherManagement.ssnAssertion();
   teacherManagement.usernameAssertion();
});
})