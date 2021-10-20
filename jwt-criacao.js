const jwt = require('jsonwebtoken');

const secret = 'catalisa';

const usuario = { id: 1, nome: 'Edvaldo Szymonek', idade: 17 };

const token = jwt.sign(usuario, secret);

console.log(token);

