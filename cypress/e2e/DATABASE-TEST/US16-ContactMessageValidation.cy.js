describe('US16-contact_message Validation', () => {

    
    it('ContactMessage List Dogrulama', () => {
        cy.task('connectDB',"select*from contact_message").then((data)=>{
            console.log(data)
        
        })
    })
    it('Test1', () => {

        const expectedContactMesage = {
            id: '3383',
            date: '2024-02-27T23:00:00.000Z',
            email: 'frkdrm.28@yandex.com',
            message: "ersatgfqae5tq4w35tz6qwe45tertw",
            name:"asdrfsfgs",
            subject:"asrfdarftgaerd"
        }

        cy.task('connectDB', "select * from contact_message where id='3383'").then((data) => {
        console.log(data)
            expect(expectedContactMesage.id).to.be.equal(data.rows[0].id);
            expect(expectedContactMesage.date).to.be.equal(data.rows[0].date);
            expect(expectedContactMesage.email).to.be.equal(data.rows[0].email);
            expect(expectedContactMesage.message).to.be.equal(data.rows[0].message);
            expect(expectedContactMesage.name).to.be.equal(data.rows[0].name);
            expect(expectedContactMesage.subject).to.be.equal(data.rows[0].subject);


        })
        
    });

});