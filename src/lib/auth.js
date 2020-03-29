const pool = require('../database');
module.exports = {
    async isLoggedIn (req, res, next) {
      

        if (req.isAuthenticated() ) {
            
            var a=req.user;
  
            const lista = await pool.query('SELECT * FROM administrador WHERE id = ? AND contrasena = ?', [a.id, a.contrasena]);

            if(lista.length === 0){
                return res.redirect('/cliente');
            }

            if(lista.length === 1){
                return next();
            }
            
        }
        
        return res.redirect('/signin');
    },

    isNotLoggedIn(req, res, next) {
         
        if (!req.isAuthenticated()) {
           
            return next();
        }
        
        return res.redirect('/administrador');
    }
};