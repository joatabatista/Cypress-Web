/// <reference types="cypress" />

export default{
    accessLogin() {
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-user')
            .click()    
    },

    accessCadastro() {
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-lock')
            .click()    
    }
}