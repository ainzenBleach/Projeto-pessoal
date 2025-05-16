var database = require("../database/config");

// function carregarPost() {
//   const instrucao = `
// select p.idPost as "id",
// p.titulo as "titulo",
// p.imagem as "imagem",
// p.descricao as "descricao",
// date_format(p.dtPost, '%d/%m/%Y') as "data",
// u.nome as "usuario"
// from
// post p join dadosUsuarios u 
//     on p.fkUsuario = u.idUsuario;`;

//   return database.executar(instrucao);
// }

function carregarAparicoesImagem(){
    const instrucao = `
    select imagem from post;
    `;

  return database.executar(instrucao);
}

function carregarAparicoesCurtida(){
    const instrucao = `
    select fkPost as idPost, count(curtida) as curtida from curtida
	where curtida = true;
    `;

  return database.executar(instrucao);
}

function carregarAparicoesUp(){
    const instrucao = `
    select count(comentario) as comentarios from comentario;
    `;

  return database.executar(instrucao);
}

module.exports = {
carregarAparicoesImagem,
carregarAparicoesCurtida,
carregarAparicoesUp
}