/// <reference types="cypress" />

// Elementos
const elements = {
    buttons: {
        register: '#btnRegister'
    },
    fields: {
        name: '#user',
        emmail: '#email',
        password: '#password'
    },
    messages : {
        error: '.errorLabel',
        successTitle: '#swal2-title',
        successSubtitles: '#swal2-html-container'
    }
}

// Ações dos metodos
export default {
    saveRegister() {
        cy.get(elements.buttons.register)
        .click()
    },

    fillName(name) {
        cy.get(elements.fields.name)
        .type(name)
    },

    fillEmail(email) {
    cy.get(elements.fields.emmail)
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

    messageSucesso(name) {
        cy.get(elements.messages.successTitle)
        .should('have.text', 'Cadastro realizado!')

        cy.get(elements.messages.successSubtitles, {timeout: 3000})
        .should('have.text', `Bem-vindo ${name}`) 
    }
}