const { faker } = require("@faker-js/faker");

describe('Admin Ekleme', () => {
 
    
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
     
      cy.fixture('add_admin_data').then((data) => {
            addadmindata = data
        })
      
    });

 
  it('US22_TC01 Tüm alanlar geçerli verilerle doldurulduğunda admin yeni admin ekleyebilmelidir', ()=> {
    

    cy.generateToken(loginData.AdminUsername,loginData.AdminPassword).as(
        "authToken"
    );
    cy.get("@authToken").then((authToken) => {
        const adminData = {
            birthDay: addadmindata.birthDay,
            birthPlace: addadmindata.birthPlace,
            built_in: addadmindata.built_in,
            gender: addadmindata.gender,
            name: addadmindata.name,
            password: addadmindata.password,
            phoneNumber: fakephoneNumber,
            ssn: fakeSSN,
            surname: fakeSurname,
            username: fakeUsername,  
        };
      cy.addAdmin(authToken,adminData);
       
    }); 
  
});
it('US22_TC02 addAdmin Validation', ()=> {
   
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

});
});





