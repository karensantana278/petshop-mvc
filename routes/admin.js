var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

const servicos = []

router.get('/admin/servicos', (req,res) => {
    res.render('admin/servicos', {servicos: servicos})
})

router.get('/admin/servicos/cadastrar', (req, res) => {
    res.render('admin/servicosCadastrar')
})

router.post('/admin/servicos/acaoCadastrar', (req, res) => {
    const nome = req.body.nome
    const preco = req.body.preco
    const descricao = req.body.descricao

    const objServico = {
        id: uuidv4(),
        nome: nome,
        preco: preco,
        descricao: descricao,
    }
    console.log(objServico)

    servicos.push(objServico)
    res.redirect('/admin/servicos')
})

module.exports = router;
