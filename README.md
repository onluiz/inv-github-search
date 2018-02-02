
# GitSearch (Desafio Involves)

Olá! O GitSearch é um aplicativo criado para trabalhar com a api do GitHub (v3) com a ideia de facilitar a pesquisa e anotações de usuários do próprio (GitHub). Este é um aplicativo resultante do desafio involves.

## Acesso
Para ver o app basta acessar esse link:
https://onluiz.github.io/inv-github-search/docs/#/home

## Requisitos
Os requisitos desenvolvidos são:

 - Pesquisar um usuário do GitHub por seu nome de usuário (login/username)
 - O resultado da pesquisa deve ser exibido na mesma página
 - Caso nenhum resultado encontrado, uma página de erro 404  deve ser exibida para o usuário
 - A visualização dos repositórios do usuário deve ser paginada

## Imagens
![enter image description here](https://github.com/onluiz/inv-github-search/blob/master/static/images/GitSearch/app_mob_2.png?raw=true)![enter image description here](https://github.com/onluiz/inv-github-search/blob/master/static/images/GitSearch/app_mob_1.png?raw=true)

## Tecnologias
Entre as opções oferecidas, a tecnologia escolhida foi o Vue.js. Abaixo é possível verificar as principais tecnologias utilizadas:

 - Vue.js
 - Vuex (Flex)
 - [Vuetify](http://vuetifyjs.com) (Implementação do Material Design do Google)
 - [GitHub Rest.js](https://github.com/octokit/rest.js) (Utilizado para consumo da API do GitHub)

## Estrutura e Conceitos

### Organização de Diretórios
Para a organização de diretórios fora utilizado os conceitos Alexis Mangin, nesse [Artigo](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1). Ele explica que a organização de componentes com seus próprios arquivos no mesmo diretório (e não tudo em um diretório assets) é mais facil para a manutenção, testes e até uma possível "exportação" de um componente para uma biblioteca, por exemplo.

Em adição, eu apliquei algumas ideias de problemas sofridos no dia-a-dia. O Resultado final fica assim:

    src
	    **components** (componentes globais)
		    Button
			    components (button pode ter seus próprios componentes
		**pages**
			HomePage
				components (HomePage pode ter seus próprios componentes)
				sections (HomePage pode ter suas próprias sections)
		**api** (para OAuth2)
		**router* (rotas)
		**store** (stores vuex)
		**libs** (Bibliotecas/Helpers)
		App.vue
		
### Mobile First
App foi desenvolvido focando principalmente nos dispositivos móveis.

## Testes Unitários
Os testes unitários são de real importância para auxiliar a manter a qualidade de um projeto. Em projetos backend Java eu realizo esta prática, porém nesse desafio eu tive que fazer a primeira vez em um projeto de frontend com Vue.js

Por este motivo, acabei utilizando parte do tempo estudando as formas e boas práticas, porém não consegui realizar a cobertura de testes necessária.

Cobertura de testes em geral ficará como débito técnico deste aplicativo, para a próxima versão.

## Consumo da api GitHub
Para consumir a api do GitHub, a principio, decidi utilizar a lib axios e fazer as requisições necessárias "na mão". Porém após alguma pesquisa encontrei o [okctokit/rest.js](https://github.com/octokit/rest.js) que é uma lib para consumir a api v3 do GitHub.

Dessa forma, ecnomizei tempo e aumentei a qualidade deste aspecto usando uma api que recebe contribuições de excelentes programadores.

## OAuth
Para a utilização do OAuth, os seguintes passos foram realizados:

 - Criar um App Autuh0 no GitHub
 - Criar uma chamada para este app pelo app Vue.js
 - Trocar o código recebido por um token válido

### Troca de Código Recebido por Token
Para realizar a troca do código recebido por um token é necessário utilizar o segredo cadastrado no app na requisição, por este motivo, para não expor o segredo ao publico, fora criado um pequeno projeto NodeJS. Funciona assim:

 - Vue App recebe código em sua url
 - Vue App manda código para o NodeJS
 - NodeJS recebe o código e, junto com o segredo, faz a troca pelo token
 - NodeJS retorna o token válido para o App Vue
 - App Vue recebe  o token e armazena no localstorage para ser utilizado nas requisições

## Anotações e Localstorage
As anotações realizadas pelo usuário ficam armazenadas no localstorage.

## ESLint Airbnb
Para melhor estruturação e  padronização de código, utilizei o Lint do AirBnb. Sua documentação bem descrita e aceitação por outro desenvolvedores foram o motivo para tal escolha.

## Heroku

## GitHub Pages

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
## Server para Testar
No diretório src/server, existe um pequeno servidor Node apontando para o diretório /dist, onde o resultado do build é armazenado. Rode esse servidor para visualizar como sua aplicação ficou após o build e evitar ter que fazer vários deploys.

## Melhorias

 - Mais importante de tudo, estar aberto ao feedback dos usuários e aplicar melhorias e correções sugeridas
 - Url da Api para troca de código por token em variavel de ambiente
 - Armazenar dados do usuário em algum banco de dados (MongoDB, por exemplo)
 - Adicionar mais funcionalidades e integrar mais ainda com o GitHub
 - Utilizar um pré-processador de CSS como SASS para criar estilos com mais facilidade e organização
 - Utilizar os conceitos de CSS Modular (BEM, OOCSS, Namespaces). Artigos: [Modular CSS part 1](https://zellwk.com/blog/css-architecture-1), [Modular CSS part 2](https://zellwk.com/blog/css-architecture-2), [Modular CSS part 3](https://zellwk.com/blog/css-architecture-3/)
 - Definir requisitos mínimos de um teste unitários
 - Cobrir toda a aplicação com testes unitários
 - Criar uma logo e uma identidade visual para o app

## Por que usar o Vuex?
O Vuex permitiu um controle muito mais simples do fluxo de informações que transita entre os componentes. Dessa forma o desenvolvimento acabou ficando mais acelerado e mais clean, sem falar que a gestão de informações ficou mais eficiente.

Assim como criei os módulos de Autenticação e Pesquisa no Vuex, futuramente podemos aumentar a aplicação e criar novos módulos como busca de Issues, Criação de Repositórios e muito além.

## Outras Opções
Para a realização deste projeto, pensei em primeiro utilizar o combo React/Redux. O React é uma ferramenta que possui um bom suporte (Facebook e Comunidade) o que a torna uma grande candidata para a tarefa. Sem falar que, se em algum momento eu precisar transformar o app em nativo para postar nas lojas de apps, com o React Native tudo fica mais simples.

Porém! O Vue.js trás uma simplicidade íncrivel que, se bem organizada e estruturada, acaba trazendo ganhos para o produto. Não que o React não possua tal característica, mas simplicidade é sempre interessante.

Vuetify! O Vuetify é uma implementação do Material Design do Google em Vue. Por mais que o React possua equivalentes (como o material ui), o Vuetify já tem mais tempo de casa, uma comunidade mais ativa e é muito bem documentado. Caracteristicas que facilitaram a minha escolha.

## Motivação
Não participo desse desafio somente porque a Involves é uma empresa que possui um ambiente de trabalho legal (apesar de isso  motivar bastante haha).

A Involves têm se mostrado uma empresa comprometida em entregar produtos de qualidade (é o que a sua fama diz), com tecnologia de ponta. Sem falar que o respeito e reconhecimento pelo trabalho de seus colaboradores é de se admirar.

Esses fatores com certeza me motivaram a participar deste desafio. Apesar de eu ter muito o que aprender ainda, busquei dar o meu melhor aplicando as melhores práticas que eu tive a oportunidade de estudar e/ou experienciar.