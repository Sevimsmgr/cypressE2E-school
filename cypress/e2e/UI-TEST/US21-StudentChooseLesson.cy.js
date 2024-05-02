import { loginPage } from "../../support/pages/loginPage";
import { studentChooseLesson } from "../../support/pages/studentChooseLessonPage";
import { studentMainMenu } from "../../support/pages/studentMainMenuPage";
import { studentInfoList } from "../../support/pages/studentInfoListPage";
describe('US_21 Students, choose lesson, grades and announcement', () => {
    let studentlogindata
    before(() => {
  
        cy.fixture('studentlogindata').then((data) => {
            studentlogindata = data
        })
    });
    beforeEach(() => {
      cy.visit('/');
      loginPage.clickLoginIcon();
        loginPage.writeUserName(studentlogindata.userName);
        loginPage.writePassword(studentlogindata.password);
        loginPage.clickLoginButton();
    });
    it('US_21_TC_01 Öğrenci Choose Lesson listesinde; Teacher, Day, Start Time ve Stop Time bilgilerini görebilmeli', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        
        studentChooseLesson.verifyLessonName();
        studentChooseLesson.verifyTeacherName();
        studentChooseLesson.verifyDay();
        studentChooseLesson.verifyStartTime();
        studentChooseLesson.verifyStopTime();
      
    });
    it("US_21_TC_02 Öğrenci İstediği ders veya dersleri seçebilmeli Seçtiği dersleri Lesson Program List’te görebilmeli", () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        studentChooseLesson.selectMoreThanOneLesson();
      
    });
    it('US_21_TC_03 Aynı gün ve saate denk gelen dersleri seçememeli', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        studentChooseLesson.selectLesson();
        studentChooseLesson.clickSubmitandverifyMessage();
        
        
    });
    it.only('US_21_TC_05 Öğrenci, danışmanın kendisi için oluşturduğu toplantıları görebilmelidir', ()=> {
       
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        studentChooseLesson.clickMenuButton();
        studentMainMenu.clickGradesAndAnnouncements();
        studentInfoList.MeetListDatevisibility();
        studentInfoList.MeetListStartTimevisibility();
        studentInfoList.MeetListStopTimevisibility();
        studentInfoList.MeetListDescriptionvisibility();
    });
    it('US_21_TC_06 Öğrenci sınav notlarını görebilmeli', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        studentChooseLesson.clickMenuButton();
        studentMainMenu.clickGradesAndAnnouncements();
        studentInfoList.lessonvisibility();
        studentInfoList.absenteevisibility();
        studentInfoList.midtermvisibility();
        studentInfoList.finalvisibility();
        studentInfoList.notevisibility();
        studentInfoList.infoNotevisibility();
        studentInfoList.averagevisibility();
       
    });
});