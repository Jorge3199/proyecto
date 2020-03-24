const express = require('express');
const router = express.Router();


const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

// router.post('/links')
router.get('/', isLoggedIn, async (req, res) => {
    const productos = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    // const token1= (process.env.token1)
    const categoria = await pool.query('SELECT * FROM categoria');
    res.render('administrador/administrador', { productos, categoria });
    // res.send('lista iran aqui');
});

router.post('/delete', isLoggedIn, async (req, res) => {
    const { id } = req.body;
    await pool.query('UPDATE producto SET estado="I" WHERE id = ?', [id]);
    
    const producto = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    res.json(producto);
});

router.post('/edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    var { nombre, precio, id_modelo} = req.body;

    const newLink1 = {
        nombre,
        precio,
        id_modelo
    };
    await pool.query('UPDATE producto set ? WHERE id = ?', [newLink1, id]);
    // res.send(newLink1);
    //res.redirect('/administrador');
    const producto = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    // console.log(productos);
    res.json(producto);
  
});

router.post('/editar/:id', isLoggedIn, async (req, res) => {
  
    var imagen = (req.file['filename']);
    // console.log(req.file);
   
    var { nombre, precio, id_modelo } = req.body; 

    const { id } = req.params;
    
    const newLink = {
        nombre,
        precio,
        id_modelo,
        imagen
    };

   
    await pool.query('UPDATE producto set ? WHERE id = ?', [newLink, id]);
      
    const producto = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    // console.log(productos);
    res.json(producto);
});

////////////////////LISTA_DE_PRODUCTO////////////////////////////
router.get('/lista_de_producto', isLoggedIn, async  (req, res) => {
    const lista = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    const eliminado = await pool.query('SELECT * FROM producto WHERE estado="I" ');
    res.render('administrador/lista_de_producto', { lista, eliminado });
});

////////////////////LISTA_DE_PRODUCTO////////////////////////////
router.get('/mi_cuenta', isLoggedIn, async  (req, res) => {
    const lista = await pool.query('SELECT * FROM links WHERE estado="A" ');
    // const rows = await pool.query('SELECT * FROM users WHERE usuario = ?', [usuario]);
    res.render('administrador/mi_cuenta');
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
    // console.log(productos);
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
    // SELECT * FROM compra INNER JOIN cliente ON compra.id_cliente = cliente.id WHERE estado="P"
    const products1= await pool.query('SELECT * FROM producto');

    res.json(venta1);
});

router.post('/todos_producto', isLoggedIn, async (req, res) => {
     
   
    const products1= await pool.query('SELECT * FROM producto');

    res.json(products1);
});

router.post('/datos_factura', isLoggedIn, async (req, res) => {
    const { id_cliente, fecha_hora } = req.body;
     
    const datos1 = await pool.query('SELECT * FROM detalle WHERE id_cliente = ? AND fecha_hora = ? ', [id_cliente, fecha_hora]);
    // const products= await pool.query('SELECT * FROM producto');
    // console.log(products);

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



module.exports = router;