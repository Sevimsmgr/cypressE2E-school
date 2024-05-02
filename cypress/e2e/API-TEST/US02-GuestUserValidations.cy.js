describe("guest user validation", () => {
    let credsData;
    let registerData;

    before(() => {
      cy.fixture("creds").then((data) => {
        credsData = data;
      });
      // register datalari
      cy.fixture("register-data").then((data) => {
        registerData = data;
      });
    });
  
    beforeEach(() => {
      //her bir it blogundan once bir kez yapmak istediklerimiz yazilacak
    });
  
    it("GelAll GuestUser", () => {
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
                         
        }
      )
        
});



        
      });
    
    