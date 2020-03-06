const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando app
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true });

//require('./src/models/Product'); // registrando model na aplicação
// Para não usar linha acima, usar o requireDir(<caminhoModels>)
requireDir('./src/models');

const Product = mongoose.model('Product'); // objeto do ORM para fazer insert, update, etc.

// Criando primeira rota:
app.get('/', (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'
  });

  res.send('Hello World!');
});
// '/' -> rota a ser acessada. nesse caso, raiz do projeto
// param 'req' -> itens na requisição feita pelo browser (parametros, corpo, autenticacao, ip, etc...)
// param 'res' -> resposta a dar para a requisição

app.listen(3001); // setando para o node 'ouvir' a porta 3001 do browser