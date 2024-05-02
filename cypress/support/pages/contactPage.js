class ContactPage{

    constructor(){
        //this.contactButton ='[.justify-content-start > :nth-child(5)]'
        this.contactButton= '.justify-content-start > :nth-child(5)'
        this.userName=  '#name'
        this.userEmail= '#email'
        this.userSubject= '#subject'
        this.userMessageDetails= '#message'
        this.sendMessageButton=' [class="fw-semibold btn btn-primary"]'
    }

        clickContactButton(){
            cy.get(this.contactButton).click()
        }
        writeUserName(userName) {
            cy.get(this.userName).type(userName);
        }
        writeUserEmail(userEmail) {
            cy.get(this.userEmail).type(userEmail);
        }
        writeUserSubject(userSubject) {
            cy.get(this.userSubject).type(userSubject);
        }
        writeUserMessageDetails(userMessageDetails){
            cy.get(this.userMessageDetails).type(userMessageDetails)
        };
        
        
        clickSendButton(){
            cy.get(this.sendMessageButton).click()
        }
        
    
} 
export const contactPage = new ContactPage()