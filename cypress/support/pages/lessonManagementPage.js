class LessonManagementPage{
    constructor(){
        this.lessonButton= '#controlled-tab-example-tab-lessonsList'
        this.lessonName= '#lessonName'
        this.compulsoryCheckbox= '#compulsory'
        this.creditScore= '#creditScore'
        this.submitButton= '#controlled-tab-example-tabpane-lessonsList > :nth-child(2) > .mb-5 > :nth-child(1) > .card-body > form > .row > .mx-auto > div > .fw-semibold'
        
    }

    clickLessonButton(lessonButton){
        cy.get(this.lessonButton).click()
    }
    writeLessonName(Name){
        cy.get(this.lessonName).type(Name)
    }
    clickCompulsoryCeckbox(){
        cy.get(this.compulsoryCheckbox).click()
    }
    writeCreditScore(Score){
        cy.get(this.creditScore).type(Score)
    }
    clickSubmitButton(){
        cy.get(this.submitButton).click()
    }



}



export const lessonManagementPage = new LessonManagementPage()