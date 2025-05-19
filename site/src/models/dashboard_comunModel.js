var database = require("../database/config");

function carregarPostUsuariosDash(idUsuario){
    const instrucao = `
    select count(fkUsuario) as "postCriados" from post
	where fkUsuario = ${idUsuario}
	group by fkUsuario;
    `

     return database.executar(instrucao);
}

function carregarUpDownUsuariosDash(idPost){
    const instrucao = `
    select fkpost as idPost,
    sum(curtida = false) as CurtidasDown,
    sum(curtida = true) as CurtidaUP
    from
    curtida where fkPost = ${idPost};
    `

    return database.executar(instrucao);
}

function carregarComentariosDash(idPost){
    const instrucao = `
    select 
p.idPost as "idPost",
COUNT(c.idComentario) AS TotalDeComentarios
from post p
left join comentario c on p.idPost = c.fkPost
where p.idPost = ${idPost}
group by p.idPost;
    `

    return database.executar(instrucao);
}

module.exports = {carregarPostUsuariosDash, carregarUpDownUsuariosDash, carregarComentariosDash}