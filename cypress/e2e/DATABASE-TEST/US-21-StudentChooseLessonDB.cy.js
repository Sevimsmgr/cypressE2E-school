const { expect } = require("chai");

describe('US_21 Students, choose lesson, grades and announcement', () => {
  let studentlogindata

  before(() => {
    cy.fixture('studentlogindata').then((data) => {
        studentlogindata = data
     })
  });
    it('US_21_TC_01 Lesson program Validation', () => {
       
      cy.task("connectDB", "SELECT * FROM lesson_program WHERE id = 3962;").then((data) => {
        console.log(data)
        const lesson_programInfo=data.rows[0]
        expect(lesson_programInfo).to.have.property('day','MONDAY')
        expect(lesson_programInfo).to.have.property('start_time','12:30:00')
        expect(lesson_programInfo).to.have.property('stop_time','15:30:00')   
    
      })        
    });
    it('US_21_TC_02 Toplantı görüntüleme', () => {
      cy.task("connectDB", "select* from meet where id in (select meet_id from meet_Student_table where student_id =3258)").then((data) => {
        console.log(data)
        const meetInfo=data.rows[0]
        expect(meetInfo).to.have.property('date','2024-03-24T21:00:00.000Z')
        expect(meetInfo).to.have.property('description','You Know Who')
        expect(meetInfo).to.have.property('start_time','16:00:00')
        expect(meetInfo).to.have.property('stop_time','17:00:00')
        
      })  
        
    });
});