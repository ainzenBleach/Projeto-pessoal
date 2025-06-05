const likeModel = require('../models/likeModel');

// Carregar os ups e downs dos post
function informacaoLikeUp(req, res) {
idPost = req.params.idPost

  likeModel.carregarLikeUp(idPost)
  
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}

function informacaoLikeDown(req, res) {
idPost = req.params.idPost

  likeModel.carregarLikeDown(idPost)
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}

// Checar se o usuario já deu um up ou down no post
function informacaoLikeUsuario(req, res){
  idUsuario = req.params.idUsuario
  idPost = req.params.idPost

  likeModel.carregarLikeUsuario(idUsuario, idPost)
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
  informacaoLikeUsuario, 
  updateUsuarioLike 
  }