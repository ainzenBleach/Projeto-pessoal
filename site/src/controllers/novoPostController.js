const novoPostModel = require('../models/novoPostModel');


function salvar(req, res) {
  const imagem = req.file.filename;

  const {titulo, descricao, idUsuario} = req.body

  const post = { titulo, descricao, imagem, idUsuario}
  
  novoPostModel.salvar(post)
  .then(resultado => {
    res.status(201).send("Post salvo com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}

// function buscarUsuarioPeloId(req, res) {
//   console.log(req.params.id);
//   usuarioModel.buscarUsuarioPeloId(req.params.id)
//   .then(resultado => {
//     res.json(resultado);
//   }).catch(err => {
//     res.status(500).send(err);
//   });
// }

module.exports = { salvar
//  , buscarUsuarioPeloId 
}