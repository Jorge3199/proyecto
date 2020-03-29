const express = require('express');
const router = express.Router();


const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');
const helpers = require('../lib/helpers');


router.get('/', isLoggedIn, async (req, res) => {
    const productos = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    
    const categoria = await pool.query('SELECT * FROM categoria');
    res.render('administrador/administrador', { productos, categoria });
   
});

router.post('/delete', isLoggedIn, async (req, res) => {
    const { id } = req.body;
    await pool.query('UPDATE producto SET estado="I" WHERE id = ?', [id]);
    
    const producto = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    res.json(producto);
});

router.post('/edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    var { nombre, cantidad, precio, id_modelo} = req.body;

    const newLink1 = {
        nombre,
        cantidad,
        precio,
        id_modelo
    };
    await pool.query('UPDATE producto set ? WHERE id = ?', [newLink1, id]);
  
    const producto = await pool.query('SELECT * FROM producto WHERE estado="A" ');
  
    res.json(producto);
  
});

router.post('/editar/:id', isLoggedIn, async (req, res) => {
  
    var imagen = (req.file['filename']);
    // console.log(req.file);
   
    var { nombre, cantidad, precio, id_modelo } = req.body; 

    const { id } = req.params;
    
    const newLink = {
        nombre,
        cantidad,
        precio,
        id_modelo,
        imagen
    };

   
    await pool.query('UPDATE producto set ? WHERE id = ?', [newLink, id]);
      
    const producto = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    
    res.json(producto);
});


router.post('/add', isLoggedIn, async (req, res) => {

    var imagen = (req.file['filename']);
   // console.log(req.file);
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
    
    await pool.query('INSERT INTO producto set ?', [newLink]);

    const producto = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    
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
    res.json(producto);
});

router.post('/venta', isLoggedIn, async (req, res) => {
     
    const venta1 = await pool.query('SELECT * FROM compra INNER JOIN cliente ON compra.id_cliente = cliente.id WHERE estado="P" ');

    res.json(venta1);
});

router.post('/todos_producto', isLoggedIn, async (req, res) => {
     
   
    const products1= await pool.query('SELECT * FROM producto');

    res.json(products1);
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

router.post('/lista_cliente', isLoggedIn, async (req, res) => {
     
    const cliente1 = await pool.query('SELECT * FROM cliente WHERE estado1="A" ');   

    res.json(cliente1);
});

router.post('/cambiar_contrasena/:id/:opcion', isLoggedIn, async (req, res) => {
    const { id, opcion } = req.params;
    var { contrasena } = req.body;
    contrasena = await helpers.encryptPassword(contrasena);

    if(opcion == 1){
        await pool.query('UPDATE cliente SET contrasena = ? WHERE id = ?', [contrasena,id]);
   
        res.json('edito');
    }

    if(opcion == 2){
        await pool.query('UPDATE administrador SET contrasena = ? WHERE id = ?', [contrasena,id]);
   
        res.json('edito');
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

    const newLink = {
        nombre,
        apellido,
        sexo,
        nacimiento,
        direccion,
        telefono,
        cedula,
        correo
    };
    if(opcion == 1){
        await pool.query('UPDATE cliente set ? WHERE id = ?', [newLink, id]);
  
        const datos = await pool.query('SELECT * FROM cliente WHERE estado1="A" ');
        
        res.json(datos);
    }

    if(opcion == 2){
        await pool.query('UPDATE administrador set ? WHERE id = ?', [newLink, id]);
  
        const datos = await pool.query('SELECT * FROM administrador WHERE id = ? ', [id]);
        
        res.json(datos);
    }
   
  
});

router.post('/editar_informacion2/:id/:opcion', isLoggedIn, async (req, res) => {
    const { id, opcion } = req.params;
    var imagen = (req.file['filename']);
    var { nombre, apellido, sexo, nacimiento, direccion, telefono, cedula, correo} = req.body;

    const newLink = {
        nombre,
        apellido,
        sexo,
        nacimiento,
        direccion,
        telefono,
        cedula,
        correo,
        imagen
    };
    if(opcion == 1){
        await pool.query('UPDATE cliente set ? WHERE id = ?', [newLink, id]);
  
        const datos = await pool.query('SELECT * FROM cliente WHERE estado1="A" ');
        
        res.json(datos);
    }

    if(opcion == 2){
        await pool.query('UPDATE administrador set ? WHERE id = ?', [newLink, id]);
  
        const datos = await pool.query('SELECT * FROM administrador WHERE id = ? ', [id]);
        
        res.json(datos);
    }
   
});


module.exports = router;