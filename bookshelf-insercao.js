const modelos = require('./modelos');

const tarefa = new modelos.Tarefa({
  titulo: 'Fazer compras'
});

tarefa.save()
  .then(() => {
    console.log('A inserção funcionou');
  });