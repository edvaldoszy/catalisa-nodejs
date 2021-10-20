const jwt = require('jsonwebtoken');

const secret = 'catalisa';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6IkVkdmFsZG8gU3p5bW9uZWsiLCJpZGFkZSI6MTcsImlhdCI6MTYzNDU4NTcxOX0.t2JhxMcHjqfuN-Yj0Dnx1qxPKNUTxqXnpU1CJUAr0NQ';

const payload = jwt.verify(token, secret);

console.log(payload);
