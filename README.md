O projeto deve conter um arquivo de README, com orientações  de instalação e execução local e link teste para apreciação do projeto final funcional, em um ambiente como Heroku

front = https://mysterious-dusk-62432.herokuapp.com


# Varejo Front

Esse é um projeto [Node.js] básico de front utilizando [React.js]. Consiste em uma representação visual de uma busca de produtos feitas através de um endpoint REST.

Esse projeto também utiliza o projeto-irmão [varejo-api] para recuperar as informações de produto.

Por se tratar de um front-end que consome uma API REST, o projeto-irmão deverá ser clonado juntamente com este, caso queira ver todas as funcionalidades com sucesso.

A aplicação final pode ser testada em: https://mysterious-dusk-62432.herokuapp.com

## Rodando localmente

Para rodar localmente garanta que tenha instalado o [Node.js].

Após basta executar os seguintes comandos abaixo no seu terminal.

  ```sh
  $ git clone https://github.com/erickmenezes/varejo-front.git
  $ cd varejo-front
  ```

Para instalar as depêdencias do projeto, basta executar:

  ```sh
  $ npm install
  ```
Com tudo pronto, basta executar:

  ```sh
  $ npm start
  ```

Com isso, a aplicação estará rodando em http://localhost:3000. Relembrando que para visualizar as informações é necessário clone e executar o projeto [varejo-api]

   [Node.js]: <http://nodejs.org>
   [React.js]: <https://reactjs.org/>
   [varejo-api]: <https://github.com/erickmenezes/varejo-api>
