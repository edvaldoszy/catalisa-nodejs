const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('./database.sqlite3');

database.serialize(() => {
  database.all('SELECT * FROM tarefas', (err, resultado) => {
    console.log(resultado);
  });
});

database.close();