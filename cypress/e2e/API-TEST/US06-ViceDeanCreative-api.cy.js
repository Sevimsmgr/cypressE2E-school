const { faker } = require("@faker-js/faker");

describe('Vice Dean Ekleme', () => {
 
    
    let loginData
    let addvicedeandata
    let fakeSSN = generateFakeSSN();
    let fakephoneNumber = generateFakePhone();
   
    let fakeUsername;
    let fakeSurname;
    let credsdata;

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
     
      cy.fixture('vice_dean_management_register_data').then((data) => {
            addvicedeandata = data
        })
        cy.fixture('creds').then((data) => {
            credsdata = data
        })
        
      
    });

 
  it('US06_TC01 Tüm alanlar geçerli verilerle doldurulduğunda dean yeni vicedean ekleyebilmelidir', ()=> {
    

    cy.generateToken(loginData.DeanUsername,loginData.DeanPassword).as(
        "authToken"
    );
    cy.get("@authToken").then((authToken) => {
        const vicedeanData = {
            birthDay: addvicedeandata.dateOfBirth,
            birthPlace: addvicedeandata.birhtPlace,
            built_in: addvicedeandata.built_in,
            gender: addvicedeandata.gender,
            name: addvicedeandata.name,
            password: addvicedeandata.password,
            phoneNumber: fakephoneNumber,
            ssn: fakeSSN,
            surname: fakeSurname,
            username: fakeUsername,  
        };
      cy.addVicedean(authToken,vicedeanData);
       
    }); 
  
});
it('US06_TC02 addVicedean Validation', ()=> {
   
    cy.generateToken(loginData.DeanUsername,loginData.DeanPassword).then(
      (token) => {
      console.log(token)

      cy.request( {
        method:"GET",
        url:credsdata[1].getURL,
        headers:{
            Authorization: `${token}`,
        },
        }).then((response)=>{
            expect(response.status).to.eq(200);
            console.log(response.body);
            
            expect(response.body[response.body.length - 1]).to.have.property(
                "username"
              ); 
              expect(response.body[response.body.length - 1]).to.have.property(
                "ssn"
              ); 
               expect(response.body[response.body.length - 1]).to.have.property(
                "name"
              ); 
               expect(response.body[response.body.length - 1]).to.have.property(
                "surname"
              );
                expect(response.body[response.body.length - 1]).to.have.property(
                "birthDay"
              ); 
               expect(response.body[response.body.length - 1]).to.have.property(
                "birthPlace"
              ); 
               expect(response.body[response.body.length - 1]).to.have.property(
                "phoneNumber"
              ); 
               expect(response.body[response.body.length - 1]).to.have.property(
                "gender"
              ); 
             

                } );
                 
});

});
});





