const express = require('express');
const router = express.Router();


const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');
const helpers = require('../lib/helpers');
const { format } = require('timeago.js');


router.get('/', isLoggedIn, async (req, res) => {
    
    const productos = await pool.query('SELECT * FROM producto WHERE estado="A" OR estado="P" ');
    
    const categoria = await pool.query('SELECT * FROM categoria');
    res.render('administrador/administrador', { productos, categoria });
   
});

router.post('/delete', isLoggedIn, async (req, res) => {
    const { id } = req.body;
    await pool.query('UPDATE producto SET estado="I" WHERE id = ?', [id]);
    
    const producto = await pool.query('SELECT * FROM producto WHERE estado="A" OR estado="P" ');
    for(var n=0; n<producto.length; n++){
        producto[n].fecha_hora = (format(producto[n].fecha_hora, 'es_ES') );
    }
    res.json(producto);
});

router.post('/editar', isLoggedIn, async (req, res) => {
  
    var {id, nombre, cantidad, precio, id_modelo, imagen } = req.body; 
    
    if(req.files.length !== 0){
        for(var n=0; n<req.files.length; n++){
            if(n == 0 && imagen != ''){
                imagen += ' '; 
            }
            imagen += (req.files[n]['filename']);
            if(n != req.files.length -1){
               imagen += ' ';
            }
        }
    }
   
    var newLink = { nombre, cantidad, precio, id_modelo, imagen};

    await pool.query('UPDATE producto set ? WHERE id = ?', [newLink, id]);
      
    const producto = await pool.query('SELECT * FROM producto WHERE estado="A" OR estado="P" ');
    for(var n=0; n<producto.length; n++){
        producto[n].fecha_hora = (format(producto[n].fecha_hora, 'es_ES') );
    }
    
    res.json(producto);
});


router.post('/add', isLoggedIn, async (req, res) => {
//    console.log(req.files);
  
   var imagen= '';
   for(var n=0; n<req.files.length; n++){
     imagen += (req.files[n]['filename']);
     if(n != req.files.length -1){
        imagen += ' ';
     }
   }
 
   var administrador=req.user;
   var id_administrador= administrador.id;
    var estado='A';
    var { nombre, precio, id_modelo, cantidad} = req.body;
   
    
    const newLink = {
        nombre,
        imagen,
        precio,
        id_modelo,
        cantidad,
        estado,
        id_administrador
       
    };
    // console.log(newLink);
    await pool.query('INSERT INTO producto set ?', [newLink]);

    const producto = await pool.query('SELECT * FROM producto WHERE estado="A" OR estado="P" ');
    for(var n=0; n<producto.length; n++){
        producto[n].fecha_hora = (format(producto[n].fecha_hora, 'es_ES') );
    }
    
    res.json(producto);
   
});

router.post('/agregar_modelo', isLoggedIn, async (req, res) => {
   
    const { modelo } = req.body;
    var administrador=req.user;
    var id_administrador= administrador.id;

    const newModelo = {
        id_administrador,
        modelo
    };
    // console.log(newModelo);
    await pool.query('INSERT INTO categoria set ?', [newModelo]);

    const categoria1 = await pool.query('SELECT * FROM categoria');
    res.json(categoria1);
  
}); 

router.post('/editar_modelo/:id', isLoggedIn, async (req, res) => {
   
    const { modelo } = req.body;
    const { id } = req.params;
    var administrador=req.user;
    var id_administrador= administrador.id;

    const newModelo = {
        id_administrador,
        modelo
    };
   
    await pool.query('UPDATE categoria set ? WHERE id = ?', [newModelo, id]);

    const categoria1 = await pool.query('SELECT * FROM categoria');
    res.json(categoria1);
  
}); 

router.post('/modelo', isLoggedIn, async (req, res) => {
    const modelo = await pool.query('SELECT modelo FROM categoria');
    // console.log(modelo);
    res.json(modelo);
  
});

router.post('/productos_eliminado', isLoggedIn, async (req, res) => {
     
    const producto = await pool.query('SELECT * FROM producto WHERE estado="I" ');
    
    res.json(producto);
});

router.post('/activar_producto', isLoggedIn, async (req, res) => {
    const { id } = req.body;
    await pool.query('UPDATE producto SET estado="A" WHERE id = ?', [id]);
    
    const producto = await pool.query('SELECT * FROM producto');
    for(var n=0; n<producto.length; n++){
        producto[n].fecha_hora = (format(producto[n].fecha_hora, 'es_ES') );
    }
    res.json(producto);
});

router.post('/venta', isLoggedIn, async (req, res) => {
     
    const venta1 = await pool.query('SELECT * FROM compra INNER JOIN cliente ON compra.id_cliente = cliente.id WHERE estado="P" ');

    res.json(venta1);
});

router.post('/todos_producto', isLoggedIn, async (req, res) => {
    const { id } = req.body;

    if(typeof id !== "undefined"){
        const products1 = await pool.query('SELECT * FROM producto WHERE estado="A" OR estado="P" ');
        for(var n=0; n<products1.length; n++){
            products1[n].fecha_hora = (format(products1[n].fecha_hora, 'es_ES') );
        }
        res.json(products1);
    }

    if(typeof id === "undefined"){
        const products1= await pool.query('SELECT * FROM producto');
        res.json(products1);
    }

});

router.post('/datos_factura', isLoggedIn, async (req, res) => {
    const { id_cliente, fecha_hora } = req.body;
     
    const datos1 = await pool.query('SELECT * FROM detalle WHERE id_cliente = ? AND fecha_hora = ? ', [id_cliente, fecha_hora]);

    res.json(datos1);
});

