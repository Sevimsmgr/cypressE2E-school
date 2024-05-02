const { faker } = require("@faker-js/faker");
import { loginPage } from "../../support/pages/loginPage";
import { vicedeanHomePage } from "../../support/pages/vicedean_home_page";
import { vicedeanMenu } from "../../support/pages/vicedean_menu_page";
import{ teacherManagement } from "../../support/pages/teacherManagementPage";
import { editTeacherPage } from "../../support/pages/editTeacherPage";
describe('US14-E2E Test', () => {
 
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
  })


  it('US14-UI Test', () => {
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
  
})

  it('US14-API Test', ()=> {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    //token olustur
    cy.generateToken(vicedeanlogindata.userName, vicedeanlogindata.password).then(
      (token) => {
      console.log(token)

      cy.request({
        method: "GET",
        url: "https://managementonschools.com/app/teachers/getSavedTeacherById/5339",
        headers: {
          Authorization:`${token}`,
        },
      }).then((response) => {

        expect(response.status).to.eq(200)
        console.log(response.body);
        cy.log(JSON.stringify(response.body));
        expect(response.statusText).to.eq("OK");
        expect(response.headers["content-type"]).to.include("application/json");
        expect(response.body.message).to.eq("Teacher successfully found");
        expect(response.body.object.id).to.eq(5339);
        expect(response.body.object.surname).to.eq("Sprout")
        expect(response.body.object.phoneNumber).to.eq("123-345-6789")        
        expect(response.body.object.ssn).to.eq("456-56-9876")
      });
    })
  });
  it('US14-DB Test', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.task("connectDB", "SELECT * FROM teacher WHERE surname = 'Potter';").then((data) => {
       
        console.log(data);
        const teacherInfo=data.rows[0]
        expect(teacherInfo).to.have.property('name','Zena')
        expect(teacherInfo).to.have.property('surname','Potter')
        expect(teacherInfo).to.have.property('birth_place','Hogwarts')

      });
    
      
  });


      
})