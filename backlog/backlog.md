# Backlog do Produto

## Escopo e Objetivos do MVP1 e MVP2

### MVP1

**Objetivo**: Postar e visualizar notícias</br>
**Quantidade de sprints**: 2 sprints.</br>
**Escopo**: Features 01, 02, 03 e 10</br>

### MVP2

**Objetivo**: Classificar e comentar notícias</br>
**Quantidade de sprints**: 2 sprints.</br>
**Escopo**: Features 04, 05, 06, 12 e 13</br>

## Personas

| Personas     |                                           Descrição                                           |
|--------------|:---------------------------------------------------------------------------------------------:|
| Leitor       | É o usuário comum que somente lê e consome os conteúdos                                       |
| Redator      | Pode somente ler e produzir conteúdo                                                          |
| Editor       | Tem as mesmas permissões que redatores mas ele que "promove" um leitor a redator              |
| Editor-chefe | Tem as mesmas permissões que editores mas ele também pode promover outros usuários a editores |


## Épicos

| Código 	|          Épico          	|
|:------:	|:-----------------------:	|
|  EP01  	|    Contas de usuários   	|
|  EP02  	|   Feedback de postagem  	|
|  EP03  	| Sugestões para leitores 	|
|  EP04  	|   Postagem de conteúdo  	|

## Features

| Épico 	| Código 	|            Feature            	|     Escopo     	|
|:-----:	|:------:	|:-----------------------------:	|:--------------:	|
|  EP01 	|   F01  	|        Gerenciar contas       	|      MVP1      	|
|       	|   F02  	| Atribuir permissões de contas 	|      MVP1      	|
|       	|   F03  	|      Ver perfil da conta      	|      MVP1      	|
|  EP02 	|   F04  	|     Comentar em postagens     	|      MVP2      	|
|       	|   F05  	|     Classificar comentário    	|      MVP2      	|
|       	|   F06  	|        Avaliar postagem       	|      MVP2      	|
|  EP03 	|   F07  	|        Implementar tags       	| Fora do Escopo 	|
|       	|   F08  	|      IA sugerir postagens     	| Fora do Escopo 	|
|       	|   F09  	|      IA ordenar postagens     	| Fora do Escopo 	|
|  EP04 	|   F10  	|        Postar notícias        	|      MVP1      	|
|       	|   F11  	|      Postar observatórios     	| Fora do Escopo 	|
|       	|   F12  	|         Postar colunas        	|      MVP2      	|
|       	|   F13  	|        Postar podcasts        	|      MVP2      	|

## Requisitos não funcionais

| Categoria          | Requisito não funcional                                                          |
|--------------------|----------------------------------------------------------------------------------|
| Interface          | Banner de notícias                                                               |
| Interface          | As fontes a serem usadas no site devem ser Roboto e Oswald                       |
| Interface          | O layout deve ser azul                                                           |
| Interoperabilidade | O domínio e banco de dados a serem usados devem ser os que o cliente já adquiriu |
| Implementação      | O software deve ter integração contínua                                          |
| Implementação      | O software deve ser testado com Jest                                             |


## User Stories

### EP01 - F1

| User story                                                                                                |                                                                                                                                   Critérios de aceitação                                                                                                                                  |
|-----------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Como usuário, desejo fazer o cadastro da minha conta, para ter acesso ao login da plataforma              | Email e senha são obrigatórios.<br>Não pode criar conta com email já cadastrado.<br>Conta deve estar disponível para o login, assim que finalizar o cadastro.                                                                                                                             |
| Como usuário, desejo realizar o login na plataforma, para ter acesso à plataforma                         | Deve utilizar email e senha para realizar o login.<br>Caso os dados estejam incorretos, o login não pode ser realizado e deve retornar uma mensagem                                                                                                                                       |
| Como usuário, desejo ser autenticado, para que eu não precise fazer login sempre que acessar a plataforma | Deve ter acesso à plataforma por 24h antes de precisar fazer login novamente.<br>Caso o usuário selecione a opção, o usuário deve ter acesso por 7 dias antes de precisar fazer login novamente.                                                                                          |
| Como usuário, desejo poder editar a minha conta, para caso eu queira trocar os dados da minha conta       | Deve poder trocar o email, exigindo a senha para confirmar a mudança.<br>Para trocar a senha deve informar a senha atual e em seguida informar a nova senha.<br>Deve utilizar os novos dados para realizar o login imediatamente depois da alteração.<br>Deve realizar o login novamente. |
| Como usuário, desejo poder excluir a minha conta, para caso eu não tenha mais interesse na plataforma     | Deve ter todos os dados excluídos.<br>O email deve estar disponível para criação de nova conta, logo após a exclusão da conta.<br>Os comentários e avaliações do usuário deve permanecer na plataforma.                                                                                   |

