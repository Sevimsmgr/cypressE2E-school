import { faker } from "@faker-js/faker";
import { register } from "../../support/pages/registerPage";




describe('US01-E2E test', () => {
    let credsData;
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
      cy.fixture("creds").then((data) => {
        credsData = data;
      });
  
    });
  
    beforeEach(() => {
      cy.visit('/' + Cypress.env('register'));
    });
  
    it('US01-UI Test', () => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false
      })
  
      register.writeRegisterName(registerData.Name)
      register.writeRegisterNachname(registerData.Surname)
      register.writeRegisterGeburtsOrt(registerData.Birth_Place)
      register.writeRegisterTelefon(registerData.Phone)
      register.writeRegisterGschlechtclick(registerData.Gender)
      register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
      register.writeRegisterSSN(registerData.Ssn)
      register.writeRegisterNutzername(registerData.User_Name)
      register.writeRegisterPasswort(registerData.Password)
      register.clickRegisterButton()
  
    })
  
    it("US01-API test", () => {
      cy.generateToken(credsData[0].username, credsData[0].password).then(
        (token)=>{
            cy.request( {
                method:"GET",
                url:credsData[0].getURL,
                headers:{
                    Authorization: `${token}`,
                },
                }).then((response)=>{
                    expect(response.status).to.eq(200);
                    console.log(response.body);
                    expect(response.body.content[7].username).to.eq(registerData.User_Name)
                    expect(response.body.content[7].name).to.eq(registerData.Name)
                    expect(response.body.content[7].phoneNumber).to.eq(registerData.Phone)
                    expect(response.body.content[7].password).to.eq(registerData.password)
                    expect(response.body.content[7].surname).to.eq(registerData.Surname)
                    expect(response.body.content[7].gender).to.eq(registerData.GenderMale)
                     

                       } );
                         
        })
        
});



it('US01-DATABASE test', () => {
  const expectedGuest={
      Ssn:'612-96-4026',
      Name:'Yagmur',
      Surname:'Yuksel',
      Date_Of_Birth:'1989-12-01',
      Birth_Place:'Ingolstadt'

      
  }
  cy.task('connectDB',"select*from guest_user where ssn='612-96-4026'").then((data)=>{
      console.log(data)


  expect(expectedGuest.Name).to.be.equal(data.rows[0].name);
  expect(expectedGuest.Birth_Place).to.be.equal(data.rows[0].birth_place);
  expect(expectedGuest.Surname).to.be.equal(data.rows[0].surname);
  expect(expectedGuest.Surname).to.be.equal(data.rows[0].surname);
  expect(expectedGuest.Ssn).to.be.equal(data.rows[0].ssn);


});
})
  })
