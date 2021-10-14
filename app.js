const express = require('express');

const app = express();

app.get('/catalisa', (request, response) => {
  response.sendFile('./catalisa.html', { root: './public' });
});

exports.app = app;
