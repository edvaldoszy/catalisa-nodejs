const express = require('express');
const modelos = require('./modelos');

const app = express();

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

exports.app = app;
