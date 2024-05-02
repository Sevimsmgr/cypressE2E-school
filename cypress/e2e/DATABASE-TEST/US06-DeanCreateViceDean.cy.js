describe('US06 Dean Creative Vicedean Validation', () => {


    it('ViceDean List Validation', () => {
      
        cy.task('connectDB',"select*from vice_dean").then((data)=>{
            console.log(data)
        
        })
    });
  

      it("vicedean validation db test", () => {

    const expectedvicedean = {
 
name: "Kübra",
surName:"Tanribuyurdu",
dateOfBirth: "2000-10-09T22:00:00.000Z",
phone: "577-146-6140",
birhtPlace:"Istanbul",
gender: 1,
password: "Kubraa_48@",
ssn:"434-66-9099",
userName:"Vicedean",

    }

        cy.task("connectDB", "SELECT * FROM vice_dean WHERE ssn = '434-66-9099' ").then((data) => {
         
          console.log(data);
 
          expect(expectedvicedean.name).to.be.equal(data.rows[0].name);
          expect(expectedvicedean.surName).to.be.equal(data.rows[0].surname);
          expect(expectedvicedean.dateOfBirth).to.be.equal(data.rows[0].birth_day);
          expect(expectedvicedean.phone).to.be.equal(data.rows[0].phone_number);
          expect(expectedvicedean.birhtPlace).to.be.equal(data.rows[0].birth_place);
          expect(expectedvicedean.gender).to.be.equal(data.rows[0].gender);
          expect(expectedvicedean.userName).to.be.equal(data.rows[0].username);

         // expect(expectedvicedean.).to.have.property('surname','Tanribuyurdu')
        
  
  
        });
      });


})
