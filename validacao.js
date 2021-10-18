const Joi = require('joi');

const schema = Joi.object({
  nome: Joi.string().min(1).max(100).required(),
  senha: Joi.string().min(8).max(20).required(),
});

const resultado = schema.validate({ nome: 'Edvaldo', senha: '12345678' });
if (resultado.error) {
  console.error('Ocorreu um erro na validação');
  console.error(resultado.error);
} else {
  console.log('Tudo certo com a validação, podemos continuar!');
}
