const express = require('express');
const router = express.Router();
const dashboard_comunController = require('../controllers/dashboard_comunController');

router.get('/carregarDashUsuario/:idUsuario', (req, res) => {
  dashboard_comunController.informacaoDash(req, res);
});

router.get('/carregarUpDownUsuario/:idPost', (req, res) => {
  dashboard_comunController.informacaoUpDown(req, res);
});

router.get('/carregarComentariosUsuario/:idPost', (req, res) => {
  dashboard_comunController.informacaoComentarios(req, res);
});





module.exports = router;