router.post('/factura_despachada', isLoggedIn, async (req, res) => {
    const { id_cliente, fecha_hora } = req.body;

    await pool.query('UPDATE compra SET estado="D" WHERE id_cliente = ? AND fecha_hora = ?', [id_cliente, fecha_hora]);
     
    const producto = await pool.query('SELECT * FROM compra WHERE estado="P" ');
    res.json(producto);
});

router.post('/vent_despachada', isLoggedIn, async (req, res) => {
     
    const venta2 = await pool.query('SELECT * FROM compra INNER JOIN cliente ON compra.id_cliente = cliente.id WHERE estado="D" ');
    

    res.json(venta2);
});

router.post('/recuperar_venta', isLoggedIn, async (req, res) => {
    const { id_cliente, fecha_hora } = req.body;

    await pool.query('UPDATE compra SET estado="P" WHERE id_cliente = ? AND fecha_hora = ?', [id_cliente, fecha_hora]);
     
    const venta2 = await pool.query('SELECT * FROM compra WHERE estado="D" ');
    res.json(venta2);
});

router.post('/productos_pedido', isLoggedIn, async (req, res) => {
     
    const producto = await pool.query('SELECT * FROM producto WHERE estado="P" OR estado="N" ');
    
    res.json(producto);
});

router.post('/lista_cliente', isLoggedIn, async (req, res) => {
     
    const cliente1 = await pool.query('SELECT * FROM cliente WHERE estado1="A" ');   

    res.json(cliente1);
});

router.post('/cambiar_contrasena/:id/:opcion', isLoggedIn, async (req, res) => {
    const { id, opcion } = req.params;
    var { actual, contrasena } = req.body;

    if(opcion == 1){
        contrasena = await helpers.encryptPassword(contrasena);
        await pool.query('UPDATE cliente SET contrasena = ? WHERE id = ?', [contrasena,id]);
   
        res.json('confirmacion');
    }

    if(opcion == 2){
        var admi=req.user;
        const validPassword = await helpers.matchPassword(actual, admi.contrasena);
        if (validPassword) {
            contrasena = await helpers.encryptPassword(contrasena);
            await pool.query('UPDATE administrador SET contrasena = ? WHERE id = ?', [contrasena,admi.id]);
        
            res.json('confirmacion');
        } else {
            res.json('invalido');
        }
        
    }

});

router.post('/eliminar_cliente', isLoggedIn, async (req, res) => {
    const { id} = req.body;

    await pool.query('UPDATE cliente SET estado1="I" WHERE id = ?', [id]);
     
    const cliente1 = await pool.query('SELECT * FROM cliente WHERE estado1="A" ');
    
    res.json(cliente1);
});

router.post('/cliente_eliminado', isLoggedIn, async (req, res) => {
     
    const cliente1 = await pool.query('SELECT * FROM cliente WHERE estado1="I" ');
    
    res.json(cliente1);
});

router.post('/activar_cliente', isLoggedIn, async (req, res) => {
    const { id} = req.body;

    await pool.query('UPDATE cliente SET estado1="A" WHERE id = ?', [id]);
     
    const cliente1 = await pool.query('SELECT * FROM cliente WHERE estado1="I" ');
    
    res.json(cliente1);
});

router.post('/editar_informacion/:id/:opcion', isLoggedIn, async (req, res) => {
    const { id, opcion } = req.params;
  
    var { nombre, apellido, sexo, nacimiento, direccion, telefono, cedula, correo} = req.body;

    var newLink;

    if(typeof req.file !== "undefined"){
        var imagen = (req.file['filename']);
        newLink = { nombre, apellido, sexo, nacimiento, direccion, telefono, cedula, correo, imagen };
    }
 
    if(typeof req.file === "undefined"){
        newLink = { nombre, apellido, sexo, nacimiento, direccion, telefono, cedula, correo };
    }

    if(opcion == 1){
        await pool.query('UPDATE cliente set ? WHERE id = ?', [newLink, id]);
  
        const datos = await pool.query('SELECT * FROM cliente WHERE estado1="A" ');
        
        res.json(datos);
    }

    if(opcion == 10){
        await pool.query('UPDATE cliente set ? WHERE id = ?', [newLink, id]);
  
        const datos = await pool.query('SELECT * FROM cliente WHERE estado1="I" ');
        
        res.json(datos);
    }

    if(opcion == 2){
        await pool.query('UPDATE administrador set ? WHERE id = ?', [newLink, id]);
  
        const datos = await pool.query('SELECT * FROM administrador WHERE id = ? ', [id]);
        
        res.json(datos);
    }
   
  
});

router.post('/informacion', isLoggedIn, async (req, res) => {
    const { opcion} = req.body;
    var informacion;
    
    if(opcion == 1 || opcion == 10){
        informacion = await pool.query('SELECT * FROM cliente');
    }

    if(opcion == 2){
        informacion = await pool.query('SELECT * FROM administrador');
    }
    
    res.json(informacion);
});

router.post('/eliminar_foto', isLoggedIn, async (req, res) => {
    const { id, opcion} = req.body;
    var imagen = 'perfil.jpg';
   
    if(opcion == 1){
        await pool.query('UPDATE cliente SET imagen = ? WHERE id = ?', [imagen, id]);
        const datos = await pool.query('SELECT * FROM cliente WHERE estado1="A" ');
        res.json(datos);
    }

    if(opcion == 10){
        await pool.query('UPDATE cliente SET imagen = ? WHERE id = ?', [imagen, id]);
        const datos = await pool.query('SELECT * FROM cliente WHERE estado1="I" ');
        res.json(datos);
    }

    if(opcion == 2){
        await pool.query('UPDATE administrador SET imagen = ? WHERE id = ?', [imagen, id]);
        const datos = await pool.query('SELECT * FROM  administrador');
        res.json(datos);
    }
    
});

module.exports = router;