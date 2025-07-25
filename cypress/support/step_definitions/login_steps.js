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
    login_page.saveLogin()
})

Then("Visualizo mensagem {string}", (message) => {
    login_page.checkMessage(message)
})

Given("Preencho e-mail", () => {
    login_page.fillEmail(email)
})

Given("Preencho a credenciais", () => {
    login_page.fillEmail(email)
    login_page.fillPassword(faker.internet.password())
})

Then("Visializo mensagem de suceso", () => {
    login_page.messageSucesso(email)
})