### EP01 - F2
| User story                                                                                                                                                |                                                                                                                                 Critérios de aceitação                                                                                                                                |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Como editor chefe, desejo atribuir a função de editor às contas que eu escolher, para que eu possa ter controle sobre quem pode adicionar novos redatores | A conta a ser atribuída a função deve existir.<br>A conta que foi atribuída a função de editor deve ter acesso ao perfil de editor.<br>A conta que recebeu a função deve realizar o login novamente.<br>A conta que recebeu a função deve ter acesso às suas funções imediatamente.   |
| Como editor chefe, desejo atribuir a função de redator às contas que eu escolher, para que eu possa ter controle sobre quem pode realizar postagem        | A conta a ser atribuída a função deve existir.<br>A conta que foi atribuída a função de redator deve ter acesso ao perfil de redator.<br>A conta que recebeu a função deve realizar o login novamente.<br>A conta que recebeu a função deve ter acesso às suas funções imediatamente. |
| Como editor chefe, desejo ter acesso à todas as funções de redator, para que eu possa fazer postagens.                                                    | Deve poder fazer postagens.<br>As postagens deve ter como autor “Redação Revista Teses”.                                                                                                                                                                                              |
| Como editor, desejo ter acesso à todas as funções de redator, para que eu possa fazer postagens<br>	Deve poder fazer postagens.                            | Deve poder fazer postagens<br>As postagens deve ter como autor “Redação Revista Teses”.                                                                                                                                                                                               |
| Como editor, desejo atribuir a função de redator às contas que eu escolher, para que eu possa ter controle sobre quem pode realizar postagem.             | A conta a ser atribuída a função deve existir.<br>A conta que foi atribuída a função de redator deve ter acesso ao perfil de redator.<br>A conta que recebeu a função deve realizar o login novamente.<br>A conta que recebeu a função deve ter acesso às suas funções imediatamente. |
| Como redator, desejo ter acesso à área de criação de notícias, para que eu possa postar as notícias na plataforma.                                        | Apenas o redator têm acesso à criação de notícias.	<br>A área de criação de notícias deve ficar na página de perfil do redator.<br>As notícias a serem postadas devem ficar disponíveis imediatamente após ser realizado.                                                              |


### EP01 - F3

| User story                                                                                                                                          |                                                                  Critérios de aceitação                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Como leitor, desejo ver os dados da minha conta no meu perfil, para que eu possa ver e editar os meus dados.                                        | Deve poder ver os próprios dados.<br>Deve poder editar os próprios dados.                                                                                |
| Como leitor, desejo ver os comentário e a minha pontuação, para que eu possa saber o quão bem avaliado estão sendo os meus comentários              | Deve poder ver os próprios comentários.	<br>Deve poder ver a pontuação recebida de cada comentário.<br>Deve poder ver a pontuação geral da própria conta. |
| Como redator, desejo ver quais notícias eu postei, para que eu saiba quão bem avaliadas estão sendo.                                                | Deve poder ver as notícias que postou.	<br>Deve poder ver a avaliação da notícia.<br>Deve ter acesso à área de criação de notícias.                       |
| Como editor chefe, desejo ver todas as contas que estão cadastradas na plataforma, para que eu possa decidir quem deve receber a função de redator. | Deve ver todas as contas.<br>Deve ter acesso às mesmas funções que o leitor e redator.                                                                   |



### EP02 - F4

| User story                                                                                                                      |                                                                              Critérios de aceitação                                                                             |
|---------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Como usuário, desejo poder comentar em notícias postadas, para conseguir opinar sobre o assunto.                                | O comentário deve estar disponível imediatamente.<br>Qualquer usuário pode avaliar o comentário.<br>O comentário pode receber comentários imediatamente após ser postado.       |
| Como usuário, desejo poder comentar os podcasts compartilhados, para conseguir opinar sobre o conteúdo.                         | O comentário deve estar disponível imediatamente.<br>Qualquer usuário pode avaliar o comentário.<br>O comentário pode receber comentários imediatamente após ser postado.       |
| Como usuário, desejo poder comentar as colunas postadas, para conseguir opinar sobre o assunto.                                 | O comentário deve estar disponível imediatamente.<br>Qualquer usuário pode avaliar o comentário.<br>O comentário pode receber comentários imediatamente após ser postado.       |
| Como usuário, desejo poder comentar os observatórios compartilhados, para conseguir opinar sobre o assunto.                     | O comentário deve estar disponível imediatamente.<br>Qualquer usuário pode avaliar o comentário.<br>O comentário pode receber comentários imediatamente após ser postado.       |
| Como usuário, desejo poder excluir meus comentários, quando minha opinião sobre o assunto mudar ou por algum erro na digitação. | O comentário deve ser excluído da plataforma.	<br>A pontuação do usuário que o postou deve permanecer inalterada.<br>Os comentários do comentário deve permanecer na plataforma. |


