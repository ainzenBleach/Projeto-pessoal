const express = require('express');
const router = express.Router();
const aparicoesController = require('../controllers/aparicoesController');

// router.get('/carregarPost', (req, res) => {
//   indexController.informacaoPost(req, res);
  
// });

router.get("/carregarAparicoesImagem", (req, res) => {
    aparicoesController.informacaoAparicoesImagem(req, res)
});

router.get("/carregarAparicoesCurtida/:idPost", (req, res) => {
    aparicoesController.informacaoAparicoesCurtida(req, res)
});

router.get("/carregarAparicoesComentarios/:idPost", (req, res) => {
    aparicoesController.informacaoAparicoesComentarios(req, res)
});


module.exports = router;