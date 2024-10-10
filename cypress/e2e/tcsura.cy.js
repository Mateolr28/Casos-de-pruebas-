describe ('set de pruebas tc', function(){

    /**it('TCREGISTER',function(){

        
        cy.visit('https://juice-shop.herokuapp.com/#/')
        cy.get('.close-dialog').click()
        cy.get('#navbarAccount').click()
        cy.get('#navbarLoginButton').click()
        cy.get('#newCustomerLink > .primary-link').click()
        cy.get('.mat-form-field.ng-tns-c21-13 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('pruebassoft@outlook.com')
        cy.get('.mat-form-field.ng-tns-c21-14 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('123456789')
        cy.get('.mat-form-field.ng-tns-c21-15 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('123456789')
        cy.get('.mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
        cy.get('#mat-option-4 > .mat-option-text').click()
        cy.get('.security-container > .mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('random')
        cy.get('#registerButton').click()
        cy.get('.error').should('contain.text','Email must be unique')
    
    })**/

    it('TCLOGIN', function(){

        cy.visit('https://juice-shop.herokuapp.com/#/')
        cy.get('.close-dialog').click()
        cy.get('#navbarAccount').click()
        cy.get('#navbarLoginButton').click()
        cy.get('.mat-form-field.ng-tns-c21-11 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('pruebassoft@outlook.com')
        cy.get('.mat-form-field.ng-tns-c21-12 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('123456789')
        cy.get('#loginButton').click()
        cy.get('#navbarAccount').click()
        cy.get('.mat-menu-content > [aria-label="Go to user profile"]').click()
        cy.title().should('eq','OWASP Juice Shop')
        cy.url().should('eq','https://juice-shop.herokuapp.com/profile')
        cy.get('.mdl-card__supporting-text > .mdl-cell--12-col').should('have.css','font-family').and('match',/Roboto, Helvetica, Arial, sans-serif/)
        cy.get(':nth-child(3) > img').invoke('prop', 'naturalWidth').should('be.greaterThan', 0)
    
    })

    it ('tc_03',function(){
        cy.visit("https://juice-shop.herokuapp.com/#/")
        cy.get('.close-dialog').click()
        cy.get('#navbarAccount').click()
        cy.get('#navbarLoginButton').click()
        cy.get('.mat-form-field.ng-tns-c21-11 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('pruebassoft@outlook.com')
        cy.get('.mat-form-field.ng-tns-c21-12 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('123456789')
        cy.get('#loginButton').click()
        cy.get('[style="left: 0px; width: calc(50% - 15px); margin-top: 0px; padding-top: calc(50% - 15px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator').click()
        cy.get('[style="left: calc(50% + 15px); width: calc(50% - 15px); margin-top: 0px; padding-top: calc(50% - 15px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator').click()
        cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').click()
        cy.get('#checkoutButton').click()
        cy.get('.mat-radio-label').click()
        cy.get('.btn-next').click()
        cy.get('#mat-radio-43 > .mat-radio-label').click()
        cy.get('.cc-btn').click()
        cy.get('.nextButton').click()
        cy.get('.mat-radio-label').click()
        cy.get('.nextButton').click()
        cy.get('#checkoutButton').click()
        cy.get('[fxflex="60%"] > :nth-child(1) > .confirmation').should('contain.text', 'Thank you for your purchase!')
    });
})