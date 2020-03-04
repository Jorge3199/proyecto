const express = require('express');
const router = express.Router();


const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');


router.get('/add', isLoggedIn, async (req, res) => {
    const modelo = await pool.query('SELECT modelo FROM categoria');
    // console.log(modelo);
    res.render('administrador/add', { modelo });
});

router.post('/add1', isLoggedIn, async (req, res) => {
    // var imagen = (req.file['filename']);
    var imagen = (req.file['filename']);
    console.log(req.file);
    // console.log(req.file['path']);
    // console.log("holabg djh");
    // res.send('hola');

    // imagen = this.documentFileName;
    var estado='A';
    const { nombre, precio, modelo, cantidad} = req.body;
    
    const newLink = {
        nombre,
        imagen,
        precio,
        modelo,
        cantidad,
        estado
       
    };
    
    await pool.query('INSERT INTO producto set ?', [newLink]);
    
    res.redirect('/administrador');
    
});


// router.post('/links')
router.get('/', isLoggedIn, async (req, res) => {
    const productos = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    // const token1= (process.env.token1)
    res.render('administrador/administrador', { productos });
    // res.send('lista iran aqui');
});

router.post('/delete', isLoggedIn, async (req, res) => {
    const { id } = req.body;
    await pool.query('UPDATE producto SET estado="I" WHERE id = ?', [id]);
    
    const producto = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    res.json(producto);
});

router.get('/edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM producto WHERE id = ?', [id]);
    // console.log(links);
    res.render('administrador/edit', {link: links[0]});
});

router.post('/edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const { nombre, precio} = req.body;
    const newLink1 = {
        nombre,
        precio
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
   
    const { nombre, precio } = req.body; 
    const { id } = req.params;
    
    const newLink = {
        nombre,
        precio,
        imagen
    };

   
    await pool.query('UPDATE producto set ? WHERE id = ?', [newLink, id]);
      
    // await pool.query('UPDATE links set ? WHERE id = ?', [newLink, id]);
    // req.flash('success', 'Link Updated Successfully');
    //res.redirect('/administrador');
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
    // const productos = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    // // console.log(productos);
    //  res.json(productos);

    console.log(req.file);
    console.log(req.body);

    var imagen = (req.file['filename']);
    console.log(req.file);
    // console.log(req.file['path']);
    // console.log("holabg djh");
    // res.send('hola');

    // imagen = this.documentFileName;
    var estado='A';
    const { nombre, precio, modelo, cantidad} = req.body;
    
    const newLink = {
        nombre,
        imagen,
        precio,
        modelo,
        cantidad,
        estado
       
    };
    
    await pool.query('INSERT INTO producto set ?', [newLink]);

    const producto = await pool.query('SELECT * FROM producto WHERE estado="A" ');
    // console.log(productos);
    res.json(producto);
   
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





module.exports = router;