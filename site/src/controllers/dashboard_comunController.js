const dashboard_comunModel = require('../models/dashboard_comunModel');

function informacaoDash(req, res){
    var idUsuario = req.params.idUsuario

    dashboard_comunModel.carregarPostUsuariosDash(idUsuario)

    .then(resultado => {
        res.json(resultado);
    }).catch(err => {
        res.status(500).send(err);
    });
}

function informacaoUpDown(req, res){
    var idPost = req.params.idPost

    dashboard_comunModel.carregarUpDownUsuariosDash(idPost)

    .then(resultado => {
        res.json(resultado);
    }).catch(err => {
        res.status(500).send(err);
    });
}

function informacaoComentarios(req, res){
    var idPost = req.params.idPost

    dashboard_comunModel.carregarComentariosDash(idPost)

    .then(resultado => {
        res.json(resultado);
    }).catch(err => {
        res.status(500).send(err);
    });
}

module.exports = {informacaoDash, informacaoUpDown, informacaoComentarios}