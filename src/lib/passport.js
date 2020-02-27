const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('../lib/helpers');


passport.use('local.signin', new LocalStrategy({
  usernameField: 'usuario',
  passwordField: 'contrasena',
  passReqToCallback: true
}, async (req, usuario, contrasena, done) => {
  const rows = await pool.query('SELECT * FROM administrador WHERE usuario = ?', [usuario]);
  if (rows.length > 0) {
    const admi = rows[0];
    const validPassword = await helpers.matchPassword(contrasena, admi.contrasena);
    if (validPassword) {
      // req.user;
      //  console.log(admi);
      //  var valor = user.id;
      // req.admi = 'hola';
      done(null, admi, req.flash('success', 'Welcome ' + admi.usuario));
    } else {
      done(null, false, req.flash('message', 'Contraseña incorrecta'));
    }
  } else {
    return done(null, false, req.flash('message', 'Este nombre de usuario no existe'));
  }
}));

passport.use('local.signup', new LocalStrategy({
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
  const result = await pool.query('INSERT INTO administrador SET ? ', [newUser]);

  newUser.id = result.insertId;
  return done(null, newUser);
}));


passport.serializeUser((admi, done) => {
  done(null, admi.id);
});

passport.deserializeUser(async (id, done) => {
  const rows = await pool.query('SELECT * FROM administrador WHERE id = ?', [id]);
  done(null, rows[0]);
});

