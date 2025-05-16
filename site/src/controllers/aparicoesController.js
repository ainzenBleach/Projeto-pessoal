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
    aparicoesModel.carregarAparicoesCurtida()

  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });

}

function informacaoAparicoesUp(req, res){
    aparicoesModel.carregarAparicoesUp()

  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });

}


module.exports = {
informacaoAparicoesImagem,
informacaoAparicoesCurtida,
informacaoAparicoesUp
}