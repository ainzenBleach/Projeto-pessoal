const indexModel = require('../models/indexModel');

function informacaoPost(req, res) {

  indexModel.carregarPost()

  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}

function informacaoComentario(req, res) {
  indexModel.carregarComentario(req.params.idPost)
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}


function informacaoSalvarComentario(req, res) {

    var idUsuario = req.body.usuarioServer;
    var idPost = req.body.postServer;
    var comentario= req.body.comentarioServer;


  indexModel.salvarComentario(idUsuario, idPost, comentario)
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}



module.exports = { informacaoPost, informacaoComentario, informacaoSalvarComentario }