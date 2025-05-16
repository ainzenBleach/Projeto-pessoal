const database = require("../database/config");

function salvar(post) {
  const instrucao = `insert into post (fkUsuario, titulo, imagem, descricao,dtPost) values ('${post.idUsuario}', '${post.titulo}', '${post.imagem}', '${post.descricao}', default)`;

  return database.executar(instrucao);
}

module.exports = {salvar}