const http = require('http');
const app = require('./app');

const port = 3000;

const server = http.createServer(app.app);

server.listen(port, () => {
  console.log(`Servidor executando no endereço http://localhost:${port}`);
});
