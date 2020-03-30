const pool = require('../database');
module.exports = {
    async isLoggedIn1 (req, res, next) {
        
        if (req.isAuthenticated()) {
            var a=req.user;

            const lista = await pool.query('SELECT * FROM cliente WHERE estado1 = "A" AND id = ? AND contrasena = ?', [a.id, a.contrasena]);

            if(lista.length === 0){
                return res.redirect('/administrador');
            }

            if(lista.length === 1){
                return next();
            }
        }
        return res.redirect('/cliente_signin');
    },

    isNotLoggedIn1(req, res, next) {

        if (!req.isAuthenticated()) {
           
            return next();
        }
        return res.redirect('/cliente');
    }
};