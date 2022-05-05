const autenticacao = (req, res, next) => {
    if(!req.session.loginUsuario){
        res.redirect("/login");
    }else{
        next();
    }
}

module.exports = autenticacao;