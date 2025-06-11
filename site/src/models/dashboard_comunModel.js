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
date_format(p.dtPost, '%Y-%m-%d') as dataPost,
count(c.idComentario) as totalComentarios,
DATE_FORMAT(c.dtComentario, '%Y-%m %H:%i') as dataHorario
from
post p
left join
comentario c
on c.fkPost = p.idPost
where p.idPost = ${idPost}
group by dataHorario, p.idPost, p.dtPost;
    `

    return database.executar(instrucao);
}

function carregarInteraçõesTotais(idUsuario){
    const instrucao = `
select 
    du.fkUsuario,
    p.idPost,
    count(c.curtida = true) as totalUps,
    count(c.curtida = false ) as totalDown
from 
curtida du join post p 
	on p.fkUsuario = du.fkUsuario
left join curtida c 
	on c.fkPost = p.idPost
where du.fkUsuario = ${idUsuario}
group by du.fkUsuario, p.idPost;
    `

    return database.executar(instrucao);
}

function carregarComentariosTotais(idUsuario){
    const instrucao = `
select
count(c.idComentario) as totalComentarios,
DATE_FORMAT(c.dtComentario, '%Y-%m-%d') as dataHorario
from
post p
left join
comentario c
on c.fkPost = p.idPost
where p.fkUsuario = ${idUsuario}
group by dataHorario;
    `

    return database.executar(instrucao);
}



module.exports = {carregarPostUsuariosDash, 
    carregarUpDownUsuariosDash, 
    carregarComentariosDash, 
    carregarComentariosTotais,
    carregarInteraçõesTotais}