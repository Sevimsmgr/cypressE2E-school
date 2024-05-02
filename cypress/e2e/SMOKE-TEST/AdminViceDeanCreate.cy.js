import { loginPage } from "../../support/pages/loginPage";
import { viceDeanManagementPage } from "../../support/pages/viceDeanManagementPage";
import { faker } from "@faker-js/faker";

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


})
