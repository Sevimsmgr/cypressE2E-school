describe("User Creation", () => {
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
  
    it("create admin", () => {
      cy.generateToken(credsData[0].username, credsData[0].password).as(
        "authToken"
      );
  
      cy.get("@authToken").then((authToken) => {
        // Prepare quest data
        const guestData = {
          birthDay:registerData.Date_Of_Birth,
          birthPlace:registerData.Birth_Place,
          gender:registerData.GenderMale,
          name:registerData.Name,
          password:registerData.Password,
          phoneNumber:registerData.Phone,
          ssn:registerData.Ssn,
          surname:registerData.Surname,
          username:registerData.User_Name,
        };
  
        cy.addGuest(authToken, guestData);
      });
    });
  });
  