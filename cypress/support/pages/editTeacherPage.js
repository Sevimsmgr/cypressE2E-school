class EditTeacherPage {

    constructor() {
        this.chooseLesson='.ms-4 > .card-body > form > :nth-child(1) > .col-lg-4 > .css-b62m3t-container > .css-13cymwt-control > .css-hlgwow > .css-19bb58m'
        this.name='.ms-4 > .card-body > form > :nth-child(1) > :nth-child(2) > .mb-4 > #name'
        this.isAdvisorCheckBox='.ms-4 > .card-body > form > :nth-child(2) > .pt-4.col > .form-check > #isAdvisorTeacher'
        this.genderOption='.ms-4 > .card-body > form > :nth-child(2) > .text-center > .row > :nth-child(2) > .form-check > .form-check-input'
        this.userName="//div[@role='dialog']//div[3]//div[2]//div[1]//input[1]"
        this.password='.ms-4 > .card-body > form > :nth-child(3) > :nth-child(3) > .mb-4 > #password'
        this.submitButton= '.modal-footer > .fw-semibold'
        this.updatedMessage='.Toastify__toast-body > :nth-child(2)'
        this.closeEditMenu='.modal-header > .btn-close'

    }
    clickChooseLesson() {
        cy.wait(1000)
        cy.get(this.chooseLesson).click({force: true}).type('Transfiguration{enter}').wait(2000);
    }
    changeName(name) {
        cy.get(this.name).clear().type(name);
    }
    checkIsAdvisor(isAdvisorCheckBox) {
        cy.get(this.isAdvisorCheckBox).click(isAdvisorCheckBox);
    }

    checkGender(genderOption) {
        cy.get(this.genderOption).check(genderOption);
    }
    changeUserName(name) {
        cy.xpath(this.userName).clear().type(name);
        
    }
    changePassword(password) {
        cy.get(this.password).clear().type(password);
    }
    clickSubmitButton() {
        cy.get(this.submitButton).click({force: true});
        cy.wait(3000);
        cy.get(this.updatedMessage).should('contain', 'Teacher updated Successful');
    }

    clickcloseEditMenu(closeEditMenu) {
        cy.get(this.closeEditMenu).click(closeEditMenu);
    }


   
}

export const editTeacherPage = new EditTeacherPage()