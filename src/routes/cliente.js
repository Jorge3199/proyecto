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
const { isLoggedIn1, isNotLoggedIn1 } = require('../lib/auth1');
const stripe = require('stripe')('sk_test_sWHCKBiXFFGfdGLtpjK4KgDT00ibQv3arz');


require('dotenv').config();

app.use(session({
    secret : 'hola',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

router.get('/', isLoggedIn1, async (req, res) => {
    const productos = await pool.query('SELECT * FROM producto WHERE estado="A" ');  
    var cliente=req.user;
    const favorito = await pool.query('SELECT * FROM favorito WHERE id_cliente = ? and estado="A" ',[cliente.id]);     
    const categoria = await pool.query('SELECT * FROM categoria');   
    res.render('cliente/cliente', { productos, favorito, categoria });
         
});


// SIGNUP
router.post('/cliente_signup', isLoggedIn, passport.authenticate('local.cliente_signup', {
    successRedirect: '/cliente_logout',
    failureRedirect: '/cliente_logout',
    failureFlash: true
}));

// SIGNIN
router.get('/cliente_signin', isNotLoggedIn1, (req, res) => {
    res.render('cliente/cliente_signin');
});
router.post('/cliente_signin', isNotLoggedIn1, (req, res, next) => {

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


router.post('/agregar_favorito', isLoggedIn1, async (req, res) => {
    // const { datos} = req.body;
    const { id_producto } = req.body;
    var cliente=req.user;
    var id_cliente=cliente.id;
    var estado="A";
    const newFavorito = {
        id_cliente,
        id_producto,
        estado
    };
    // console.log(newFavorito);
    await pool.query('INSERT INTO favorito set ?', [newFavorito]);
    // res.redirect('/cliente_signin');
    const favorit = await pool.query('SELECT * FROM favorito WHERE id_cliente = ? and estado="A" ',[cliente.id]);
    //console.log(favorit);
    res.json(favorit);
});

router.post('/delete_favorito', isLoggedIn1, async (req, res) => {
    const { id_producto} = req.body;
    var cliente=req.user;

   
    await pool.query('UPDATE favorito SET estado="I" WHERE id_cliente = ? and id_producto = ?', [cliente.id, id_producto]);
    const favorit = await pool.query('SELECT * FROM favorito WHERE id_cliente = ? and estado="A" ',[cliente.id]);
    //console.log(favorit);
    res.json(favorit);
    
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

router.post('/todos_productos', isLoggedIn1, async (req, res) => {
     
    const products= await pool.query('SELECT * FROM producto WHERE estado="A" ');

    res.json(products);
});

//////////////////pago////////////////////////
router.post('/pago', isLoggedIn1, async (req, res) => {

   var hoy = new Date();
   var fecha= hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getUTCFullYear();
   var hora= hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
   var fecha_hora= fecha + " " + hora;

    var cliente=req.user;
    const { comprar } = req.body;
    // console.log(req.body);
    var id_cliente = cliente.id;
    var lista_comprar = JSON.parse(comprar);
    var pedidos = [];
    var valor;
    var total=0;
    var encontrado=0;
   
    var cuerpotHTML='';

    for (var i=lista_comprar.length-1; i>=0;i--) { 

        var productos = await pool.query('SELECT * FROM producto WHERE id=? AND estado="A" ', [lista_comprar[i].id]);
       
        if(productos.length != 0){
           
            var a = parseInt(productos[0].cantidad);
        
            if(a >= lista_comprar[i].cantidad){
                valor= (a - lista_comprar[i].cantidad);
                await pool.query('UPDATE producto set cantidad=? WHERE id = ?', [valor, lista_comprar[i].id]);
                var id_producto= parseInt(productos[0].id);
                var unidad= parseInt(lista_comprar[i].cantidad);
                var precio= parseInt(productos[0].precio);
                var importe= unidad * precio;
                total+= importe;
                const newDetalle = {
                    id_cliente,
                    id_producto,
                    unidad,
                    precio,
                    importe,
                    fecha_hora
                };
            
                await pool.query('INSERT INTO detalle set ?', [newDetalle]);
                //console.log(total);
                //console.log(productos);
            
                if(valor < 10){
                    pedidos[pedidos.length] = { id: productos[0].id, nombre: productos[0].nombre, modelo: productos[0].modelo, imagen: productos[0].imagen };
                }
            }
            
            if(a < lista_comprar[i].cantidad){
                await pool.query('UPDATE producto set cantidad=? WHERE id = ?', [0, lista_comprar[i].id]);
                pedidos[pedidos.length] = { id: productos[0].id, nombre: productos[0].nombre, modelo: productos[0].modelo, imagen: productos[0].imagen };
                valor= (a - lista_comprar[i].cantidad);

            }

        
            cuerpotHTML += `
            <tbody style="color:black; text-align: center;">
                <td>${lista_comprar[i].cantidad}</td> <td>${lista_comprar[i].nombre}</td> <td>${lista_comprar[i].precio}</td> <td>${lista_comprar[i].modelo}</td> <td>${importe}</td>
            </tbody>
            <tbody id="resultado" style="color:black; text-align: center;">
                <td><hr color="black" size=1></td>  <td><hr color="black" size=1></td> <td><hr color="black" size=1></td> <td><hr color="black" size=1></td> <td><hr color="black" size=1></td>
            </tbody>
            `;
        }

        if(productos.length === 0){
            encontrado=1;
        }

    }
    
    var estado="P";
    const newCompra = {
        id_cliente,
        total,
        fecha_hora,
        estado
    };

    await pool.query('INSERT INTO compra set ?', [newCompra]);
    
    var pagar = Math.round((total / 50) * 100);
 

    const customer = await stripe.customers.create({
        email: cliente.correo,
        source: req.body.stripeToken
    });
    const charge = await stripe.charges.create({
        amount: pagar,
        currency: 'usd',
        customer: customer.id,
        description: 'Compra De Producto'
    });

    // console.log(charge.id);
    //res.redirect('/cliente');
    var smtpTransport= nodemailer.createTransport({
        service: 'gmail',
        auth:{
            type: 'login',
            user: 'supergato3199@gmail.com',
            pass: 'supergato2020'
        }
    });


    contentHTML = `
       <h1 style="color:black; text-align: center;">Super Gato</h1>
       <p style="color:black; text-align: center;">Santo Domingo, Km 11/2</p>
       <p style="color:black; text-align: center;">Tel(s):809-573-3711</p>
       <p style="color:black; text-align: center;">RNC: 103003133</p>
       <p style="color:black; text-align: center;">-----------------------------------</p>
       <br/>
       <table width="75%" align="center" style=" background: rgb(240, 239, 239);">
         
       <thead style="background-color:#FFC312; color:black;" align="center">
         <tr>
           <th>Cant.</th>  
           <th>Nombre</th>
           <th>Precio</th>
           <th>Modelo</th>
           <th>Importe</th>
         </tr>
       </thead>
       

    `;
   contentHTML +=cuerpotHTML;

    contentHTML += `
    <tbody style="color:black; text-align: center;">
      <th></th> <th></th> <th>Sub-Total:</th> <th>0.00</th>
    </tbody>
    <tbody style="color:black; text-align: center;">
      <th></th> <th></th> <th>DESCUENTO:</th> <th>0.00</th>
    </tbody>
    <tbody style="color:black; text-align: center;">
       <th></th> <th></th> <th>ITBIS:</th> <th>0.00</th>
    </tbody>
    <tbody style="color:black; text-align: center;">
       <th></th> <th></th> <th>TOTAL:</th> <th>${total}</th>
    </tbody>
    
    `;

    
  
    contentHTML+=`
    </table> 
    <p style="color:black; text-align: center;">-----------------------------------</p>
    `;  
   
    
    var mailOptions={
    from:'jose',
    to: cliente.correo,
    subject: 'Factura de producto',
    text: 'Hola_Mundo',
    html: contentHTML      
    }

  
    await smtpTransport.sendMail(mailOptions,function(error,res){
        if(error){
        console.log(error);
        }else{
           
           res.send('Mensaje Enviado');
        }
    });
    //res.render('cliente/mensaje');
    // res.json('pago03');
    
    if(encontrado == 0){
        var producto = await pool.query('SELECT * FROM producto WHERE estado="A" ');
        res.json(producto);
    }

    if(encontrado == 1){
        res.json(encontrado);
    }
   
    
});


router.post('/cambiar_imagen', isLoggedIn1, async (req, res) => {
    var imagen = (req.file['filename']);
    var cliente=req.user;

    await pool.query('UPDATE cliente set imagen = ? WHERE id = ?', [imagen, cliente.id]);

    const datos = await pool.query('SELECT * FROM cliente WHERE estado1="A" AND id = ? ', [cliente.id]);

    res.json(datos);
    
});

router.post('/editar_informacion', isLoggedIn1, async (req, res) => {
    var { telefono, correo} = req.body;
    var cliente=req.user;

    const newLink = {
        telefono,
        correo
    };

    await pool.query('UPDATE cliente set ? WHERE id = ?', [newLink, cliente.id]);

    const datos = await pool.query('SELECT * FROM cliente WHERE estado1="A" AND id = ? ', [cliente.id]);

    res.json(datos);
    
});

router.post('/cambiar_contrasena', isLoggedIn1, async (req, res) => {
    var { actual, contrasena} = req.body;
    var cliente=req.user;

    const validPassword = await helpers.matchPassword(actual, cliente.contrasena);
    if (validPassword) {
        contrasena = await helpers.encryptPassword(contrasena);
        await pool.query('UPDATE cliente set contrasena = ? WHERE id = ?', [contrasena, cliente.id]);
       
        res.json('confirmacion');
    } else {
        res.json('invalido');
    }

});
module.exports = router;