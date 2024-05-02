register

import { faker } from "@faker-js/faker";
import { register } from "../../support/pages/registerPage";




describe('US01-TC01-Aday ogrenciler sisteme kayit olabilmelidir.', () => {
  let registerData
  let fakeName
  let fakeSurname
  let fakePhoneNumber = generateFakePhone()
  let fakessn = generateFakeSSN()
  function generateFakeSSN() {
    return Array.from({ length: 9 }, () => Math.floor(Math.random() * 10))
      .join('')
      .replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3")
  }

  function generateFakePhone() {
    const randomNumber = () => Math.floor(Math.random() * 10);
    return `${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;
  }


  before(() => {
    cy.fixture('register-data').then((data) => {
      registerData = data
      fakeName = faker.person.firstName()
      //fakeNachname=faker.name.lastName()
      fakeSurname = faker.person.lastName()

    })

  });

  beforeEach(() => {
    cy.visit('/' + Cypress.env('register'));
  });

  it.only('US01-TC01-Aday ogrenciler sisteme kayit olabilmelidir.', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    register.writeRegisterName(registerData.Name)
    register.writeRegisterNachname(registerData.Surname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(registerData.Ssn)
    register.writeRegisterNutzername(registerData.User_Name)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()

  })

  it('US01-TC02-Aday ogrenci olusturma.(name alani bos birakilamaz.)', () => {


    register.writeBosUsername(registerData.Bosname)
    register.writeRegisterNachname(fakeSurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(fakessn)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()
    register.verifyZorunluAlanMessage(registerData.requiredZorunluAlanMessage)
  });


  it('US01-TC03-Aday ogrenci olusturma.(nachname  alani bos birakilamaz.)', () => {


    register.writeRegisterName(fakeName)
    register.writeBosSurname(registerData.Bossurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(fakessn)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.Password)
    // register.clickRegisterButton()
    register.verifyBosSurNameErrorMessage(registerData.requiredBosSurnamemessage)
  });


  it('US01-TC04-Aday ogrenci olsturma.(Birth Place alani bos birakilamaz.)', () => {


    register.writeRegisterName(fakeName)
    register.writeRegisterNachname(fakeSurname)
    register.writeBosBirthPlace(registerData.BosBirtPlace)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(fakessn)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()
    //register.verifyZorunluAlanMessage(registerData.requiredZorunluAlanMessage)
    register.verifyBosSurNameErrorMessage(registerData.requiredBosSurnamemessage)
  });



  it('US01-TC05-Aday ogrenci olusturma.(Telefon numarasi bos olamaz))', () => {


    register.writeRegisterName(fakeName)
    register.writeRegisterNachname(fakeSurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(registerData.BosTelefon)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(fakessn)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()
    register.verifyZorunluAlanMessage(registerData.requiredZorunluAlanMessage)
  });


  it('US01-TC06-Aday ogrenci olusturma.(kullanici 11 haneli telefonnumber girer', () => {


    register.writeRegisterName(fakeName)
    register.writeRegisterNachname(fakeSurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(registerData.Telefononbirkarakter)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(fakessn)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()
    register.verifytelefonHataMessage(registerData.requiredtelefonmessage)
  });



  it('US01-TC07-Aday ogrenci olusturma.(kullanici 13 haneli telefonnumber girer', () => {


    register.writeRegisterName(fakeName)
    register.writeRegisterNachname(fakeSurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(registerData.Telefononuckarakter)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(fakessn)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()
    register.verifytelefonFazlaKarakterHataMessage(registerData.RequiredTelefonFazlaKarakterMessage)
  });


  it('US01-TC08-Aday ogrenci olusturma.(SSN bos olamaz', () => {


    register.writeRegisterName(fakeName)
    register.writeRegisterNachname(fakeSurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(registerData.BosSsn)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()
    register.verifyZorunluAlanMessage(registerData.requiredZorunluAlanMessage)
  });


  it('US01-TC09-Aday ogrenci olusturma.(Ssn alanina 10 karakter girilir', () => {


    register.writeRegisterName(fakeName)
    register.writeRegisterNachname(fakeSurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(registerData.SsnOnKarakter)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()
    register.verifySsnOnbirkarakterHatamessage(registerData.RequiredSSnOnbirkarakterhatamesaji)
  });


  it('US01-TC10-Aday ogrenci olusturma.(Ssn alanina 12 karakter girilir', () => {


    register.writeRegisterName(fakeName)
    register.writeRegisterNachname(fakeSurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(registerData.SsnOnikiKarakter)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()
    register.verifySsnOnIkiKarakterHatamesaji(registerData.RequiredSsnOnIkiKarakterHatamesaji)
  });

  it('US01-TC11-Aday ogrenci olusturma.(User Name alani bos birakilamaz)', () => {
    register.writeRegisterName(fakeName)
    register.writeRegisterNachname(fakeSurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(fakessn)
    register.writeRegisterNutzername(registerData.BosUserName)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()
    register.verifyBosUserNameErrorMessage(registerData.requiredBosUserNamemessage)
  });



  it('US01-TC12-Aday ogrenci olusturma.(Password alani bos birakilamaz.)', () => {


    register.writeRegisterName(fakeName)
    register.writeRegisterNachname(fakeSurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(fakessn)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.BosPassword)
    register.clickRegisterButton()
    register.verifyZorunluAlanMessage(registerData.requiredZorunluAlanMessage)

  });


  it('US01-TC13-Aday ogrenci olusturma.(Password 8 karakterden az olmamali)', () => {


    register.writeRegisterName(fakeName)
    register.writeRegisterNachname(fakeSurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(fakessn)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.PasswordYediKarakter)
    register.clickRegisterButton()
    register.verifyPasswortYediKarakter(registerData.PasswordRequireduyariyazisiKarakterSayisi)

  });


  it('US01-TC14-Aday ogrenci olusturma.(Password farkli karakterlerden olusmali)', () => {


    register.writeRegisterName(fakeName)
    register.writeRegisterNachname(fakeSurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(fakessn)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.PasswortAyniTipKarakter)
    register.clickRegisterButton()
    register.VerifyPasswortAyniTipKarakter(registerData.PasswortAyniTipKarakterUyariMessage)

  });


  it('Aday ogrenci olusturma(kullanici guncel tarihi dogum tarihi olarak giremez', () => {


    register.writeRegisterName(fakeName)
    register.writeRegisterNachname(fakeSurname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(fakePhoneNumber)
    register.writeRegisterGschlechtclick(registerData.Gender)
    register.writeRegisterGeburtsdatum(registerData.DogumYIliIleriTarih)
    register.writeRegisterSSN(fakessn)
    register.writeRegisterNutzername(fakeName)
    register.writeRegisterPasswort(registerData.Password)
    register.clickandverifyErrorMessageDogumyili()

  });

})





