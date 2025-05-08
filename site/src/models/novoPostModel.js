const database = require("../database/config");

function salvar(post) {
  const instrucao = `insert into post (fkUsuario, titulo, imagem, descricao) values ('${post.idUsuario}', '${post.titulo}', '${post.imagem}', '${post.descricao}')`;

  return database.executar(instrucao);
}

// function buscarUsuarioPeloId(id) {
//   const instrucao = `select * from usuario where id = ${id}`;

//   return database.executar(instrucao);
// }

module.exports = { salvar
  // , buscarUsuarioPeloId 
}