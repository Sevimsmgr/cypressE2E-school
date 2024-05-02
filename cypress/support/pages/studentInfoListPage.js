class StudentInfoListPage {
    constructor() {
        this.lessonName = ':nth-child(1) > .mb-5 > .card-body > .table-responsive > .table > .table-group-divider > :nth-child(1) > :nth-child(1)'
        this.absentee = ':nth-child(1) > .mb-5 > .card-body > .table-responsive > .table > .table-group-divider > :nth-child(1) > :nth-child(2)'
        this.midterm = ':nth-child(1) > .mb-5 > .card-body > .table-responsive > .table > .table-group-divider > :nth-child(1) > :nth-child(3)'
        this.final = ':nth-child(1) > .mb-5 > .card-body > .table-responsive > .table > .table-group-divider > :nth-child(1) > :nth-child(4)'
        this.note='thead > tr > :nth-child(5)'
        this.infoNote=":nth-child(1) > :nth-child(6) > span"
        this.average=":nth-child(1) > :nth-child(7) > span"
        this.MeetListDate=':nth-child(2) > .mb-5 > .card-body > .table-responsive > .table > .table-group-divider > :nth-child(1) > :nth-child(1)'
        this.MeetListStartTime=':nth-child(2) > .mb-5 > .card-body > .table-responsive > .table > .table-group-divider > :nth-child(1) > :nth-child(2)'
        this.MeetListStopTime=':nth-child(2) > .mb-5 > .card-body > .table-responsive > .table > .table-group-divider > :nth-child(1) > :nth-child(3)'
        this.MeetListDescription=':nth-child(2) > .mb-5 > .card-body > .table-responsive > .table > .table-group-divider > :nth-child(1) > :nth-child(4)'
        }



    lessonvisibility(lessonName) {
        cy.get(this.lessonName).should('be.visible', lessonName)
    }

    absenteevisibility(absentee) {
        cy.get(this.absentee).should('be.visible', absentee)
    }
    midtermvisibility(midterm) {
        cy.get(this.midterm).should('be.visible', midterm)
    }
    finalvisibility(final) {
        cy.get(this.final).should('be.visible', final)
    }
    notevisibility(note) {
        cy.get(this.note).should('be.visible', note)
    }
    infoNotevisibility(infoNote) {
        cy.get(this.infoNote).should('be.visible', infoNote)
    }
    averagevisibility(average) {
        cy.get(this.average).should('be.visible', average)
    }
    MeetListDatevisibility(MeetListDate) {
        cy.get(this.MeetListDate).should('be.visible', MeetListDate)
    }
    MeetListStartTimevisibility(MeetListStartTime) {
        cy.get(this.MeetListStartTime).should('be.visible', MeetListStartTime)
    }
    MeetListStopTimevisibility(MeetListStopTime) {
        cy.get(this.MeetListStopTime).should('be.visible', MeetListStopTime)
    }
    MeetListDescriptionvisibility(MeetListDescription) {
        cy.get(this.MeetListDescription).should('be.visible', MeetListDescription)
    }


}
export const studentInfoList = new StudentInfoListPage()
