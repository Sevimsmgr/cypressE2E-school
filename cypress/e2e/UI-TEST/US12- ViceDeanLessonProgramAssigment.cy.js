describe('Vice Dean öğretmene ders atayabilmelidir.', () => {
    it('US10_TC01', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://managementonschools.com/');
        cy.get('.col-sm-2 > .ms-2').click();
        cy.get('#username').clear('t');
        cy.get('#username').clear('team03Bora');
        cy.get('#username').type('team03Bora');
        cy.get('#password').click();
        cy.get('#password').clear('Alsancak123');
        cy.get('#password').type('Alsancak123');
        cy.get('.d-grid > .fw-semibold').click();
        cy.get('.navbar > .fw-semibold').click();
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(1)').click();
        cy.get('#controlled-tab-example-tab-lessonsList').click();
        cy.get('#lessonName').clear('D');
        cy.get('#lessonName').type('DEV C');
        cy.get('#compulsory').check();
        cy.get('#creditScore').clear('6');
        cy.get('#creditScore').type('6');
        cy.get('#controlled-tab-example-tabpane-lessonsList > :nth-child(2) > .mb-5 > :nth-child(1) > .card-body > form > .row > .mx-auto > div > .fw-semibold').click();
        cy.get('#controlled-tab-example-tab-lessonProgram').click();
        cy.get('.css-19bb58m').click();
        cy.get('#react-select-2-option-33').click();
        cy.get('#day').select('MONDAY');
        cy.get('#educationTermId').select('45');
        cy.get('#startTime').clear('10:01');
        cy.get('#startTime').type('10:10');
        cy.get('#stopTime').clear('12:01');
        cy.get('#stopTime').type('12:10');
        cy.get(':nth-child(2) > .mx-auto > div > .fw-semibold').click();
    
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('US12_TC03', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://managementonschools.com/');
        cy.get('.col-sm-2 > .ms-2').click();
        cy.get('#username').clear('team03Bora');
        cy.get('#username').type('team03Bora');
        cy.get('#password').clear('A');
        cy.get('#password').type('Alsancak123');
        cy.get('.d-grid > .fw-semibold').click();
        cy.get('#controlled-tab-example-tab-lessonProgram').click();
        cy.get(':nth-child(113) > :nth-child(1) > span > div > #lessonProgramId').check();
        cy.get('#teacherId').select('5331');
        cy.get('.row > .mb-3 > .fw-semibold').click();
        /* ==== End Cypress Studio ==== */
    });
});