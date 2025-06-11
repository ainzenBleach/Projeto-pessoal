drop database criptoradar;
create database criptoradar;
use criptoradar;

create table dadosUsuarios(
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar(100),
    senha varchar(45),
    continente varchar(45),
    cargo varchar(45)
);

create table post(
	idPost int auto_increment,
    fkUsuario int,
    titulo varchar(1000),
    imagem varchar(1000),
    dtPost datetime default current_timestamp, 
    descricao varchar(1000),
    constraint pkComposta primary key(idPost, fkUsuario),
    constraint fkPostUsuario foreign key (fkUsuario) references dadosUsuarios(idUsuario)
);

create table comentario(
	idComentario int auto_increment,
    fkUsuario int,
    fkPost int,
    constraint fkComposta
    primary key (idComentario, fkUsuario,fkPost),
    comentario varchar(1000),
    constraint fkComentarioUsuario
		foreign key (fkUsuario)
			references dadosUsuarios(idUsuario),
	constraint fkComentarioPost
		foreign key (fkPost) 
			references post(idPost),
	dtComentario datetime
);

create table curtida(
    fkUsuario int,
    fkPost int,
    constraint fkComposta
    primary key (fkUsuario,fkPost),
    dtCurtida datetime default current_timestamp,
    curtida boolean,
    constraint fkCurtidaUsuario
		foreign key (fkUsuario)
			references dadosUsuarios(idUsuario),
	constraint fkCurtidaPost
		foreign key (fkPost) 
			references post(idPost)
);




/*Insert nas tabelas*/

insert into post(fkUsuario, titulo, imagem, descricao, dtPost) values
(1,"bcdbcd","banana", "bananão", default);
-- select post
select * from comentario;
select p.idPost as "ID do post",
p.titulo as "Titulo do post",
p.imagem as "Imagem do post",
p.descricao as "Descrição do Post",
date_format(p.dtPost, '%d/%m/%Y') as "Data do post",
u.nome as "Nome do usuário"
from
post p join dadosUsuarios u 
	on p.fkUsuario = u.idUsuario;

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
where p.idPost = 2
group by dataHorario, p.idPost, p.dtPost;

-- select comentario
select c.comentario as "Comentario",
c.fkPost as "ID do post",
u.nome as "Nome do usuário"
from
comentario c left join post p
	on c.fkUsuario = p.idPost
join dadosUsuarios u
	on c.fkUsuario = u.idUsuario;





-- Teste de conta
insert into testeCurtida (idPost, idUsuario, curtida) values
(1,1,true),
(1,2,true),
(1,5,true),
(1,6,true),
(1,3,true),
(1,4,true),
(1,4,true);

-- Alimentação teste

INSERT INTO dadosUsuarios (nome, email, senha, continente, cargo) VALUES
('Alice Silva', 'alice@gmail.com', '12341234', 'América do Sul', 'Explorador'),
('Bruno Costa', 'bruno@gmail.com', '12341234', 'Ásia', 'Pesquisador'),
('Camila Rocha', 'camila@gmail.com', '12341234', 'Europa', 'Fotografo');

INSERT INTO post (fkUsuario, imagem, descricao) VALUES
(1, '', 'Avistamento do Pé Grande na floresta de Oregon.'),
(2, '', 'Estudo sobre o Chupacabra no interior do México.'),
(3, '', 'Registro fotográfico do Monstro do Lago Ness.'),
(1, '', 'Relato de encontro com o Mokele Mbembe na África Central.'),
(2, '', 'Investigações sobre o Yeti nos Himalaias.'),
(3, '', 'Possível pegada do Mapinguari na Amazônia.');

-- Comentários para post 1
INSERT INTO comentario (fkUsuario, fkPost, comentario) VALUES
(2, 1, 'Muito interessante! Há registros parecidos.'),
(3, 1, 'Consegue a localização exata?');

-- Comentários para post 2
INSERT INTO comentario (fkUsuario, fkPost, comentario) VALUES
(1, 2, 'Já ouvi falar do Chupacabra!'),
(3, 2, 'Tenho registros parecidos no Chile.');

-- Comentários para post 3
INSERT INTO comentario (fkUsuario, fkPost, comentario) VALUES
(1, 3, 'Você tirou a foto?'),
(2, 3, 'Pode me mandar os dados brutos?');

-- Comentários para post 4
INSERT INTO comentario (fkUsuario, fkPost, comentario) VALUES
(2, 4, 'Sempre quis investigar esse críptido.'),
(3, 4, 'Fascinante!');

