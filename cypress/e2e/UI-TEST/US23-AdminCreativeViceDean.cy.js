const { loginPage } = require("../../support/pages/UI-PAGES/loginPage");
const { viceDeanManagementPage } = require("../../support/pages/UI-PAGES/viceDeanManagementPage");
const { faker } = require("@faker-js/faker");
describe('Dean Login Test Suite', () => {
    let fakeSSN = generateFakeSSN();
    let fakephoneNumber = generateFakePhone();
    let loginData;
    let viceDeanData;
    let fakeUsername;

    fakeUsername = faker.person.firstName();

    function generateFakeSSN() {
        return Array.from({ length: 9 }, () => Math.floor(Math.random() * 10))
            .join('')
            .replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3");
    }

    function generateFakePhone() {
        const randomNumber = () => Math.floor(Math.random() * 10);
        return `${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;
    }




    before(() => {
        cy.fixture('login_data').then((data) => {
            loginData = data;
        });
        cy.fixture('vice_dean_management_register_data').then((data) => {
            viceDeanData = data;
        });
    });

    beforeEach(() => {
        cy.visit('/');
        loginPage.clickLoginIcon();
        loginPage.writeUserName(loginData.AdminUsername);
        loginPage.writePassword(loginData.AdminPassword);
        loginPage.clickLoginButton();
        cy.wait(2000);
        viceDeanManagementPage.clickMenubutton();
        cy.wait(2000);
        viceDeanManagementPage.clickVicedeanManagement();


    });

    it.only('TC01 - Positive test for Vice Dean Management Page', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();

        viceDeanManagementPage.visibleViceDeanSaved(viceDeanData.viceDeanSaved);
    });

    it('TC02 - Vicedean ekleme_Name alani bos birakilamaz', () => {


        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton()
        viceDeanManagementPage.visibleRequiredMessage(viceDeanData.errorMessage);

    });
    it('TC03 -  Vicedean ekleme_Name alani bos birakilamaz(bos karakter)', () => {

        viceDeanManagementPage.writeName("   ");
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage();
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage2);






    });
    it('TC04 -Vicedean ekleme_Name alani bos birakilamaz(rakam,nokta)', () => {

        viceDeanManagementPage.writeName("9,.");
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton()
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage2);


    });
    it('TC05 - Vicedean ekleme_SurName alani bos birakilamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);

        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleRequiredMessage(viceDeanData.errorMessage);

    });
    it('TC06 - Vicedean ekleme_SurName alani bos birakilamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName("   ");
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage3);


    });
    it('TC07 - Vicedean ekleme_SurName alani bos birakilamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName("9,.");
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage3);
    });
    it('TC08 - Vicedean ekleme_BirthPlace alani bos birakilamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);

        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleRequiredMessage(viceDeanData.errorMessage);

    });
    it('TC09 - Vicedean ekleme_BirthPlace alani bos birakilamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace("   ");
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage4);

    });


    it('TC10 - Vicedean ekleme_BirthPlace alani bos birakilamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(".,8");
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage5);

    });
    it('TC11 - Vicedean ekleme_Gender alani bos birakilamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);

        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        viceDeanManagementPage.visibleRequiredMessage(viceDeanData.errorMessage);




    });
    it('TC12- ViceDean  ekleme_Dogumtarihi bos birakilamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);

        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        viceDeanManagementPage.visibleRequiredMessage(viceDeanData.errorMessage);
    });

    it('TC13-ViceDean  ekleme_Dogumtarihi bos birakilamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth("0001-10-10");
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage6);


    });

    it('TC14- ViceDean  ekleme_Phone number bos birakilamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);

        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleRequiredMessage(viceDeanData.errorMessage);
    });
    it('TC015 - ViceDean  ekleme_Phone number bos birakilamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber("   -   -    ");
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton()
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage6);


    });
    it('TC016 - PViceDean  ekleme_Phone number bos birakilamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber("abc-bvc-mkjh")
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage6);
    }); it('TC017 - ViceDean  ekleme_SSN number bos birakilamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);

        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleRequiredMessage(viceDeanData.errorMessage);

    });

    it('TC018 - ViceDean Ekleme_SSN girilmelidir. SSN; 2. ve 5. rakamdan sonra "-" içermeli ve 9 rakamdan oluşmalıdır', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn("22-233-6785");
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage7);



    });



    it('TC019 - ViceDean Ekleme_SSN girilmelidir. SSN; 4. ve 5. rakamdan sonra "-" içermeli ve 9 rakamdan oluşmalıdır', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn("2223-3-6780");
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage7);


    });

    it('TC020 - ViceDean Ekleme_SSN girilmelidir. SSN; 3. ve 4. rakamdan sonra "-" içermeli ve 9 rakamdan oluşmalıdır', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn("222-3-36785");
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage7);


    });



    it('TC021 - ViceDean Ekleme_SSN girilmelidir. SSN; 3. ve 6. rakamdan sonra "-" içermeli ve 9 rakamdan oluşmalıdır', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn("222-336-785");
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage7);



    });
    it('TC022 - ViceDean Ekleme_SSN girilmelidir. SSN; 3. ve 5. rakamdan sonra "-" içermeli ve 8 rakamdan oluşmalıdır', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn("222-33-785");
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage7);



    });
    it('TC023 - ViceDean Ekleme_SSN girilmelidir. SSN; 3. ve 5. rakamdan sonra "-" içermeli ve 8 rakamdan oluşmalıdır', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn("222-33-09785");
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        cy.wait(2000);
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage7);



    });
    it('TC024 -  ViceDean Ekleme_User Name Boş bırakılamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);

        viceDeanManagementPage.clickSubmitButton();
        viceDeanManagementPage.visibleRequiredMessage(viceDeanData.errorMessage);
    });

    it('TC025 -  ViceDean Ekleme_User Name Boş bırakılamaz', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName("     ");
        viceDeanManagementPage.clickSubmitButton();
        viceDeanManagementPage.visibleErrorMessage(viceDeanData.errorMessage7);
    });

    it('TC026 - ViceDean Ekleme_Password en az 8 karakterden olusmalidir', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);

        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        viceDeanManagementPage.visiblePasswordErrorMessage(viceDeanData.passworderror);



    });
    it('TC027 - ViceDean Ekleme_Password en az 8 karakterden olusmalidir', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword("Kubr_48");
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        viceDeanManagementPage.visiblePasswordErrorMessage(viceDeanData.passwordenaz8karakter);




    });
    it('TC028 - ViceDean Ekleme_Password en az 8 karakterden olusmalidir', () => {

        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(fakephoneNumber);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword("Ku1       ");
        viceDeanManagementPage.writeSsn(fakeSSN);
        viceDeanManagementPage.writeUserName(fakeUsername);
        viceDeanManagementPage.clickSubmitButton();
        viceDeanManagementPage.visiblePasswordErrorMessage(viceDeanData.passwordenaz8karakter);




    });

})



