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
    it('US22_UI TEST', () => {
        
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
      
  
          
    }) 
    it('US22-API TEST', ()=> {
   
        cy.generateToken(loginData.AdminUsername,loginData.AdminPassword).then(
             (token) => {
             console.log(token)
       
             cy.request( {
               method:"GET",
               url:addadmindata.getUrl,
               headers:{
                   Authorization: `${token}`,
               },
               }).then((response)=>{
                   expect(response.status).to.eq(200);
                   console.log(response.body);
                   
                   expect(response.body.content[response.body.content.length - 1]).to.have.property(
                       "username"
                     ); 
                     expect(response.body.content[response.body.content.length - 1]).to.have.property(
                       "ssn"
                     ); 
                      expect(response.body.content[response.body.content.length - 1]).to.have.property(
                       "name"
                     ); 
                      expect(response.body.content[response.body.content.length - 1]).to.have.property(
                       "surname"
                     );
                       expect(response.body.content[response.body.content.length - 1]).to.have.property(
                       "birthDay"
                     ); 
                      expect(response.body.content[response.body.content.length - 1]).to.have.property(
                       "birthPlace"
                     ); 
                      expect(response.body.content[response.body.content.length - 1]).to.have.property(
                       "phoneNumber"
                     ); 
                      expect(response.body.content[response.body.content.length - 1]).to.have.property(
                       "gender"
                     ); 
                     expect(response.body.content[response.body.content.length - 1]).to.have.property(
                       "built_in"
                     ); 
       
                       } );

                        
       });
})
 it('US22-DATABASE TEST', () => {
        cy.task('connectDB',"select*from admins").then((data)=>{
            console.log(data)
        
        })
    
   

        const expectedAddAdmin = {
            id: '2080',
            birth_day: '2000-12-31T23:00:00.000Z',
            birth_place: "Meram",
            gender: 1,
            name:"Admin",
            password:"$2a$10$FZ6TX.BrWpxmv.q14.EVp.0HVJ8AVZ6Wb1oQhNn8hZaEMy.ujNaDO",
            phone_number:"176-567-8987",
            ssn:"890-34-6765",
            surname:"Cemre",
            username:"AdminCemre",
            build_in:"false",
            user_role_id:1


        }

        cy.task('connectDB', "select * from admins where id='2080'").then((data) => {
        console.log(data)
            expect(expectedAddAdmin.id).to.be.equal(data.rows[0].id);
            expect(expectedAddAdmin.birth_day).to.be.equal(data.rows[0].birth_day);
            expect(expectedAddAdmin.birth_place).to.be.equal(data.rows[0].birth_place);
            expect(expectedAddAdmin.gender).to.be.equal(data.rows[0].gender);
            expect(expectedAddAdmin.name).to.be.equal(data.rows[0].name);
            expect(expectedAddAdmin.password).to.be.equal(data.rows[0].password);
            expect(expectedAddAdmin.phone_number).to.be.equal(data.rows[0].phone_number);
            expect(expectedAddAdmin.ssn).to.be.equal(data.rows[0].ssn);
            expect(expectedAddAdmin.surname).to.be.equal(data.rows[0].surname);
            expect(expectedAddAdmin.username).to.be.equal(data.rows[0].username);
            expect(expectedAddAdmin.user_role_id).to.be.equal(data.rows[0].user_role_id);
            

});
});
});
