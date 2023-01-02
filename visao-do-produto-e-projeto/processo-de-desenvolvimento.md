# Processo de Desenvolvimento de software

A equipe Trilegal vai seguir as metodologias XP e Scrum, com o Scrum utilizaremos todos os recursos, aplicados junto com técnicas do XP, o desenvolvimento se dará por sprints que serão decididas nas reuniões de Sprint planning, sendo cada sprint com uma quantidade de features que deve ser implementada, já a implementação será feita com técnicas de XP como o Pair programming, TDD e integração contínua. As sprints serão de duas semanas cada.</br>

![Scrum](imagens/013-Scrum-Process.jpg)
figura 1. Fonte : https://www.buscaagil.com.br/post/vis%C3%A3o-geral-do-scrum
![XP](imagens/XP.jpg)
figura 2. Fonte : https://medium.com/@thiagoctr/pair-programming-programa%C3%A7%C3%A3o-em-par-5cd19a1e3b22


## Eventos Scrum

### Daily Scrum

Daily scrum são reuniões diárias cujo objetivo é que todos os membros tenham conhecimento sobre o que foi feito, o que não foi feito e o porque, para este grupo foi identificado que reuniões presenciais ou remotas seria muito difícil de ser seguidas pois cada membro possui horários disponíveis que se diferem, por tanto foi decidido que os dailies serão feitos a partir de uma mensagem em um grupo de WhatsApp.</br>
Todos precisam responder às seguintes perguntas:</br>

- O que eu fiz hoje para progredir em direção a meta da sprint?
- Quais foram as minhas dificuldades?
- O que eu vou fazer hoje para o nosso time alcançar a meta da sprint?

Caso um membro do scrum team não conseguir resolver os impedimentos notados, ele deve conversar com o scrum master para que as duas pessoas consigam articular e resolver o problema. Isto não deve ser feito nesta reunião.</br>
Ferramenta:
- Grupo separado de whatsapp, segunda a sexta

Entrega:
- Relato de situação

### Sprint planning

Sprint planning é uma reunião com todos os membros da equipe, o objetivo é definir qual será o objetivo da sprint, qual o valor da sprint, o que será feito e como será realizado este trabalho na sprint, os principais autores nessas decisões são o Product Owner e os Developers
As seguintes perguntas devem ser respondidas por:</br>

- Por que esta Sprint é valiosa? (Product owner)
- O que pode ser feito nesta Sprint? (Product owner e scrum team discutem o escopo da sprint)
- Como o trabalho escolhido será realizado? (Developers quebram cada item selecionado do product backlog em mini atividades diária, definem o plano para realizar a Sprint.)

Para relembrar: Product Backlog + plano da Sprint = Sprint backlog</br>
Ferramenta:

- Google meets e google planilhas

Entrega:

- Backlog da sprint

### Sprint review

Neste evento,  o scrum team vai apresentar o que foi feito na última sprint.</br>

Primeiro apresentar o planos de sprints e mostrar o produto que foi gerado.</br>

O analista de qualidade deverá ser responsável por garantir que o que foi feito está de acordo com o cliente e fazer um relatório do que não está para que isso possa ser ajustado na próxima sprint.</br>

Depois disso, explicar, de forma não técnica, quais dificuldades enfrentamos.</br>

Após disso os Stakeholders não precisam mais ficar na reunião, pois discutiremos com o professor detalhes mais técnicos e se necessário, pediremos ajuda.</br>

Ferramenta:

- Google meets
Entrega:

- Relatório de qualidade

### Sprint retrospective

Esta reunião serve para analisar a sprint anterior, identificar quais foram os erros, problemas ou qualquer impedimentos para a realização da sprint, os depoimentos devem ser recolhidos para que possa se fazer um novo plano para as próximas sprints.</br>
As seguintes perguntas devem ser respondidas pelo Scrum team: 

- O que deu certo nessas duas últimas Sprints?
- Quais problemas foram encontrados?
- Como esses problemas foram resolvidos?
- O que pode ser mudado para que o time seja mais eficaz?
- O que cada um pode fazer para melhorar?

O product owner deve estar atento para que o escopo do produto esteja sempre atualizado.</br>

Ferramenta:

- Google meets

Entrega:

- Atualização do Relatório de situação do projeto (scrum master) e melhorias e lições aprendidas (scrum master)

## Estratégias do XP e mais

| Atividade           |                                                                                                                Método                                                                                                               |   Ferramenta   |
|---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------:|
| Integração contínua | Devops - A partir do próprio repositório do git, vamos criar uma esteira e executar os jobs dos testes                                                                                                                              | GitHub actions |
| TDD                 | ATDD - Foco na precisão de aceitação dos requerimentos                                                                                                                                                                              | Gatling        |
| Design simples      | Circular -Design que passa pelos designs feitos anteriores para gerar um novo                                                                                                                                                       | Figma          |
| Refatoração         | Red-Green-Refactor: Red- parar e considerar o que precisa ser desenvolvido (fazer o teste). Green - Fazer o código suficiente para rodar no teste. Refactor- Refatorar e limpar o código sem adicionar nenhuma nova funcionalidade. | VsCode         |
| Pair programming    | Ping-Pong Pairing, é uma ótima maneira de compartilhar responsabilidades uniformemente, através da troca de posto (navegador e piloto) entre cada interação                                                                         | VsCode         |
| Design de interface | Paralelo - Criação de designs alternativos ao mesmo tempo, faz o teste de usuário e cria uma mescla entre os designs criados.                                                                                                       | Figma          |
