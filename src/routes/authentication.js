const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
var flash = require('express-flash');
var session = require('express-session');
var app = express();
const pool = require('../database');
const passport = require('passport');
const helpers = require('../lib/helpers');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');


app.use(session({
    secret : 'hola',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());


// SIGNUP
router.get('/signup', isLoggedIn, (req, res) => {
    res.render('auth/signup');
});

router.post('/administrador_signup', isLoggedIn, passport.authenticate('local.signup', {
    
    successRedirect: '/logout',
    failureRedirect: '/administrador',
    failureFlash: true
}));



// SIGNIN
router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('auth/signin');
});
router.post('/signin', isNotLoggedIn, (req, res, next) => {
    
    passport.authenticate('local.signin', {
      successRedirect: '/administrador',
      failureRedirect: '/signin',
      failureFlash: true
    })(req, res, next);
});

  
router.get('/logout', isLoggedIn, (req, res) => {
    req.logOut();
    res.redirect('/signin');
});
//////////////////RECUPERAR_CONTRASENA////////////////////////
router.get('/recuperar_contrasena', isNotLoggedIn, (req, res) => {
    res.render('auth/recuperar_contrasena');
});

router.post('/recuperar_contrasena', isNotLoggedIn, async(req, res) => {
    const { correo } = req.body; 
    const lista = await pool.query('SELECT * FROM administrador WHERE correo = ?', [correo]);
    
    
    if(lista.length != 0){
      
       var aleatorio = Math.random();
       const b = {
            aleatorio
        };

       var id = lista[0].id;
       var nombre = lista[0].nombre;
       await pool.query('UPDATE administrador set ? WHERE id = ?', [b, id]);
       var smtpTransport= nodemailer.createTransport({
        // host:'smtp.live.com',
        // port: 554,   
        // address: '192.168.0.108',
        service: 'gmail',
        auth:{
            user: 'aamotor18@gmail.com',
            pass: 'aamotor1234'
        }
        });


        contentHTML = `
            Hola, ${nombre}:
            </br></br>
            Recibimos una solicitud para restablecer tu contraseña de Super Gato.
            </br>
            <a href="http://localhost:4000/cambiar_contrasena/${aleatorio}">
                 <button style="background-color:#ffab02">Restablecer Contraseña</button>
            </a>
        `;
       
        var mailOptions={
        from:'jose',
        to: correo,
        subject: 'Recuperación de tu cuenta de Super Gato',
        text: 'Hola_Mundo',
        html: contentHTML      
        }

       
       await smtpTransport.sendMail(mailOptions,function(error,res){
            if(error){
            console.log(error);
            }else{
                res.render('auth/recuperar_contrasena');
            // res.send('Mensaje Enviado');
            }
        });
        res.render('auth/mensaje');
   
       
       
    }
    if(lista.length === 0){
      
       req.flash('message', 'error, este correo no esta registrado');
       
       res.redirect('/recuperar_contrasena');
    }
    
});

/////////////////////////CAMBIAR_CONTRASEÑA////////////////////////
router.get('/cambiar_contrasena/:aleatorio', isNotLoggedIn, async (req, res) => {
    const { aleatorio } = req.params;
    const links = await pool.query('SELECT * FROM administrador WHERE aleatorio = ?', [aleatorio]);
    if(links.length != 0){
        res.render('auth/cambiar_contrasena', {link: links[0]});
    }
    if(links.length === 0){
        req.flash( 'error' , '¡ Flash está de vuelta! ' ) ;
        res.render('auth/continuar');
    }

});

router.post('/cambiar_contrasena/:aleatorio', isNotLoggedIn, async (req, res) => {
    const { aleatorio } = req.params;
    const { contrasena } = req.body;
    const newUser = {
      contrasena,
      aleatorio
    };
    //newUser.contrasena = await helpers.encryptPassword(contrasena);
    // Saving in the Database
    const a = await pool.query('SELECT * FROM administrador WHERE aleatorio = ?', [aleatorio]);
    var id = a[0].id;

    newUser.contrasena = await helpers.encryptPassword(contrasena);
    newUser.aleatorio = Math.random();

    await pool.query('UPDATE administrador set ? WHERE id = ?', [newUser, id]);



   // res.send(contrasena);
    res.redirect('/signin');
   
});
     

module.exports = router;