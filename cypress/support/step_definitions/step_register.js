/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { faker, Faker } from '@faker-js/faker';
import home_page from "../pages/home_page"
import register_page from "../pages/register_page";

const nome = faker.name.fullName();
const email = faker.internet.email();
const password = faker.internet.password(8);

Given("Que eu estou na tela de cadastro", () => {
    home_page.accessCadastro()
})

Given("preencho meus dados de cadastro", () => {
    register_page.fillName(nome)
    register_page.fillEmail(email)
    register_page.fillPassword(password)
})

When ("E clico no cadastrar", () => {
    register_page.saveRegister()
})

Then("Vejo mensagem no cadastro com sucesso", () => {
    register_page.messageSucesso(nome)
})

Given("preencho meu nome", () => {
    register_page.fillName(nome)
})
   
Then("Vejo mensagem {string}", (message) => {
    register_page.checkMessage(message)
})

Given("preencho meu e-mail", () => {
    register_page.fillEmail(email)
})

Given("preencho senha com 4 digito", () => {
    register_page.fillPassword(1254)
})