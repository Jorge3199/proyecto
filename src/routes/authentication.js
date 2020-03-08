const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
var flash = require('express-flash');
var session = require('express-session');
var app = express();
//var  flash  = require ( ' express-flash-2 ' ) ;
const pool = require('../database');
const passport = require('passport');
const helpers = require('../lib/helpers');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');
const stripe = require('stripe')('sk_test_sWHCKBiXFFGfdGLtpjK4KgDT00ibQv3arz');


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
    
    // successRedirect: '/administrador',
    // failureRedirect: '/signup',
    // failureFlash: true
}));

router.post('/cliente_signup', isLoggedIn, passport.authenticate('local.cliente_signup', {
    
    // successRedirect: '/administrador',
    // failureRedirect: '/signup',
    // failureFlash: true
}));

// SIGNIN
router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('auth/signin');
});
router.post('/signin', isNotLoggedIn, (req, res, next) => {
    // req.check('username', 'Username is Required').notEmpty();
    // req.check('password', 'Password is Required').notEmpty();
    // const errors = req.validationErrors();
    // if (errors.length > 0) {
    //   req.flash('message', errors[0].msg);
    //   res.redirect('/signin');
    // }
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

////////////////////////////////


router.post('/recuperar_contrasena', isNotLoggedIn, async(req, res) => {
    const { correo } = req.body; 
    const lista = await pool.query('SELECT * FROM administrador WHERE correo = ?', [correo]);
    
    
    if(lista.length != 0){
       // res.send(lista[0].usuario);
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
            type: 'login',
            user: 'supergato3199@gmail.com',
            pass: 'supergato2020'
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

       //res.send(lista[0]);
       await smtpTransport.sendMail(mailOptions,function(error,res){
            if(error){
            console.log(error);
            }else{
                res.render('auth/recuperar_contrasena');
            // res.send('Mensaje Enviado');
            }
        });
        res.render('auth/mensaje');
   
       
        //res.redirect('/signin');
    }
    if(lista.length === 0){
       // a=Math.random();
       req.flash('message', 'error, este correo no esta registrado');
       // res.send("error, este correo no esta registrado");
        // res.send(lista);
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
   // res.send(links);
    //res.render('auth/cambiar_contrasena', {link: links[0]});
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




//////////////////pago////////////////////////
router.get('/pago1', isLoggedIn, (req, res) => {
    res.render('auth/pago');
});

router.post('/pago1', isLoggedIn, async (req, res) => {
    // console.log(req.body);

    // const customer = await stripe.customers.create({
    //     email: req.body.stripeEmail,
    //     source: req.body.stripeToken
    // });
    // const charge = await stripe.charges.create({
    //     amount: '3000',
    //     currency: 'usd',
    //     customer: customer.id,
    //     description: 'Compra De Producto'
    // });

    // console.log(charge.id);
    res.redirect('/links');
    
});

router.post('/agregar_modelo/:id_administrador', isLoggedIn, async (req, res) => {
    // console.log(req.body);
    const { id_administrador} = req.params;
    const { modelo } = req.body;

    const newModelo = {
        id_administrador,
        modelo
    };
    // console.log(newModelo);
    await pool.query('INSERT INTO categoria set ?', [newModelo]);
  
});       

module.exports = router;