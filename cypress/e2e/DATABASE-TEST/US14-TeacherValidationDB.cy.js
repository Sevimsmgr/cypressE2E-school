const { expect } = require("chai");

describe("Teacher Validation DB", () => {
    let vicedeanlogindata 
    before(() => {
      
      cy.fixture("vicedeanlogindata").then((data) => {
        vicedeanlogindata = data;
      });
    });
    it("teacher validation db test", () => {
      cy.task("connectDB", "SELECT * FROM teacher WHERE surname = 'Potter';").then((data) => {
       
        console.log(data);
        const teacherInfo=data.rows[0]
        expect(teacherInfo).to.have.property('name','Zena')
        expect(teacherInfo).to.have.property('surname','Potter')
        expect(teacherInfo).to.have.property('birth_place','Hogwarts')

      });
    });
  });