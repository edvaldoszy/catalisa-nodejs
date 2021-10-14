const modelos = require('./modelos');

modelos.Tarefa
  .fetchAll()
  .then(tarefas => {
    console.log(tarefas.toJSON());
  });
