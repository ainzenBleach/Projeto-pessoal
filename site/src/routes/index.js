const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload');
const indexController = require('../controllers/indexController');

router.get("/", function (req, res) {
    res.render("index");
});

router.get('/carregarPost', (req, res) => {
  indexController.informacaoPost(req, res);
  
});

router.get('/carregarComentario/:idPost', (req, res) => {
  indexController.informacaoComentario(req, res);
});

module.exports = router;


