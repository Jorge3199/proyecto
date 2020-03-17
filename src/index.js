const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');
const multer = require('multer');
const uuid = require('uuid/v4');

require('dotenv').config();

const { database } = require('./keys');

// Intializations
const app = express();
require('./lib/passport');

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/imagen1'),
      filename: (req, file, cb) => {
          cb(null, uuid() + path.extname(file.originalname).toLowerCase());
      }
});



// Settings
app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));
app.use(multer({
  storage,
  dest: path.join(__dirname, 'public/imagen1'),
  limits: {fileSize: 1000000},
  fileFilter: (res, file, cb) => {
        var filetypes = /jpeg|jpg|png|gif/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: Archivo debe ser una imagen valida " + filetypes);
        
      }
}).single('imagen'));


app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(session({
  secret: 'faztmysqlnodemysql',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


// Global variables
app.use((req, res, next) => {
  app.locals.message = req.flash('message');
  app.locals.success = req.flash('success');
  app.locals.user = req.user;
  next();
  
});
// console.log(process.env.HOLA);
// Routes
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/administrador', require('./routes/administrador'));
//Cliente
require('./lib/passport1')
app.use(require('./routes/cliente'));
app.use('/cliente', require('./routes/cliente'));

// const AuthToken = require('./routes/AuthToken');
// app.use(AuthToken);

// app.use('/links', require('./routes/links'));


// Public
app.use(express.static(path.join(__dirname, 'public')));


// Starting
app.listen(app.get('port'), () => {
  console.log('Server is in port', app.get('port'));
});