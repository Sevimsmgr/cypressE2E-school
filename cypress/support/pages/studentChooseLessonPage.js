class StudentChooseLessonPage {
    constructor() {
        this.lessonNAme = "//tbody/tr[5]/td[2]/span[1]"
        this.teacherName="//tbody/tr[5]/td[3]/span[1]"
        this.day="//tbody/tr[5]/td[4]/span[1]"
        this.startTime="//tbody/tr[5]/td[5]/span[1]"
        this.stopTime="//tbody/tr[5]/td[6]/span[1]"
        this.selectLessonCheckBox="//tbody/tr[11]/td[1]/span[1]/div[1]/input[1]"
        this.submitButton=".pb-3 > .fw-semibold"
        this.Message='.Toastify__toast-body > :nth-child(2)'
        this.lesson1=":nth-child(13) > :nth-child(1) > span > div > #lessonProgramId"
        this.lesson2=":nth-child(14) > :nth-child(1) > span > div > #lessonProgramId"
        this.menuButton=".navbar > .fw-semibold"
        
    }

    verifyLessonName(lessonName) {
        cy.xpath(this.lessonNAme).should('be.visible', lessonName)
    }
    verifyTeacherName(teacherName) {
        cy.xpath(this.teacherName).should('be.visible', teacherName)
    }
    verifyDay(day) {
        cy.xpath(this.day).should('be.visible', day)
    }
    verifyStartTime(startTime) {
        cy.xpath(this.startTime).should('be.visible', startTime)
    }
    verifyStopTime(stopTime) {
        cy.xpath(this.stopTime).should('be.visible', stopTime)
    }

    selectLesson(selectLessonCheckBox){
        cy.xpath(this.selectLessonCheckBox).click(selectLessonCheckBox);
    }
    clickSubmitandverifyMessage(submitButton){
        cy.get(this.submitButton).click(submitButton);
        cy.wait(2000);
        cy.get(this.Message).should('contain', 'Error: Course schedule cannot be selected for the same hour and day')
    }

    selectMoreThanOneLesson(lesson1,lesson2) {
        cy.get(this.lesson1).check(lesson1);
        cy.get(this.lesson2).check(lesson2);
        cy.get(this.submitButton).click();
    }

    clickMenuButton(menuButton) {
        cy.get(this.menuButton).click(menuButton);
    }

   
}
export const studentChooseLesson = new StudentChooseLessonPage()