-- Comentários para post 5
INSERT INTO comentario (fkUsuario, fkPost, comentario) VALUES
(1, 5, 'Já estive nos Himalaias também.'),
(3, 5, 'Cuidado com avalanches nessa região.');

-- Comentários para post 6
INSERT INTO comentario (fkUsuario, fkPost, comentario) VALUES
(1, 6, 'O Mapinguari me dá arrepios.'),
(2, 6, 'Tem algum áudio gravado?');

INSERT INTO curtida (fkUsuario, fkPost, curtida) VALUES 
(1, 1, true),
(2, 1, false),
(3, 1, true),
(1, 2, false),
(2, 2, true),
(3, 2, false);

select fkPost, count(curtida) from curtida
	where curtida = true
    group by fkPost;
    
show tables;

select * from comentario;
select * from curtida;
select * from dadosusuarios;
select * from post;

select 
    du.idUsuario,
    p.idPost,
    sum(c.curtida = true) as totalLikes,
    sum(c.curtida = false ) as totalDislikes,
    count(distinct cm.idComentario) as totalComentarios
from 
dadosUsuarios du join post p 
	on p.fkUsuario = du.idUsuario
left join curtida c 
	on c.fkPost = p.idPost
left join comentario cm
	on cm.fkPost = p.idPost
where du.idUsuario = 2
group by du.idUsuario, p.idPost;

select
du.idUsuario,
p.idPost,
sum(c.curtida = false) as CurtidasDown,
sum(c.curtida = true) as CurtidaUP
from
dadosusuarios du join post p
on p.fkUsuario = du.idUsuario
join curtida c
on c.fkPost = p.idPost
where du.idUsuario = 2
group by du.idUsuario, p.idPost;

INSERT INTO comentario (fkUsuario, fkPost, comentario, dtComentario) VALUES
(2,2, '${comentario}', now()),
(2,2, '${comentario}', now()),
(2,2, '${comentario}', now());

select
count(c.fkpost) as totalComentarios,
p.idPost,
DATE_FORMAT(c.dtComentario, '%Y-%m %H:%i')
from
comentario c join post p
on p.idPost = c.fkPost 
where c.fkUsuario = 2
group by DATE_FORMAT(c.dtComentario, '%Y-%m %H:%i'), p.idPost;

	select p.fkUsuario as idUsuario,
    c.fkPost as idPost,
    sum(c.curtida = false) as CurtidasDown,
    sum(c.curtida = true) as CurtidaUP
    from
    curtida c right join post p
    on c.fkPost = p.idPOst
    where p.fkUsuario = 2
    group by c.fkPost, p.fkUsuario;

	select 
    p.idPost,
    sum(c.curtida = false) as CurtidasDown,
    sum(c.curtida = true) as CurtidaUP
	from post p
	left join curtida c on p.idPost = c.fkPost
	where p.idPost = 4
	group by p.idPost;

select * from comentario;

select
p.idPost,
count(c.idComentario) as totalComentarios,
DATE_FORMAT(c.dtComentario, '%Y-%m %H:%i') as dataHorario
from
post p
left join
comentario c
on c.fkPost = p.idPost
where p.idPost = 2 
group by dataHorario, p.idPost;

select
p.idPost,
count(c.idComentario) as totalComentarios,
DATE_FORMAT(c.dtComentario, '%Y-%m %H:%i') as dataHorario
from
post p
left join
comentario c
on c.fkPost = p.idPost
where p.fkUsuario = 2
group by dataHorario, p.idPost;

/*--------------------------------------------------------------------------------------------------------------*/

select 
idPost,
fkUsuario,
titulo,
imagem
from post where fkUsuario = 2;



select fkPost as "idPost",
count(comentario) as "Total de comentarios"
from
comentario
where fkPost = 3
group by fkPost ;

select 
p.idPost as "idPost",
COUNT(c.idComentario) AS TotalDeComentarios
from post p
left join comentario c on p.idPost = c.fkPost
where p.idPost = 3
group by p.idPost;

select fkpost as idPost,
sum(curtida = false) as CurtidasDown,
sum(curtida = true) as CurtidaUP
from
curtida where fkPost = 1;


select count(fkUsuario) as "postCriados" from post
	where fkUsuario = 2
	group by fkUsuario;

select imagem from post
	where idPost = 1;

select fkPost as idPost, count(curtida) as curtida from curtida
	where fkPost = 1 and curtida = true;

select count(comentario) as comentarios from comentario
	where fkPost = 1;


select c.fkPost,
count(c.curtida),
count(comentario.comentario)
from
curtida c join comentario
	where curtida = true
	group by c.fkPost;

select fkPost from curtida
	where fkUsuario = 1 and curtida = false;
    
    
select * from aquatech.usuario;
