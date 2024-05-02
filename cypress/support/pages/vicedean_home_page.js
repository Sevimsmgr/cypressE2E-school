class VicedeanHomePage{
    constructor(){
        this.vicedeanMenuButton="button[class='fw-semibold text-white bg-primary navbar-toggler collapsed']";
    
}


clickMenuButton(vicedeanMenuButton) {
    cy.get(this.vicedeanMenuButton).click();
}
    
}
export const vicedeanHomePage= new VicedeanHomePage()
