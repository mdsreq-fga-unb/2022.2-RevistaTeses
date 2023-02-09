# Estratégia de testes

Serão feitos testes manuais, testes automatizados e integração contínua. Os critérios de teste serão os critérios de aceitação de cada user story para todos os testes.

## Testes manuais

### ferramenta: Insomnia
Com testes manuais vamos fazer testes de usuário e navegar pela inteface de maneiras diferentes para procurar por erros. 
Também vamos disponibilizar o site para os clientes paraa que eles usem e reportem erros.
O back end também deve ser testado utilizando a ferramenta para controlar os casos de teste e os resultados.

## Testes Unitários Automatizados
### ferramenta: Vitest

Como usamos a arquitetura MVC, há a Model, o Controller e a View.
### O que vai ser testado?

- rotas e middleware: Controller
- renderização da interface: View

### Frequência: Toda Sprint

## Integração Contínua

### ferramenta: Github Actions

### O que vai ser testado?

Será construída uma build e vão rodar os testes unitários. Vai ser testado se a build é formada com sucesso nas versões 16,17,18 e 19 do node.js .
Depois todos os testes vão ser rodados e caso algum deles quebrem todos serão avisados.
Vamos rodar todos os testes da integração contínua a cada push para o repositório e a cada pull request aberto.
O deploy para a main e posteriormente para a produção só deve ser realizado caso TODOS os testes unitários e da integração contínua passarem.
O código deve ser refatorado para isso, não o teste mudado, a não ser, claro, que este tenha um erro que todos os desenvolvedores concordem.

### Frequência: Todo Pull Request aberto e push realizado
