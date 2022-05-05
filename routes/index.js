var express = require('express');
var router = express.Router();
const petshopController = require('../controllers/petshopController');
const UsuarioController = require("../controllers/usuarioController");

/* GET home page. */
router.get('/', petshopController.home);
router.get('/cadastro', petshopController.cadastro);
router.get('/contato', petshopController.contato);
router.get('/servicos', petshopController.servicos);
router.get('/sobre', petshopController.sobre);

router.get("/login", UsuarioController.login);
router.post("/login", UsuarioController.acaoLogin);
router.get("/logout", UsuarioController.logout);

module.exports = router;
