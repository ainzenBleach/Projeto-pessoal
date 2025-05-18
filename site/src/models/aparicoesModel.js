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
    select idPost, imagem from post;
    `;

  return database.executar(instrucao);
}

function carregarAparicoesCurtida(idPost){
    const instrucao = `
    select fkPost as idPost, 
    count(*) as curtida 
    from curtida
    where curtida = true and fkPost = ${idPost}
    group by fkPost;
    `;

  return database.executar(instrucao);
}

function carregarAparicoesComentarios(idPost){
    const instrucao = `
    select fkPost as idPost, count(comentario) as comentarios from comentario
	where fkPost = ${idPost}
    group by fkPost;
    `;


  return database.executar(instrucao);
}

module.exports = {
carregarAparicoesImagem,
carregarAparicoesCurtida,
carregarAparicoesComentarios
}