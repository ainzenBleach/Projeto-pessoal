const express = require('express');
const router = express.Router();
const dashboard_comunController = require('../controllers/dashboard_comunController');

router.get('/carregarPostUsuario/:idUsuario', (req, res) => {
  dashboard_comunController.carregarPost(req, res);
});

router.get('/carregarUpDownUsuario/:idPost', (req, res) => {
  dashboard_comunController.informacaoUpDown(req, res);
});

router.get('/carregarComentariosUsuario/:idPost', (req, res) => {
  dashboard_comunController.informacaoComentarios(req, res);
});

router.get('/carregarDadosUsuario/:idUsuario', (req, res) => {
  dashboard_comunController.informacaoPerfil(req, res);
});





module.exports = router;


