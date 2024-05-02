class RegisterPage {
    //Webelementler
    constructor() {
        this.registerGirisButton = '[class="header_link me-2"]'
        this.registerName = '#name'
        this.registerSurname = '#surname'
        this.registerGeburtsort = '#birthPlace'
        this.registerTelefon = '#phoneNumber'
        this.registerGeschlecht = '[value="MALE"]'
        this.registerGeschlechtFemale='[value="FEMALE"]'
        this.registerGeburtsdatum = '#birthDay'
        this.registerSSN = '#ssn'
        this.registerNutzername = '#username'
        this.registerPasswort = '#password'
        this.registerbuton = '[class="fw-semibold btn btn-primary"]'
        this.registerZorunlualanMessage ="//div[contains(@class,'card-body')]//div[1]//div[1]"
        this.registerTelefonHataMessage="(//div[@class='invalid-feedback'])[4]"
        this.registerTelefonFazlaKarakterMessage="(//div[contains(@class, 'invalid-feedback')])[4]"
        this.registerSSnOnbirKarakterHatamesaji='.Toastify__toast-body > :nth-child(2)'
        this.registerSsnOnIkiKarakterHataMessage='.Toastify__toast-body'
        this.registerPasswordKarakterSayiAzUyariMessage=':nth-child(11) > .invalid-feedback'
        this.registerDogumYiliTarihmessage ="//div[@class='Toastify__toast-body']"
        this.registerBosSurnameErrorMessage='.Toastify__toast-body > :nth-child(2)'
        this.registerBosUserNameErrorMessage='.Toastify__toast-body > :nth-child(2)'
        


    }

    //metotlar

    writeRegisterGirisbuton() {
        cy.get(this.registerGirisButton).click();
    }
    writeRegisterName(Name) {
        cy.get(this.registerName).type(Name);
    }
    writeRegisterNachname(Surname) {
        cy.get(this.registerSurname).type(Surname);
    }
    writeRegisterGeburtsOrt(Birth_Place) {
        cy.get(this.registerGeburtsort).type(Birth_Place);
    }
    writeRegisterTelefon(Phone) {
        cy.get(this.registerTelefon).type(Phone);
    }
    writeRegisterGschlechtclick(Gender){
         if(Gender=="female"){
            cy.wait(2000)
            cy.get(this.registerGeschlechtFemale).click()
        }else{
            cy.wait(2000)
     cy.get(this.registerGeschlecht).click()
         }
    // cy.get(this.registerGeschlecht).click()
    
    }
    writeRegisterGeburtsdatum(Date_Of_Birth) {
        cy.get(this.registerGeburtsdatum).type(Date_Of_Birth);
    }
    writeRegisterSSN(Ssn) {
        cy.get(this.registerSSN).type(Ssn);
    }
    writeRegisterNutzername(User_Name) {
        cy.get(this.registerNutzername).type(User_Name);
    }

    writeRegisterPasswort(Password) {
        cy.get(this.registerPasswort).type(Password);
    }
    clickRegisterButton() {
        cy.wait(2000)
        cy.get(this.registerbuton).click();
        

    }

     verifyZorunluAlanMessage(requiredZorunluAlanMessage) {
         cy.wait(2000)
          cy.xpath(this.registerZorunlualanMessage).should('have.to',requiredZorunluAlanMessage);
        cy.wait(2000)
     }clear

    writeBosUsername(Bosname){
        cy.get(this.registerName).type(Bosname)
    }

    writeBosSurname(Bossurname){
    cy.get(this.registerSurname).type(Bossurname)
}

     writeBosBirthPlace(BosBirtPlace){
    cy.get(this.registerGeburtsort).type(BosBirtPlace)
}
    writeBosTelefon(BosTelefon){
    cy.get(this.registerTelefon).type(BosTelefon)
}

verifytelefonHataMessage(requiredtelefonmessage) {
    cy.wait(2000)
     cy.xpath(this.registerTelefonHataMessage).should('have.to',requiredtelefonmessage)
   cy.wait(2000)
}


verifytelefonFazlaKarakterHataMessage(RequiredTelefonFazlaKarakterMessage) {
    cy.wait(2000)
     cy.xpath(this.registerTelefonFazlaKarakterMessage).should('have.to',RequiredTelefonFazlaKarakterMessage)
   cy.wait(2000)
}

writeBosSsn(BosSsn){
    cy.get(this.registerSSN).type(BosSsn)
}
writeOnKarakterSsn(SsnOnKarakter){
    cy.get(this.registerSSN).type(SsnOnKarakter)
}

verifySsnOnbirkarakterHatamessage(RequiredSSnOnbirkarakterhatamesaji){
    cy.wait(2000)
     cy.get(this.registerSSnOnbirKarakterHatamesaji).should('have.to',RequiredSSnOnbirkarakterhatamesaji)
   cy.wait(2000)
}
writeOnKarakterSsn(SsnOnikiKarakter){
    cy.get(this.registerSSN).type(SsnOnikiKarakter)
}
verifySsnOnIkiKarakterHatamesaji(RequiredSsnOnIkiKarakterHatamesaji){
    cy.wait(1000)
     cy.get(this.registerSsnOnIkiKarakterHataMessage).should('have.to',RequiredSsnOnIkiKarakterHatamesaji)
   cy.wait(2000)
}
writeBosUsername(BosUserName){
    cy.get(this.registerNutzername).type(BosUserName)
}
writeBosUsername(BosPassword){
    cy.get(this.registerPasswort).type(BosPassword)
}

writePasswordYedikelime(PasswordYediKarakter){
    cy.get(this.registerPasswort).type(PasswordYediKarakter)

}
verifyPasswortYediKarakter(PasswordRequireduyariyazisiKarakterSayisi){
    cy.wait(2000)
     cy.get(this.registerPasswordKarakterSayiAzUyariMessage).should('have.to',PasswordRequireduyariyazisiKarakterSayisi)
   cy.wait(2000)
}
writeAyniKarakterPassword(PasswortAyniTipKarakter){
    cy.get(this.registerPasswort).type(PasswortAyniTipKarakter)
}

VerifyPasswortAyniTipKarakter(PasswortAyniTipKarakterUyariMessage){
    cy.wait(2000)
    cy.get(this.registerPasswordKarakterSayiAzUyariMessage).should('have.to',PasswortAyniTipKarakterUyariMessage)
    cy.wait(2000)
}


verifyDogumYiliGuncelleme(){
    cy.wait(2000)
    cy.xpath(this.registerDogumYiliTarihmessage).should('contain',"muss ein Datum in der Vergangenheit sein")
    cy.wait(2000)
}

writeDogumYiliIleriYil(DogumYIliIleriTarih){
    cy.get(this.registerGeburtsdatum).type(DogumYIliIleriTarih)
}

clickandverifyErrorMessageDogumyili(registerbuton){
    cy.get(this.registerbuton).click(registerbuton)
    cy.wait(2000)
    cy.xpath(this.registerDogumYiliTarihmessage).should('contain',"geçmiş bir tarih olmalı")

}
// verifyBosSurNameErrorMessage(requiredBosSurnamemessage){
//     cy.wait(2000)
//     cy.get(this.registerBosSurnameErrorMessage).should('contain',requiredBosSurnamemessage)
//     cy.wait(2000)
// }

verifyBosSurNameErrorMessage(requiredBosSurnamemessage){
    cy.get(this.registerbuton).click()
    cy.get(this.registerBosSurnameErrorMessage).should('have.to',requiredBosSurnamemessage)

}


verifyBosUserNameErrorMessage(requiredBosUserNamemessage){
    cy.get(this.registerBosUserNameErrorMessage).should('have.to',requiredBosUserNamemessage)

}


}

export const register = new RegisterPage()