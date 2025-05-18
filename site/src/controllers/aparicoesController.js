const aparicoesModel = require('../models/aparicoesModel');

// function informacaoPost(req, res) {

//   indexModel.carregarPost()

//   .then(resultado => {
//     res.json(resultado);
//   }).catch(err => {
//     res.status(500).send(err);
//   });
// }

function informacaoAparicoesImagem(req, res){

    aparicoesModel.carregarAparicoesImagem()

  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });

}

function informacaoAparicoesCurtida(req, res){

    var idPost = req.params.idPost

    aparicoesModel.carregarAparicoesCurtida(idPost)

  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });

}

function informacaoAparicoesComentarios(req, res){
    var idPost = req.params.idPost

    aparicoesModel.carregarAparicoesComentarios(idPost)

  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });

}


module.exports = {
informacaoAparicoesImagem,
informacaoAparicoesCurtida,
informacaoAparicoesComentarios
}