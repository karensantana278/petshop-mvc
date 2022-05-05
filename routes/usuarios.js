var express = require('express');
var router = express.Router();
var UsuariosController = require("../controllers/usuarioController");

router.get("/cadastrar", UsuariosController.cadastrar);
router.post("/cadastrar", UsuariosController.acaoCadastrar);

module.exports = router;