const express = require('express');
const app = express();

app.use(express.json());

// Conexão com o banco de dados
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

// URL de conexão com MongoDB Atlas
const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch(err => console.log("Erro ao conectar no banco MongoDB: ", err));

// Rotas (controllers)
const DepartamentoController = require('./controllers/DepartamentoController');
const CargoController = require('./controllers/CargoController');
const FuncionarioController = require('./controllers/FuncionarioController');
const ProjetoController = require('./controllers/ProjetoController');
const TarefaController = require('./controllers/TarefaController');

app.use('/departamentos', DepartamentoController);
app.use('/cargos', CargoController);
app.use('/funcionarios', FuncionarioController);
app.use('/projetos', ProjetoController);
app.use('/tarefas', TarefaController);

// Rota raiz
app.get('/', (req, res) => res.send('API-EMPRESAS Rodando'));

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("API-EMPRESAS Rodando em http://localhost:3000");
});




