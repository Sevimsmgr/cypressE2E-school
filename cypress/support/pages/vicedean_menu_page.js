class ViceDeanMenu{
    constructor(){
      this.TeacherManagement="//*[.='Teacher Management']"  
    
}

clickTeacherManagement(TeacherManagement) {
    cy.xpath(this.TeacherManagement).click();
}
}
export const vicedeanMenu= new ViceDeanMenu()