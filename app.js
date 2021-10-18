const express = require('express');
const modelos = require('./modelos');
const parser = require('body-parser');

const app = express();
app.use(parser.json());

function validacao(request, response, next) {
  const schema = Joi.object({
    titulo: Joi.string().min(5).max(100).required(),
  });
  const resultado = schema.validate(request.body);
  if (resultado.error) {
    response.status(400).json(resultado.error);
  } else {
    next();
  }
}

app.use((req, res, next) => {
  if (req.url === '/usuarios') {
    res.status(401).send('Voce nao tem acesso a pagina /usuarios');
    return;
  }

  next();
});

app.get('/catalisa', (request, response) => {
  response.sendFile('./catalisa.html', { root: './public' });
});

app.get('/tarefas', (request, response) => {
  modelos.Tarefa
    .fetchAll()
    .then(tarefas => {
      response.json(tarefas);
    });
});

app.post('/tarefas', validacao, (req, res) => {
  const tarefa = new modelos.Tarefa({
    titulo: req.body.titulo,
  });

  tarefa.save()
    .then(() => {
      res.send('A criação da tarefa funcionou');
    });
});

exports.app = app;
