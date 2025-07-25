Feature: Register User
    Eu como cliente
    Quero me cadastrar na aplição
    Para fazer um pedido de compra

Background: Tela de registro de acesso
    Given Que eu estou na tela de cadastro     

Scenario: Campo nome vazio
    When E clico no cadastrar
    Then Vejo mensagem no cadastro "E-mail inválido."

Scenario: Campo e-mail vazio
    And preencho nome
    When E clico no cadastrar
    Then Vejo mensagem no cadastro "O Campo e-mail deve ser preenchidocorretamente."

Scenario: Campo e-mail invalido
    And preencho nome
    And preencho e-mail "invalidEmail"
    When E clico no cadastrar
    Then Vejo mensagem no cadastro "O Campo e-mail deve ser preenchidocorretamente."

Scenario: Campo senha vazio
    And preencho nome
    And preencho e-mail "invalidEmail"
    When E clico no cadastrar
    Then Vejo mensagem no cadastro "O Campo senha deve ter pelo menos 6 dígitos."


Scenario: Campo e-mail invalido
    And preencho nome
    And preencho e-mail "invalidEmail"
    And preencho password "123"
    When E clico no cadastrar
    Then Vejo mensagem no cadastro "O Campo senha deve ter pelo menos 6 dígitos."
    

Scenario: Login com sucesso
    And preencho meus dados de cadastro
    When E clico no cadastrar
    Then Vejo mensagem no cadastro "O Campo senha deve ter pelo menos 6 dígitos."
    