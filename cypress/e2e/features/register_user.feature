Feature: Register User
    Eu como cliente
    Quero me cadastrar na aplição
    Para fazer um pedido de compra

Background: Tela de registro de acesso
    Given Que eu estou na tela de cadastro     

Scenario: Login com sucesso
    And preencho meus dados de cadastro
    When E clico no cadastrar
    Then Vejo mensagem no cadastro com sucesso

Scenario: Campo E-mail vazio
    And preencho meu nome
    When E clico no cadastrar
    Then Vejo mensagem "O campo e-mail deve ser prenchido corretamente"

Scenario: Campo Senha vazio
    And preencho meu nome
    And preencho meu e-mail
    When E clico no cadastrar
    Then Vejo mensagem "O campo senha deve ter pelo menos 6 dígitos"

Scenario: Campo Senha incorreto
    And preencho meu nome
    And preencho meu e-mail
    And preencho senha com 4 digito
    When E clico no cadastrar
    Then Vejo mensagem "O campo senha deve ter pelo menos 6 dígitos"            
    