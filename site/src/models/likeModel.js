const database = require("../database/config");

// Carregar os ups e downs dos post
function carregarLikeUp(idPost) {
  const instrucao = `
  select fkPost as idPost, count(curtida) as curtida from curtida
	where curtida = true and fkPost = ${idPost}
  group by fkPost;
`;
  return database.executar(instrucao);
}

function carregarLikeDown(idPost) {
  const instrucao = `
  select fkPost as idPost, count(curtida) as curtida from curtida
	where curtida = false and fkPost = ${idPost}
  group by fkPost;
`;
  return database.executar(instrucao);
}

// Checar se o usuario já deu um up ou down no post
function carregarLikeUsuario(idUsuario, idPost){
  const instrucao = `
  select fkUsuario, fkPost, curtida from curtida where fkUsuario = ${idUsuario} and fkPost = ${idPost} ;
  `
  return database.executar(instrucao)

}

// Sistema para contabilizar os ups e downs
function upInserir(idPost, idUsuario){
 const instrucao = `
 insert into curtida (fkUsuario, fkPost, dtCurtida, curtida) values
  (${idUsuario}, ${idPost}, default, true);
 `
  console.log(instrucao)

  return database.executar(instrucao)
} 

function downInserir(idPost, idUsuario){
 const instrucao = `
 insert into curtida (fkUsuario, fkPost, dtCurtida, curtida) values
  (${idUsuario}, ${idPost}, default, false);
 `
  return database.executar(instrucao)
} 
// atulizar o up e down computado trocando ele


function likeUpdate(idPost, idUsuario, troca){
 const instrucao = `
 update curtida set curtida = ${troca} where fkPost = ${idPost} and fkUsuario = ${idUsuario};
 `
  return database.executar(instrucao)
} 

module.exports = {
    carregarLikeUp,
    carregarLikeDown,
    carregarLikeUsuario,
    upInserir,
    downInserir,
    likeUpdate
};