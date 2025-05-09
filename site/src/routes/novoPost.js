const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
const novoPostController = require('../controllers/novoPostController');

router.get("", (req, res) => {
  res.render("index")
});

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/novoPost', upload.single('foto'), (req, res) => {
  novoPostController.salvar(req, res);
});

// router.get('/:id', upload.single('foto'), (req, res) => {
//   usuarioController.buscarUsuarioPeloId(req, res);
// });

module.exports = router;