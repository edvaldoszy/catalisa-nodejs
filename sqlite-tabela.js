const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('./database.sqlite3');

database.serialize(() => {
  database.run('CREATE TABLE tarefas (titulo VARCHAR)', (err) => {
    console.log('A criação da tabela funcionou!');
  });
});

database.close();