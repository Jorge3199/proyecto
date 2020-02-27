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
const { isLoggedIn1, isNotLoggedIn1 } = require('../lib/auth1');
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use(session({
    secret : 'hola',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

router.get('/', async (req, res) => {
    const productos = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    // console.log(links);
    // const token1= (process.env.token1)
    var a=req.user;
    if(typeof a !== "undefined"){
        const datos = await pool.query('SELECT * FROM cliente WHERE id = ?', [a.id]);        
        console.log('hola');
        if(datos.length === 1){
            res.render('cliente/cliente', { productos });
            return false;
        }
        console.log(a);
    }



    res.render('cliente/super_gato', { productos, a });
    // res.send('lista iran aqui');
});


// SIGNUP
router.get('/cliente_signup', isNotLoggedIn1, (req, res) => {
    res.render('cliente/cliente_signup');
});

router.post('/cliente_signup', isNotLoggedIn1, passport.authenticate('local.cliente_signup', {
    successRedirect: '/cliente_signin',
    failureRedirect: '/cliente_signup',
    failureFlash: true
}));

// SIGNIN
router.get('/cliente_signin', isNotLoggedIn1, (req, res) => {
    res.render('cliente/cliente_signin');
});
router.post('/cliente_signin', isNotLoggedIn1, (req, res, next) => {
    // req.check('username', 'Username is Required').notEmpty();
    // req.check('password', 'Password is Required').notEmpty();
    // const errors = req.validationErrors();
    // if (errors.length > 0) {
    //   req.flash('message', errors[0].msg);
    //   res.redirect('/signin');
    // }
    passport.authenticate('local.cliente_signin', {
      successRedirect: '/cliente',
      failureRedirect: '/cliente_signin',
      failureFlash: true
    })(req, res, next);
});

  
router.get('/cliente_logout', isLoggedIn1, (req, res) => {
    req.logOut();
    res.redirect('/cliente_signin');
});


router.post('/lista_favorito/:id_cliente/:id_producto', async (req, res) => {
    // const { datos} = req.body;
    const { id_cliente, id_producto } = req.params;
    const newFavorito = {
        id_cliente,
        id_producto
    };
    // console.log(newFavorito);
    await pool.query('INSERT INTO favorito set ?', [newFavorito]);
    // res.redirect('/cliente_signin');
});

//////////////////RECUPERAR_CONTRASENA////////////////////////
router.get('/c_recuperar_contrasena', isNotLoggedIn1, (req, res) => {
    res.render('cliente/recuperar_contrasena');
});

////////////////////////////////


router.post('/c_recuperar_contrasena', isNotLoggedIn1, async(req, res) => {
    const { correo } = req.body; 
    const lista = await pool.query('SELECT * FROM cliente WHERE correo = ?', [correo]);
    
    
    if(lista.length != 0){
       // res.send(lista[0].usuario);
       var aleatorio = Math.random();
       const b = {
            aleatorio
        };

       var id = lista[0].id;
       var nombre = lista[0].nombre;
       await pool.query('UPDATE cliente set ? WHERE id = ?', [b, id]);
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
            <a href="http://localhost:4000/c_cambiar_contrasena/${aleatorio}">
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
                res.render('cliente/recuperar_contrasena');
            // res.send('Mensaje Enviado');
            }
        });
        res.render('cliente/mensaje');
   
       
        //res.redirect('/signin');
    }
    if(lista.length === 0){
       // a=Math.random();
       req.flash('message', 'error, este correo no esta registrado');
       // res.send("error, este correo no esta registrado");
        // res.send(lista);
         res.redirect('/c_recuperar_contrasena');
    }
    
});

/////////////////////////CAMBIAR_CONTRASEÑA////////////////////////
router.get('/c_cambiar_contrasena/:aleatorio', isNotLoggedIn1, async (req, res) => {
    const { aleatorio } = req.params;
    const links = await pool.query('SELECT * FROM cliente WHERE aleatorio = ?', [aleatorio]);
    if(links.length != 0){
        res.render('cliente/cambiar_contrasena', {link: links[0]});
    }
    if(links.length === 0){
        req.flash( 'error' , '¡ Flash está de vuelta! ' ) ;
        res.render('cliente/continuar');
    }
  
});

router.post('/c_cambiar_contrasena/:aleatorio', isNotLoggedIn1, async (req, res) => {
    const { aleatorio } = req.params;
    const { contrasena } = req.body;
    const newUser = {
      contrasena,
      aleatorio
    };
    //newUser.contrasena = await helpers.encryptPassword(contrasena);
    // Saving in the Database
    const a = await pool.query('SELECT * FROM cliente WHERE aleatorio = ?', [aleatorio]);
    var id = a[0].id;

    newUser.contrasena = await helpers.encryptPassword(contrasena);
    newUser.aleatorio = Math.random();

    await pool.query('UPDATE cliente set ? WHERE id = ?', [newUser, id]);



   // res.send(contrasena);
    res.redirect('/cliente_signin');
   
});

//////////////////pago////////////////////////

router.post('/pago', isLoggedIn1, async (req, res) => {
    console.log(req.body);

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
    res.redirect('/cliente');
    
});

module.exports = router;