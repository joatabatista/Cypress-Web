/// <reference types="cypress" />

// Elementos
const elements = {
    buttons: {
        login: '#btnLogin'
    },
    fields: {
        email: '#user',
        password: '#password'
    },
    messages : {
        error: '.invalid_input',
        successTitle: '#swal2-title',
        successSubtitles: '#swal2-html-container'
    }
}

// Ações dos metodos
export default {
    saveLogin() {
        cy.get(elements.buttons.login)
        .click()
    },

    fillEmail(email) {
    cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
    },

    fillPassword(password) {
        cy.get(elements.fields.password)
        .should('be.visible')
        .type(password)
    },

    checkMessage(message) {
        cy.get(elements.messages.error)
        .should('have.text', message)
    },

    messageSucesso(email) {
        cy.get(elements.messages.successTitle)
        .should('have.text', 'Login realizado')

        cy.get(elements.messages.successSubtitles, {timeout: 3000})
        .should('have.text', `Olá, ${email}`) 
    }
}