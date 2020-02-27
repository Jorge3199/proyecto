const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('../lib/helpers');


passport.use('local.cliente_signin', new LocalStrategy({
  usernameField: 'usuario',
  passwordField: 'contrasena',
  passReqToCallback: true
}, async (req, usuario, contrasena, done) => {
  const rows = await pool.query('SELECT * FROM cliente WHERE usuario = ?', [usuario]);
  if (rows.length > 0) {
    const cliente = rows[0];
    const validPassword = await helpers.matchPassword(contrasena, cliente.contrasena);
    if (validPassword) {
      done(null, cliente, req.flash('success', 'Welcome ' + cliente.usuario));
    } else {
      done(null, false, req.flash('message', 'Contraseña incorrecta'));
    }
  } else {
    return done(null, false, req.flash('message', 'Este nombre de usuario no existe'));
  }
}));

passport.use('local.cliente_signup', new LocalStrategy({
  usernameField: 'usuario',
  passwordField: 'contrasena',
  passReqToCallback: true
}, async (req, usuario, contrasena, done) => {

  const { nombre, apellido, sexo, nacimiento, direccion, telefono, correo } = req.body;
  var aleatorio = Math.random();
  const newUser = {
    usuario,
    contrasena,
    nombre,
    apellido,
    sexo,
    nacimiento,
    direccion,
    telefono,
    correo,
    aleatorio
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

