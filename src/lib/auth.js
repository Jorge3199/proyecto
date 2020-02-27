const pool = require('../database');
module.exports = {
    async isLoggedIn (req, res, next) {
      

        if (req.isAuthenticated() ) {
            
            var a=req.user;
            // console.log(a.id);
            const lista = await pool.query('SELECT * FROM administrador WHERE id = ?', [a.id]);
            console.log(lista.length); 
            if(lista.length === 0){
                console.log('jorge');
                return res.redirect('/cliente');
            }

            if(lista.length === 1){
                console.log('jorge');
                return next();
            }
            // console.log(req.user);
            
        }
        
        return res.redirect('/signin');
    },

    isNotLoggedIn(req, res, next) {
         
        var a=req.user;
        // console.log(a.id);
        if(typeof a !== "undefined"){
            console.log('hola');
            console.log(a.id);
        }

        if(typeof a === "undefined"){
            console.log('hola1');
            // console.log(a.id);

        }

        if (!req.isAuthenticated()) {
           
            var a=req.user;
            // console.log(a.id);
            if(typeof a !== "undefined"){
                console.log('hola');
                console.log(a.id);
            }
            console.log(req.user);
            return next();
        }
        
        return res.redirect('/administrador');
    }
};