### EP02 - F5

| User story                                                                                                                                 |                                                                                   Critérios de aceitação                                                                                   |
|--------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Como usuário, desejo poder classificar um comentário em “voto up”, para explicitar concordância com o que foi comentado por outro usuário. | O comentário receberá um acréscimo de pontuação.	<br>O autor do comentário receberá um acréscimo de pontuação.<br>Caso o voto seja retirado, a pontuação deve retornar ao valor anterior.   |
| Como usuário, desejo poder classificar um comentário em “voto down”, para sinalizar discordância com o que foi comentado por outro usuário | O comentário receberá um decremento de pontuação.	<br>O autor do comentário receberá um decremento de pontuação.<br>Caso o voto seja retirado, a pontuação deve retornar ao valor anterior. |
| Como usuário, desejo poder denunciar um comentário, para sinalizar que o comentário tem alguma toxicidade.                                 | Após 5 denúncias no comentário, deve ser enviado automaticamente, um email ao editor.                                                                                                      |

### EP02 - F6


| User story                                                                                          |                                                     Critérios de aceitação                                                     |
|-----------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------:|
| Como usuário, desejo poder curtir uma postagem, para sinalizar que concordo com o conteúdo postado. | A postagem receberá um acréscimo no valor “curtir”.<br>Caso o voto seja retirado, a pontuação deve retornar ao valor anterior. |


### EP04 - F10


| User story                                                                                                                       |                                                                                                Critérios de aceitação                                                                                                |
|----------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Como redator, desejo poder postar uma notícia autoral, para compartilhar informações sobre um assunto de interesse dos usuários. | A notícia deve estar disponível imediatamente após a postagem.	<br>A notícia deve poder ser avaliada imediatamente depois de ser postada.<br>A notícia deve poder receber comentários imediatamente após ser postada. |
| Como redator, desejo poder postar uma notícia externa, para o conhecimento dos usuários sobre determinado assunto.               | A notícia deve estar disponível imediatamente após a postagem.<br>A notícia deve poder ser avaliada imediatamente depois de ser postada.<br>A notícia deve poder receber comentários imediatamente após ser postada. |
| Como redator, desejo poder editar uma notícia, para que consiga fazer alguma alteração no texto.                                 | A notícia deve estar disponível imediatamente após a edição.<br>A versão editada deve estar presente no lugar da versão anterior.                                                                                    |
| Como redator, desejo poder excluir uma notícia, para que não seja mais visualizado pelos usuários.                               | A notícia deve ser excluída completamente da plataforma.	<br>Os comentários devem ser excluídos juntos da notícia.<br>As pontuações de comentários de usuários não deve ser alterada.                                 |


### EP04 - F12


| User story                                                                                                                                |                                                                                               Critérios de aceitação                                                                                              |
|-------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Como redator, desejo poder postar uma coluna, para compartilhar informações sobre um assunto de interesse dos usuários e a minha opinião. | A coluna deve estar disponível imediatamente após a postagem.	<br>A coluna deve poder ser avaliada imediatamente depois de ser postada.<br>A coluna deve poder receber comentários imediatamente após ser postada. |
| Como redator, desejo poder editar uma coluna, para que consiga fazer alguma alteração no texto.                                           | A coluna deve estar disponível imediatamente após a edição.<br>A versão editada deve estar presente no lugar da versão anterior.                                                                                  |
| Como redator, desejo poder excluir uma coluna, para que não seja mais visualizado pelos usuários.                                         | A coluna deve ser excluída completamente da plataforma.<br>Os comentários devem ser excluídos juntos da coluna.<br>As pontuações de comentários de usuários não deve ser alterada.                                |


### EP04 - F13


| User story                                                                                                    |                                                                                               Critérios de aceitação                                                                                              |
|---------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Como redator, desejo poder adicionar um link para um podcast, para que os usuários tenham acesso ao conteúdo. | O link deve estar disponível imediatamente após a postagem.	<br>A podcast deve poder ser avaliada imediatamente depois de ser postada.<br>A podcast deve poder receber comentários imediatamente após ser postada. |
| Como redator, desejo poder editar um podcast, para realizar alguma modificação.                               | O podcast deve estar disponível imediatamente após a edição.<br>A versão editada deve estar presente no lugar da versão anterior.                                                                                 |
| Como redator, desejo poder excluir um podcast, para que nenhum usuário visualize o conteúdo.                  | O podcast deve ser excluída completamente da plataforma.<br>Os comentários devem ser excluídos juntos do podcast.<br>As pontuações de comentários de usuários não deve ser alterada.                              |
