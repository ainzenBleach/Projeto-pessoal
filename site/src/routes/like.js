var express = require("express");
var router = express.Router();

var likeController = require("../controllers/likeController")

// Carregar os ups e downs dos post
router.get('/carregarLikeUp/:idPost', (req, res) => {
  likeController.informacaoLikeUp(req, res);
});

router.get('/carregarLikeDown/:idPost', (req, res) => {
  likeController.informacaoLikeDown(req, res);
});

// Checar se o usuario já deu um up ou down no post
router.get('/carregarLikeUsuario/:idUsuario/:idPost', (req, res) => {
  likeController.informacaoLikeUsuario(req, res);
});

// router.get('/carregarLikeUsuarioUp/:idUsuario', (req, res) => {
//   likeController.informacaoLikeUsuarioUp(req, res);
// });

// router.get('/carregarLikeUsuarioDown/:idUsuario', (req, res) => {
//   likeController.informacaoLikeUsuarioDown(req, res);
// });


// Sistema para contabilizar os ups e downs
router.post('/upInserir/:idUsuario/:idPost', (req, res) => {
  likeController.upUsuarioInserir(req, res);
});

router.post('/downInserir/:idUsuario/:idPost', (req, res) => {
  likeController.downUsuarioInserir(req, res);
});

router.post('/updateLike/:idUsuario/:idPost/:troca', (req, res) => {
  likeController.updateUsuarioLike(req, res);
});

module.exports = router;