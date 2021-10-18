function minhaFuncao(req, res) {
  if (req.url === '/catalisa') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Minha pagina do Bootcamp Catalisa');
    return;
  }

  res.setHeader('Content-Type', 'text/plain');
  res.end('Ola, Edvaldo!'); 
}

exports.minhaFuncao = minhaFuncao;
