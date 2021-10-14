const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('./database.sqlite3');

database.serialize(() => {
  database.run('INSERT INTO tarefas (titulo) VALUES ("Lavar o carro")', (err) => {
    console.log('A inserção dos registros funcionou!');
  });
});

database.close();