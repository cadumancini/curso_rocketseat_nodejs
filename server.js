const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando app
const app = express();
app.use(express.json()); // Permitir com que envie dados em formato JSON
app.use(cors()); // pode-se passar parâmetros, como domínios que podem acessar, etc.

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true });

//require('./src/models/Product'); // registrando model na aplicação
// Para não usar linha acima, usar o requireDir(<caminhoModels>)
requireDir('./src/models');

// Rotas:
app.use('/api', require('./src/routes'));

app.listen(3001); // setando para o node 'ouvir' a porta 3001 do browser