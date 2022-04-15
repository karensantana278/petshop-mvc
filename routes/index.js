var express = require('express');
var router = express.Router();
const petshopController = require('../controllers/petshopController');

/* GET home page. */
router.get('/', petshopController.home);
router.get('/cadastro', petshopController.cadastro);
router.get('/contato', petshopController.contato);
router.get('/login', petshopController.login);
router.get('/servicos', petshopController.servicos);
router.get('/sobre', petshopController.sobre);

module.exports = router;
