describe('US22 AddAdmin Validation', () => {

    
    it('Admins List Validation', () => {
        cy.task('connectDB',"select*from admins").then((data)=>{
            console.log(data)
        
        })
    })
    it('Test1', () => {

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
            

            


        })
        
    });

});