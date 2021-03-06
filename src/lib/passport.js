const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('../lib/helpers');


passport.use('local.signin', new LocalStrategy({
  usernameField: 'correo',
  passwordField: 'contrasena',
  passReqToCallback: true
}, async (req, correo, contrasena, done) => {
  const rows = await pool.query('SELECT * FROM administrador WHERE correo = ?', [correo]);
  if (rows.length > 0) {
    const admi = rows[0];
    const validPassword = await helpers.matchPassword(contrasena, admi.contrasena);
    if (validPassword) {
      // req.user;
      //  console.log(admi);
      //  var valor = user.id;
      // req.admi = 'hola';
      done(null, admi, req.flash('success', 'Welcome ' + admi.correo));
    } else {
      done(null, false, req.flash('message', 'Contraseña incorrecta'));
    }
  } else {
    return done(null, false, req.flash('message', 'Este correo no esta regidtrado'));
  }
}));

passport.use('local.signup', new LocalStrategy({
  usernameField: 'correo',
  passwordField: 'contrasena',
  passReqToCallback: true
}, async (req, correo, contrasena, done) => {

  const { nombre, apellido, sexo, nacimiento, direccion, telefono, cedula } = req.body;
 
  if(typeof req.file !== "undefined"){
      var imagen = (req.file['filename']);
  }

  if(typeof req.file === "undefined"){
     var imagen = 'perfil.jpg';
  }
  
  var aleatorio = Math.random();
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

