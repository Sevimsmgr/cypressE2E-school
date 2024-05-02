
class ConTactMessagePage{
constructor(){
    
    this.messageName='.table-group-divider > :nth-child(1) > :nth-child(1)'//tr[th="Name"]
    this.messageEmail=':nth-child(1) > [style="width: 17rem;"]'
    this.messageDate=':nth-child(1) > [style="width: 7rem;"]'
    this.messageSubject='.table-group-divider > :nth-child(1) > :nth-child(4)'
    this.messageDetails=':nth-child(1) > :nth-child(5) > span'

}

verifyMessageName(messageName) {
    cy.get().should('have.to', messageName);

}
verifyMessageEmail(messageEmail) {
    cy.get(this.messageEmail).should('have.to',messageEmail);
}
verifyMessageDate(messageDate) {
    cy.get(this.messageDate).should('have.to',messageDate);
}
verifyMessageSubject(messageSubject) {
    cy.get(this.messageSubject).should('have.to',messageSubject);
}
verifyMessageDetails(messageDetails) {
    cy.get(this.messageDetails).should('have.to',messageDetails);
}



}
export const contactMessagePage = new ConTactMessagePage()