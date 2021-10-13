const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain'); // Tipo do conteúdo de retorno
  res.end('Ola, Catalisa!'); // Conteúdo da resposta
});

server.listen(port, () => {
  console.log(`Servidor executando no endereço http://localhost:${port}`);
});
