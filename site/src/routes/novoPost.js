const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
const novoPostController = require('../controllers/novoPostController');


// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/novoPost', upload.single('foto'), (req, res) => {
  novoPostController.salvar(req, res);
});


module.exports = router;