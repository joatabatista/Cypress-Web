# 🚀 Projeto de Automação Web com Cypress + BDD

Este projeto tem como objetivo realizar testes automatizados de interface (UI) utilizando **Cypress** com a abordagem **BDD (Behavior Driven Development)** e a biblioteca **Faker** para geração de dados dinâmicos.

---

## 🧪 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) — Framework de testes E2E
- [Cucumber (BDD)](https://github.com/badeball/cypress-cucumber-preprocessor) — Escrita de cenários em linguagem Gherkin
- [Faker.js](https://fakerjs.dev/) — Geração de dados falsos (nomes, e-mails, etc.)
- Node.js
- JavaScript

## 📁 Estrutura do Projeto

cypress/
├── e2e/
│ ├── features/ # Arquivos .feature com cenários BDD
│ ├── step_definitions/ # Steps ligados aos cenários
│ └── pages/ # Page Objects para organização dos testes
├── support/ # Comandos customizados e configs globais
├── fixtures/ # Massa de dados (se houver)
cypress.config.js # Configuração do Cypress

package.json


---

## ▶️ Como Executar o Projeto

### 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Git](https://git-scm.com/) instalado
- Cypress e dependências já instaladas via `npm install`

### 🧭 Passos

```bash
# Clone o repositório
git clone https://github.com/joatabatista/Cypress-Web.git

# Acesse a pasta do projeto
cd Cypress-Web

# Instale as dependências
npm install


🧪 Executar os Testes

# Modo interativo (GUI)
npx cypress open

# Modo headless (terminal)
npx cypress run

✅ Exemplo de Teste com Faker
Os dados do usuário são gerados dinamicamente com a biblioteca faker, como no exemplo abaixo:

const nome = faker.person.firstName();
cy.get("#nome").type(nome);


🙋‍♂️ Autor
Joatã Batista




