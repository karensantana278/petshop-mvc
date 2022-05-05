var express = require('express');
const path = require("path");
var multer = require('multer');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
var UsuarioController = require("../controllers/usuarioController");

let servicos = [];

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/uploads");
    },
    filename: function(req, file, cb){
        cb(null, "imagem_upload_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.get('/admin/servicos', (req,res) => {
    res.render('admin/servicos', {servicos: servicos})
})

router.get('/admin/servicos/cadastrar', (req, res) => {
    res.render('admin/servicosCadastrar')
})

router.post('/admin/servicos/acaoCadastrar', upload.single("imagemServico"), (req, res) => {
    const nome = req.body.nome
    const preco = req.body.preco
    const descricao = req.body.descricao
    const imagem = req.file.filename

    const objServico = {
        id: uuidv4(),
        nome: nome,
        preco: preco,
        descricao: descricao,
        imagem: imagem
    }
    
    servicos.push(objServico)
    res.redirect('/admin/servicos')
})

router.get("/admin/servicos/excluir/:idServico", function(req, res){
    servicos = servicos.filter((servico) => servico.id != req.params.idServico);

    res.redirect("/admin/servicos")
});

module.exports = router;
