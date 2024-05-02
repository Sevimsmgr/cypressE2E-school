class LoginPage{
    //WebElements
    constructor(){
        this.userNameInput='#username'
        this.passwordInput='#password'
        this.loginButton='button.fw-semibold.btn.btn-primary[type="button"]'       
        this.loginIcon= '[class="header_link ms-2"]' 
        this.contactButton= '.container > #offcanvasNavbar-expand-lg > .offcanvas-body > .justify-content-start > :nth-child(5)'
    }


        
      

    //Methods

    writeUserName(DeanUserName){
        cy.get(this.userNameInput).type(DeanUserName)
    }
    writePassword(DeanPassword){
        cy.get(this.passwordInput).type(DeanPassword)
    }
    clickLoginIcon(){
        cy.get(this.loginIcon).click({force:true});
    }
    clickLoginButton(){
        cy.get(this.loginButton).click();
    }

    writeUserName(AdminUsername){
        cy.wait(2000)
        cy.get(this.userNameInput).type(AdminUsername)
        cy.wait(2000)
    }
    writePassword(AdminPassword){
        
        cy.get(this.passwordInput).type(AdminPassword)
    }

    clickContactButton(contactButton){
        cy.get(this.contactButton).click();
    }
   
} 
export const loginPage = new LoginPage()
