const express = require('express');
const app = express();

// Criando primeira rota:
app.get('/', (req, res) => {
  res.send('Hello World!!!');
});
// '/' -> rota a ser acessada. nesse caso, raiz do projeto
// param 'req' -> itens na requisição feita pelo browser (parametros, corpo, autenticacao, ip, etc...)
// param 'res' -> resposta a dar para a requisição

app.listen(3001); // setando para o node 'ouvir' a porta 3001 do browser