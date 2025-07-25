Feature: Login
    Eu como cliente
    Quero fazer login na aplição
    Para fazer um pedido de compra

Scenario: Login com campo e-mail vazio
    Given Que eu esteja na tela de login
    When E clico no login
    Then Visualizo mensagem "E-mail inválido."

Scenario: Login com campo senha vazio
    Given Que eu esteja na tela de login
    And Preencho e-mail
    When E clico no login
    Then Visualizo mensagem "Senha inválida."

Scenario: Login com sucesso
    Given Que eu esteja na tela de login
    And Preencho a credenciais 
    When E clico no login
    Then Visializo mensagem de suceso   