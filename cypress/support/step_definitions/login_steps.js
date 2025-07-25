/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { faker, Faker } from '@faker-js/faker';
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"

const email = faker.internet.email()

Given("Que eu esteja na tela de login", () => {
    home_page.accessLogin()
})

When("E clico no login", () => {
    login_page.clicarLogin()
})

Then("Visualizo mensagem {string}", (message) => {
    login_page.checkErrorMessage(message)
})

Given("Preencho e-mail", () => {
    login_page.preencherEmail(email)
})

Given("Preencho a credenciais", () => {
    login_page.preencherEmail(email)
    login_page.preencherSenha(faker.internet.password())
})

Then("Visializo mensagem de suceso", () => {
    login_page.validarMensagemSucesso(email)
})
