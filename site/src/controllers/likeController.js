const likeModel = require('../models/likeModel');

// Carregar os ups e downs dos post
function informacaoLikeUp(req, res) {
  likeModel.carregarLikeUp(req.params.idPost)
  
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}

function informacaoLikeDown(req, res) {
  likeModel.carregarLikeDown(req.params.idPost)
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}

// Checar se o usuario já deu um up ou down no post
function informacaoLikeUsuarioUp(req, res){
  likeModel.carregarLikeUsuarioUp(req.params.ID_USUARIO)
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500). send(err);
  });
}

function informacaoLikeUsuarioDown(req, res){
  likeModel.carregarLikeUsuarioDown(req.params.ID_USUARIO)
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500). send(err);
  });
}

// Sistema para contabilizar os ups e downs
function upUsuarioInserir(req, res){

  var idPost = req.params.idPost
  var idUsuario = req.params.idUsuario

  likeModel.upInserir(idPost, idUsuario)

  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500). send(err);
  });
}

function downUsuarioInserir(req, res){

 var idPost = req.params.idPost
  var idUsuario = req.params.idUsuario

  likeModel.downInserir(idPost, idUsuario)

  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500). send(err);
  });
}

// Sistema de atualizaçãao do like

function updateUsuarioLike(req, res){

var idPost = req.params.idPost
var idUsuario = req.params.idUsuario
var troca = req.params.troca

  likeModel.likeUpdate(idPost, idUsuario, troca)

  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500). send(err);
  });
}

module.exports = { 
  upUsuarioInserir, 
  downUsuarioInserir,
  informacaoLikeUp,
  informacaoLikeDown,
  informacaoLikeUsuarioUp, 
  informacaoLikeUsuarioDown,
  updateUsuarioLike 
  }