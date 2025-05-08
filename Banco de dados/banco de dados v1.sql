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
select * from dadosUsuarios;

create table post(
	idPost int auto_increment,
    fkUsuario int,
    titulo varchar(1000),
    imagem varchar(1000),
    descricao varchar(1000),
    constraint pkComposta primary key(idPost, fkUsuario)
);
alter table post add constraint fkPostUsuario foreign key (fkUsuario) references dadosUsuarios(idUsuario);
select * from post;

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
			references post(idPost)
);

create table curtida(
    fkUsuario int,
    fkPost int,
    constraint fkComposta
    primary key (fkUsuario,fkPost),
    dtCurtida date,
    curtida tinyint,
    constraint fkCurtidaUsuario
		foreign key (fkUsuario)
			references dadosUsuarios(idUsuario),
	constraint fkCurtidaPost
		foreign key (fkPost) 
			references post(idPost)
);

show tables;
-- Alimentação teste

INSERT INTO dadosUsuarios (nome, email, senha, confirmarSenha, continente, cargo) VALUES
('Alice Silva', 'alice@email.com', '12345', '12345', 'América do Sul', 'Explorador'),
('Bruno Costa', 'bruno@email.com', 'senha123', 'senha123', 'Ásia', 'Pesquisador'),
('Camila Rocha', 'camila@email.com', 'senha456', 'senha456', 'Europa', 'Fotografo');

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