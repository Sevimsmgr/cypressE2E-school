describe('Connect Database', () => {

    it('Test1', () => {
        cy.task('connectDB',"select*from student").then(cy.log)
        
    });
    
    it('Test2', () => {
        cy.task('connectDB',"select*from student").then((data)=>{
            console.log(data)
            const studentAli=data.rows.find(student=>student.student_number===1000)

            expect(studentAli).to.have.property('name','Ali')
            expect(studentAli).to.have.property('surname','Can')
            expect(studentAli).to.have.property('mother_name','Derya')
        })
            
        })
  it('Validation', () => {
            const expectedStudent={
                ssn:'555-55-555',
                name:'Ali',
                surname:'Can',
                student_number:1000
            }
            cy.task('connectDB',"select*from student where ssn='555-55-5555'").then((data)=>{
                console.log(data)

            expect(expectedStudent.ssn).to.be.equal(data.rows[0].ssn);
            expect(expectedStudent.name).to.be.equal(data.rows[0].name);
            expect(expectedStudent.student_number).to.be.equal(data.rows[0].student_number);
            expect(expectedStudent.surname).to.be.equal(data.rows[0].surname);

        });
    })
  it('Validation-Test02', () => {
            const expectedStudent={
                ssn:'555-55-555',
                name:'Ali',
                surname:'Can',
                student_number:1000
            }
            cy.task('connectDB',"select*from student where ssn='555-55-5555'").then((data)=>{
                console.log(data)

                expect(data.rows[0].ssn).to.eq('555-55-5555')
                expect(data.rows[0].name).to.eq('Ali')
                expect(data.rows[0].surname).to.eq('Can')
                expect(data.rows[0].student_number).to.eq(1000)
            
        });
    });
    

    it('Assert_Dogrulama', () => {
        cy.task('connectDB',"select*from student where ssn='555-55-5555'").then((data)=>{
            console.log(data)
            const student =data.rows[0]

            assert.equal(student.ssn,'555-55-5555','Student SSN is incorrect')
        
    });


        });

        it('Assert-Dogrulama2', () => {
            cy.task('connectDB',"select*from student where ssn='555-55-5555'").then((data)=>{
                console.log(data)

                const student =data.rows[0]
                assert.strictEqual(data.rows[0].ssn,'555-55-5555')
            
        });

    });  
it('Table Names', () => {
    cy.task('connectDB', "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'").then((data) => {
        console.log(data); // Tablo isimlerini içeren veri burada
        // Daha fazla işlem yapabilirsiniz
    });
    
    
});

it('Sutunisimler', () => {
    cy.task('connectDB',"select*from student").then((data)=>{
        console.log(data.fields.map(field=>field.name))

    const expectedColumnNames=['id','birth_day','birth_place','gender']

expect(data.fields.length).to.equal(expectedColumnNames.length)
data.fields.forEach((field, index) => {

    expect((field.name).to.equal(expectedColumnNames[index]));
    
});

});

});



    });
