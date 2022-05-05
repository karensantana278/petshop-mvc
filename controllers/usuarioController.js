const bcrypt = require("bcryptjs");
const req = require("express/lib/request");

const bancoUsuarios = [];

const UsuarioController = {
    cadastrar: (req, res) => {
        res.render("admin/usuariosCadastrar");
    },
    acaoCadastrar: (req, res) => {
        const { nome, login, senha } = req.body;

        const objUsuario = {
            nome: nome,
            login: login,
            senha: bcrypt.hashSync(senha)
        };

        bancoUsuarios.push(objUsuario);

        res.redirect("/admin/usuarios/cadastrar");
    },
    login: (req, res) => {
        res.render("admin/login");
    },
    acaoLogin: (req, res) => {
        const { login, senha } = req.body;

        const usuarioEncontrado = bancoUsuarios.find((obj) => obj.login == login);
        if(usuarioEncontrado == null){
            res.redirect("/admin/login");
        }else{
            const resultado = bcrypt.compareSync(senha, usuarioEncontrado.senha);
            if(resultado){
                req.session.loginUsuario = usuarioEncontrado.login;
                req.session.nomeUsuario = usuarioEncontrado.nome;
            }else{
                res.redirect("/admin/login");
            }
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect("/");
    }
};

module.exports = UsuarioController;