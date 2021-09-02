# movieFlix-FrontEnd

## Projeto criado com [Create React App]

Saiba mais -> [Create React App](https://github.com/facebook/create-react-app).

## Como rodar ?

Na pasta raiz do projeto executando o comando: 

### `yarn start`

O projeto sera aberto em: [localhost:3030](http://localhost:3000).

# Sobre o projeto

* Projeto movieFLix 

App criado como parte de avaliação do bootCamp fullstack da devSuperior, ele consiste em uma tela responsiva "home" de rota "/" onde temos o login com autenticação e autorização na api do movieFLix, além de mais 2 telas com rotas protegidas para usuarios não logados, a tela "movies" de rota "/movies" onde temos umas listagem hardcode de 2 itens que levam a ultima tela, a tela "review" de rota "movies/:movieId" onde por fim temos o review dos usuarios em um terminado filme(movieId), optidos através da api, além de um formulario protegido para postagem de reviews apenas por um perfil de usuario "ROLE_MEMBER". 

# Tecnologias usadas

## Front end

* HTML/CSS/TypeScript
* React

## Ferramentas

* Axios
* Bootstrap
* React router dom
* react hook form
* jwt-decode
* Bcrypt
* localStorage
* API MovieFlix -> [MovieFlix-API](https://github.com/Jpoao/movieFlix-API-challenge)

