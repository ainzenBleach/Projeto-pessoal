var database = require("../database/config");

function carregarPostUsuariosDash(idUsuario){
    const instrucao = `
select 
idPost,
fkUsuario,
titulo,
imagem
from post where fkUsuario = ${idUsuario};
    `

    return database.executar(instrucao);
}

function carregarUpDownUsuariosDash(idPost){
    const instrucao = `
    select 
    p.idPost,
    sum(c.curtida = false) as CurtidasDown,
    sum(c.curtida = true) as CurtidaUP
	from post p
	left join curtida c on p.idPost = c.fkPost
	where p.idPost = ${idPost}
	group by p.idPost;
    `

    return database.executar(instrucao);
}

function carregarComentariosDash(idPost){
    const instrucao = `
select
p.idPost,
count(c.idComentario) as totalComentarios,
DATE_FORMAT(c.dtComentario, '%Y-%m %H:%i') as dataHorario
from
post p
left join
comentario c
on c.fkPost = p.idPost
where p.idPost = ${idPost} 
group by dataHorario, p.idPost;
    `

    return database.executar(instrucao);
}

function carregarInteraçõesTotais(idUsuario){
    const instrucao = `
select 
    du.idUsuario,
    p.idPost,
    sum(c.curtida = true) as totalUps,
    sum(c.curtida = false ) as totalDown
from 
dadosUsuarios du join post p 
	on p.fkUsuario = du.idUsuario
left join curtida c 
	on c.fkPost = p.idPost
where du.idUsuario = ${idUsuario}
group by du.idUsuario, p.idPost;
    `

    return database.executar(instrucao);
}

function carregarComentariosTotais(idUsuario){
    const instrucao = `
select
p.idPost,
count(c.idComentario) as totalComentarios,
DATE_FORMAT(c.dtComentario, '%Y-%m-%d %H:%i') as dataHorario
from
post p
left join
comentario c
on c.fkPost = p.idPost
where p.fkUsuario = ${idUsuario}
group by dataHorario, p.idPost;
    `

    return database.executar(instrucao);
}



module.exports = {carregarPostUsuariosDash, 
    carregarUpDownUsuariosDash, 
    carregarComentariosDash, 
    carregarComentariosTotais,
    carregarInteraçõesTotais}