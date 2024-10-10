describe('set de pruebas tc', function () {

   /* it('TCREGISTER', function () {


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
        cy.get('.error').should('contain.text', 'Email must be unique')

    })

    it('TCLOGIN', function () {

        cy.visit('https://juice-shop.herokuapp.com/#/')
        cy.get('.close-dialog').click()
        cy.get('#navbarAccount').click()
        cy.get('#navbarLoginButton').click()
        cy.get('.mat-form-field.ng-tns-c21-11 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('pruebassoft@outlook.com')
        cy.get('.mat-form-field.ng-tns-c21-12 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('123456789')
        cy.get('#loginButton').click()
        cy.get('#navbarAccount').click()
        cy.get('.mat-menu-content > [aria-label="Go to user profile"]').click()
        cy.title().should('eq', 'OWASP Juice Shop')
        cy.url().should('eq', 'https://juice-shop.herokuapp.com/profile')
        cy.get('.mdl-card__supporting-text > .mdl-cell--12-col').should('have.css', 'font-family').and('match', /Roboto, Helvetica, Arial, sans-serif/)
        cy.get(':nth-child(3) > img').invoke('prop', 'naturalWidth').should('be.greaterThan', 0)

    })*/

    it('tc_03', function () {
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
        cy.get('#checkoutButton').click({ force: true })
        cy.get('.mat-radio-label').click({ multiple: true })
        cy.get('.btn-next').click({force: true})
        cy.get(':nth-child(3) > .cdk-column-Selection').click()
        cy.get('.cc-btn').click()
        cy.get('.nextButton').click()
        cy.get('.mat-radio-label').click()
        cy.get('.nextButton').click()
        cy.get('#checkoutButton').click()
        cy.get('[fxflex="60%"] > :nth-child(1) > .confirmation').should('contain.text', 'Thank you for your purchase!')
    });
    it('tc_04', function () {
        cy.visit("https://juice-shop.herokuapp.com/#/");
        cy.get('.close-dialog').click();
        cy.get('#navbarAccount').click();
        cy.get('#navbarLoginButton').click();
        cy.get('#email').type('pruebassoft@outlook.com');
        cy.get('#password').type('123456789');
        cy.get('#loginButton').click();
        cy.get('[style="left: calc(50% + 15px); width: calc(50% - 15px); margin-top: 0px; padding-top: calc(50% - 15px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator').click()
            .wait(1000)
        cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').click();
        cy.get('.fa-layers-counter').should('contain.text', '1');
        cy.get('.mat-row > .cdk-column-product').should('contain.text', 'Apple Pomace');
        cy.get('#checkoutButton').click();
        cy.get('[aria-label="Add a new address"]').click();
        cy.get('[placeholder="Please provide a country."]').type('Colombia');
        cy.get('[placeholder="Please provide a name."]').type('Kevin');
        cy.get('[placeholder="Please provide a mobile number."]').type('1234567890');
        cy.get('[placeholder="Please provide a ZIP code."]').type('12345');
        cy.get('[placeholder="Please provide an address."]').type('Calle Falsa 123');
        cy.get('[placeholder="Please provide a city."]').type('Bogotá');
        cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex').type('loquesea')
        cy.get('#submitButton').click();
        cy.get('.mat-radio-label')
            .should('have.css', 'font-family',).and('match', /Roboto, "Helvetica Neue", sans-serif/)
        cy.get('.mat-radio-label').should('have.css', 'color', 'rgb(255, 255, 255)')
    });
})