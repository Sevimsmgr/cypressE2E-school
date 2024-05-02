describe('US_21 Students, choose lesson, grades and announcement', () => {
  let vicedeanlogindata
  let studentlogindata
  let teacherlogindata
   before(() => {
    cy.fixture('vicedeanlogindata').then((data) => {
        vicedeanlogindata = data
     })  
    cy.fixture('studentlogindata').then((data) => {
        studentlogindata = data
    })  
    cy.fixture('teacherlogindata').then((data) => {
        teacherlogindata = data
    })


    });
    it('US_21_TC_01 Öğrenci Choose Lesson listesinde; Teacher, Day, Start Time ve Stop Time bilgilerini görebilmeli', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
         cy.generateToken(vicedeanlogindata.userName, vicedeanlogindata.password).then(
            (token) => {
            console.log(token)
            cy.request({
                method: "GET",
                url: "https://managementonschools.com/app/lessonPrograms/getById/3962",
                //getByStudentId/3258",
                headers: {
                  Authorization:`${token}`,
                },              
              }).then((response) => {
                expect(response.status).to.eq(200)
                console.log(response.body);
                cy.log(JSON.stringify(response.body));
                expect(response.statusText).to.eq("OK");
                expect(response.headers["content-type"]).to.include("application/json");
                expect(response.body.lessonProgramId).to.eq(3962);
                expect(response.body.startTime).to.eq("12:30:00");
                expect(response.body.stopTime).to.eq("15:30:00");
                expect(response.body.lessonName[0].lessonId).to.eq(4460);
                expect(response.body.lessonName[0].lessonName).to.eq("Muggle Studies");
                expect(response.body.teachers[1].userId).to.eq(5339);
                expect(response.body.day).to.eq("MONDAY");
                });    
            });
      });
      it('US_21_TC_05 Öğrenci danısmanının kendisi için olusturdugu toplantıları görebilmelidir', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false
      })


       cy.generateToken(teacherlogindata.userName, teacherlogindata.password).then(
          (token) => {
          console.log(token)
          cy.request({
              method: "GET",
              url: "https://managementonschools.com/app/meet/getMeetById/2219",
              headers: {
                Authorization:`${token}`,
              },              
      
            }).then((response) => {
              console.log(response.body);
                cy.log(JSON.stringify(response.body));
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK");
                expect(response.headers["content-type"]).to.include("application/json");
                expect(response.body.object.id).to.eq(2219);
                expect(response.body.object.description).to.eq("You Know Who")
                expect(response.body.message).to.eq("Meet successfully found")
                expect(response.body.httpStatus).to.eq("CREATED")

            });    
          });
    });

    
  });    
    

          
    

    