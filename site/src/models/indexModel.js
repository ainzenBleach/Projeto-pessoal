var database = require("../database/config");

function carregarPost() {
  const instrucao = `
select p.idPost as "id",
p.titulo as "titulo",
p.imagem as "imagem",
p.descricao as "descricao",
date_format(p.dtPost, '%d/%m/%Y') as "data",
u.nome as "usuario"
from
post p join dadosUsuarios u 
	on p.fkUsuario = u.idUsuario;`;

  return database.executar(instrucao);
}

function carregarComentario(idPost) {
  const instrucao = `
select c.comentario as Comentario,
c.idComentario as idComentario,
c.fkPost as fkPost,
u.nome as usuario
from
comentario c left join post p
	on c.fkUsuario = p.idPost
join dadosUsuarios u
	on c.fkUsuario = u.idUsuario
  where c.fkPost = ${idPost};`;

  return database.executar(instrucao);
}

function salvarComentario(idUsuario, idPost, comentario) {

const instrucao = `
INSERT INTO comentario (fkUsuario, fkPost, comentario, dtComentario) VALUES
(${idUsuario},${idPost}, '${comentario}', now());
`;

  return database.executar(instrucao);
}


module.exports = {carregarPost, carregarComentario, salvarComentario}