import { lessonManagementPage } from "../../support/pages/lessonManagementPage";
import { loginPage } from "../../support/pages/loginPage";


describe('Vice Dean ders olusturabilmeli', () => {
    let viceDeanLoginData
    let lessonData

    before(() => {
    cy.fixture('vice_dean_login_data').then((data) => {
        viceDeanLoginData = data
    });

    cy.fixture('lesson_data').then((data)=>{
        lessonData = data
    })
});
    beforeEach(() => {
        cy.visit('/' );
});
it('Vice Dean ders olusturmali', () => {
    cy.visit('/')
      loginPage.clickLoginIcon()
      loginPage.writeUserName(viceDeanLoginData.userName)
          loginPage.writePassword(viceDeanLoginData.passwordInput)
          loginPage.clickLoginButton()

           lessonManagementPage.clickLessonButton()
           lessonManagementPage.writeLessonName(lessonData.lessonName)
           lessonManagementPage.clickCompulsoryCeckbox()
           lessonManagementPage.writeCreditScore(lessonData.creditScore)
           lessonManagementPage.clickSubmitButton()


});
});