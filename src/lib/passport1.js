const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('../lib/helpers');


passport.use('local.cliente_signin', new LocalStrategy({
  usernameField: 'correo',
  passwordField: 'contrasena',
  passReqToCallback: true
}, async (req, correo, contrasena, done) => {
  const rows = await pool.query('SELECT * FROM cliente WHERE correo = ?', [correo]);
  if (rows.length > 0) {
    const cliente = rows[0];
    const validPassword = await helpers.matchPassword(contrasena, cliente.contrasena);
    console.log(validPassword);
    if (validPassword) {
      done(null, cliente, req.flash('success', 'Welcome ' + cliente.correo));
    } else {
      done(null, false, req.flash('message', 'Contraseña incorrecta'));
    }
  } else {
    return done(null, false, req.flash('message', 'Este correo no existe'));
  }
}));

passport.use('local.cliente_signup', new LocalStrategy({
  usernameField: 'correo',
  passwordField: 'contrasena',
  passReqToCallback: true
}, async (req, correo, contrasena, done) => {

  const { nombre, apellido, sexo, nacimiento, direccion, telefono, cedula } = req.body;
  var imagen = (req.file['filename']);
  var aleatorio = Math.random();
  var administrador=req.user;
  var id_administrador= administrador.id;
  const newUser = {
    nombre,
    apellido,
    sexo,
    nacimiento,
    direccion,
    telefono,
    cedula,
    correo,
    contrasena,
    imagen,
    aleatorio,
    id_administrador
  };
  newUser.contrasena = await helpers.encryptPassword(contrasena);
  // Saving in the Database
  const result = await pool.query('INSERT INTO cliente SET ? ', [newUser]);
  newUser.id = result.insertId;
  return done(null, newUser);
}));


passport.serializeUser((cliente, done) => {
  done(null, cliente.id);
});

passport.deserializeUser(async (id, done) => {
  const rows = await pool.query('SELECT * FROM cliente WHERE id = ?', [id]);
  done(null, rows[0]);
});

