const express = require('express');
const router = express.Router();
const aparicoesController = require('../controllers/aparicoesController');

// router.get('/carregarPost', (req, res) => {
//   indexController.informacaoPost(req, res);
  
// });

router.get("/carregarAparicoesImagem", (req, res) => {
    aparicoesController.informacaoAparicoesImagem(req, res)
});

router.get("/carregarAparicoesCurtida", (req, res) => {
    aparicoesController.informacaoAparicoesCurtida(req, res)
});

router.get("/carregarAparicoesUp", (req, res) => {
    aparicoesController.informacaoAparicoesUp(req, res)
});


module.exports = router;