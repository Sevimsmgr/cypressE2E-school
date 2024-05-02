
const { adminManagement } = require("../../support/pages/adminManagementPage");
const {loginPage } = require("../../support/pages/loginPage");
describe('Admin Ekleme', () => {
   let adminManagementData
   let loginData
  
   
    before(() => {
        cy.fixture('login_data').then((data) => {
            loginData = data
        })
       
        cy.fixture('admin_management_data').then((data) => {
            adminManagementData = data
        })
    
       
    });
  
    beforeEach(() => {
          cy.visit('/')
          loginPage.clickLoginIcon()
          loginPage.writeUserName(loginData.AdminUsername)
          loginPage.writePassword(loginData.AdminPassword)
          loginPage.clickLoginButton();
      });
    it('US22_TC01 Tüm alanlar geçerli verilerle doldurulduğunda admin yeni admin ekleyebilmelidir', () => {
        
    adminManagement.writeName(adminManagementData.name)
    adminManagement.writeSurname(adminManagementData.surname)
    adminManagement.writeBirthPlace(adminManagementData.birthPlace)
    adminManagement.clickGender(adminManagementData.gender)
    adminManagement.writeDateOf(adminManagementData.dateOfBirth)
    adminManagement.writePhone(adminManagementData.phone)
    adminManagement.writeSsn(adminManagementData.ssn)
    adminManagement.writeUserName(adminManagementData.userName)
    adminManagement.writePassword(adminManagementData.password)
    adminManagement.clickSubmitButton()
    adminManagement.verifySubmitSaveMessage(adminManagementData.submitSaveMessage)
      
  
          
    })
    it('US22_TC02 Name alani bos birakildiginda yeni admin eklenememelidir', () => {
       
       
    adminManagement.writeName(adminManagementData.bosname)
    adminManagement.writeSurname(adminManagementData.surname)
    adminManagement.writeBirthPlace(adminManagementData.birthPlace)
    adminManagement.clickGender(adminManagementData.gender)
    adminManagement.writeDateOf(adminManagementData.dateOfBirth)
    adminManagement.writePhone(adminManagementData.phone)
    adminManagement.writeSsn(adminManagementData.ssn)
    adminManagement.writeUserName(adminManagementData.userName)
    adminManagement.writePassword(adminManagementData.password)
    adminManagement.clickSubmitButton()
    adminManagement.verifyErrorMessage1(adminManagementData.errorMessage1)
      
              
        })
    
        it('US22_TC03 Surname alani bos birakildiginda yeni admin eklenememelidir', () => {
        
            adminManagement.writeName(adminManagementData.name)
            adminManagement.writeSurname(adminManagementData.bossurname)
            adminManagement.writeBirthPlace(adminManagementData.birthPlace)
            adminManagement.clickGender(adminManagementData.gender)
            adminManagement.writeDateOf(adminManagementData.dateOfBirth)
            adminManagement.writePhone(adminManagementData.phone)
            adminManagement.writeSsn(adminManagementData.ssn)
            adminManagement.writeUserName(adminManagementData.userName)
            adminManagement.writePassword(adminManagementData.password)
            adminManagement.clickSubmitButton()
            adminManagement.verifyErrorMessage2(adminManagementData.errorMessage2)
              
                      
})
it('US22_TC04 Birth Place alani bos birakildiginda yeni admin eklenememelidir', () => {
        
            adminManagement.writeName(adminManagementData.name)
            adminManagement.writeSurname(adminManagementData.surname)
            adminManagement.writeBirthPlace(adminManagementData.bosbirthPlace)
            adminManagement.clickGender(adminManagementData.gender)
            adminManagement.writeDateOf(adminManagementData.dateOfBirth)
            adminManagement.writePhone(adminManagementData.phone)
            adminManagement.writeSsn(adminManagementData.ssn)
            adminManagement.writeUserName(adminManagementData.userName)
            adminManagement.writePassword(adminManagementData.password)
            adminManagement.clickSubmitButton()
            adminManagement.verifyErrorMessage3(adminManagementData.errorMessage3)
              
})
it('US22_TC06 Date Of Birth alani bos birakildiginda yeni admin eklenememelidir', () => {
        
    adminManagement.writeName(adminManagementData.name)
            adminManagement.writeSurname(adminManagementData.surname)
            adminManagement.writeBirthPlace(adminManagementData.birthPlace)
            adminManagement.clickGender(adminManagementData.gender)
            adminManagement.writePhone(adminManagementData.phone)
            adminManagement.writeSsn(adminManagementData.ssn)
            adminManagement.writeUserName(adminManagementData.userName)
            adminManagement.writePassword(adminManagementData.password)
            adminManagement.clickSubmitButton()
            adminManagement.verifyErrorMessage4(adminManagementData.errorMessage4)
})
it('US22_TC07 Phone alani bos birakildiginda yeni admin eklenememelidir', () => {
        
    adminManagement.writeName(adminManagementData.name)
    adminManagement.writeSurname(adminManagementData.surname)
    adminManagement.writeBirthPlace(adminManagementData.birthPlace)
    adminManagement.clickGender(adminManagementData.gender)
    adminManagement.writeDateOf(adminManagementData.dateOfBirth)
    adminManagement.writeSsn(adminManagementData.ssn)
    adminManagement.writeUserName(adminManagementData.userName)
    adminManagement.writePassword(adminManagementData.password)
    adminManagement.clickSubmitButton()
    adminManagement.verifyErrorMessage5(adminManagementData.errorMessage5)
      
})
it('US22_TC08 SSN alani bos birakildiginda yeni admin eklenememelidir', () => {
        
    adminManagement.writeName(adminManagementData.name)
    adminManagement.writeSurname(adminManagementData.surname)
    adminManagement.writeBirthPlace(adminManagementData.birthPlace)
    adminManagement.clickGender(adminManagementData.gender)
    adminManagement.writeDateOf(adminManagementData.dateOfBirth)
    adminManagement.writePhone(adminManagementData.phone)
    adminManagement.writeUserName(adminManagementData.userName)
    adminManagement.writePassword(adminManagementData.password)
    adminManagement.clickSubmitButton()
    adminManagement.verifyErrorMessage6(adminManagementData.errorMessage6)
      
})
it('US22_TC09 User Name bos birakildiginda yeni admin eklenememelidir', () => {
        
    adminManagement.writeName(adminManagementData.name)
    adminManagement.writeSurname(adminManagementData.surname)
    adminManagement.writeBirthPlace(adminManagementData.birthPlace)
    adminManagement.clickGender(adminManagementData.gender)
    adminManagement.writeDateOf(adminManagementData.dateOfBirth)
    adminManagement.writePhone(adminManagementData.phone)
    adminManagement.writeSsn(adminManagementData.ssn)
    adminManagement.writePassword(adminManagementData.password)
    adminManagement.clickSubmitButton()
    adminManagement.verifyErrorMessage7(adminManagementData.errorMessage7)
      
})
it('US22_TC010 Password alani bos birakildiginda yeni admin eklenememelidir', () => {
        
    adminManagement.writeName(adminManagementData.name)
    adminManagement.writeSurname(adminManagementData.surname)
    adminManagement.writeBirthPlace(adminManagementData.birthPlace)
    adminManagement.clickGender(adminManagementData.gender)
    adminManagement.writeDateOf(adminManagementData.dateOfBirth)
    adminManagement.writePhone(adminManagementData.phone)
    adminManagement.writeSsn(adminManagementData.ssn)
    adminManagement.writeUserName(adminManagementData.userName)
    adminManagement.clickSubmitButton()
    adminManagement.verifyErrorMessage8(adminManagementData.errorMessage8)
      
})
it('US22_TC011 invalid ssn girildiginde yeni admin eklenememelidir', () => {
        
    adminManagement.writeName(adminManagementData.name)
    adminManagement.writeSurname(adminManagementData.surname)
    adminManagement.writeBirthPlace(adminManagementData.birthPlace)
    adminManagement.clickGender(adminManagementData.gender)
    adminManagement.writeDateOf(adminManagementData.dateOfBirth)
    adminManagement.writePhone(adminManagementData.phone)
    adminManagement.writeInvalidSSN1(adminManagementData.invalidssn1)
    adminManagement.writeUserName(adminManagementData.userName)
    adminManagement.writePassword(adminManagementData.password)
    adminManagement.clickSubmitButton()
    adminManagement.verifyErrorMessage9(adminManagementData.errorMessage9)
      
})
it('US22_TC012 invalidPassword girildiginde yeni admin eklenememelidir', () => {
        
    adminManagement.writeName(adminManagementData.name)
    adminManagement.writeSurname(adminManagementData.surname)
    adminManagement.writeBirthPlace(adminManagementData.birthPlace)
    adminManagement.clickGender(adminManagementData.gender)
    adminManagement.writeDateOf(adminManagementData.dateOfBirth)
    adminManagement.writePhone(adminManagementData.phone)
    adminManagement.writeSsn(adminManagementData.ssn)
    adminManagement.writeUserName(adminManagementData.userName)
    adminManagement.writeInvalidPassword1(adminManagementData.invalidpassword1)
    adminManagement.clickSubmitButton()
    adminManagement.verifyErrorMessage10(adminManagementData.errorMessage10)
      
})
it('US22_TC013 invalidSSN2 girildiginde yeni admin eklenememelidir', () => {
        
    adminManagement.writeName(adminManagementData.name)
    adminManagement.writeSurname(adminManagementData.surname)
    adminManagement.writeBirthPlace(adminManagementData.birthPlace)
    adminManagement.clickGender(adminManagementData.gender)
    adminManagement.writeDateOf(adminManagementData.dateOfBirth)
    adminManagement.writePhone(adminManagementData.phone)
    adminManagement.writeInvalidSSN2(adminManagementData.ssn)
    adminManagement.writeUserName(adminManagementData.userName)
    adminManagement.writePassword(adminManagementData.password)
    adminManagement.clickSubmitButton()
    adminManagement.verifyInvalidSSN2(adminManagementData.invaliSsnMessage)
      
})
it('US22_TC014 invalidPassword girildiginde yeni admin eklenememelidir', () => {
        
    adminManagement.writeName(adminManagementData.name)
    adminManagement.writeSurname(adminManagementData.surname)
    adminManagement.writeBirthPlace(adminManagementData.birthPlace)
    adminManagement.clickGender(adminManagementData.gender)
    adminManagement.writeDateOf(adminManagementData.dateOfBirth)
    adminManagement.writePhone(adminManagementData.phone)
    adminManagement.writeSsn(adminManagementData.ssn)
    adminManagement.writeUserName(adminManagementData.userName)
    adminManagement.writeInvalidPassword3(adminManagementData.password)
    adminManagement.clickSubmitButton()
    adminManagement.verifyInvalidpassword3(adminManagementData.invaliPasswordMessage)
      
})
})