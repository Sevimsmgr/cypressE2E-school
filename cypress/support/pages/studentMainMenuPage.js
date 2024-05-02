class StudentMainMenuPage {
    constructor() {
        this.gradesAndAnnouncements = "//a[.='Grades and Announcements']"
    }

    clickGradesAndAnnouncements(gradesAndAnnouncements) {
        cy.xpath(this.gradesAndAnnouncements).click(gradesAndAnnouncements)
    }
    
}
export const studentMainMenu = new StudentMainMenuPage()