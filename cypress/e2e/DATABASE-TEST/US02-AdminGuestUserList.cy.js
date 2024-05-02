describe('US02_GuestUserList', () => {
    
    it('Guest List', () => {
        cy.task('connectDB',"select*from guest_user").then(cy.log)
        
        });
    
    it('Guest Validation', () => {
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
});