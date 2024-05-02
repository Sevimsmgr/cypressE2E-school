class GuestUser{

// Metotlar
verifyUrl(url) {
    cy.url().should('contain', url)

}

verifyGastBenutzlist(){
    cy.xpath(this.GastBenutzList).should('be.visible')

}


//Webelement
constructor(){
this.GastBenutzList='//h5'
}
}
export const GuestPage= new GuestUser()