<h1 align="center">
    <img alt="RocketShoes" src="rocketshoes.png"/>
    Rocketshoes
</h1>

# Rocketshoes

Implementação front-end web de um e-commerce utilizando [React JS](https://reactjs.org/).

## :information_source: Sobre

O projeto consiste em um frontend web que consome uma API REST servida por uma instância de [JSON Web Server](https://github.com/typicode/json-server)) simulando uma loja virtual de venda de calçados com telas para listagem de produtos e carrinho de compras. Exercício do Modulo 5 do Bootcamp GoStack da Rocketseat implementando as trocas de estados e efeitos colaterais da aplicação por meio de [Redux](https://redux.js.org/) e [Redux Saga](https://redux-saga.js.org/)

### :arrow_down: Clone o repositório
1. `git clone git@github.com:aadelgrossi/rocketshoes.git`
2. `cd rocketshoes`

### :hammer_and_wrench: Configuração e inicialização

Instale as dependências
```
yarn
```

Inicie o servidor fake para prover as rotas da API consumidas pela aplicação (parâmetro -d opcional)
```
json-server server.json -p 3333 -w -d 300
```

Inicie a aplicação
```
yarn start
```
