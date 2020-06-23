var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var TareasRouter = require('./routes/tareas');
var UsuariosRouter = require('./routes/usuarios')
var CategoriasRouter = require('./routes/categorias.js')
var EstadosRouter = require('./routes/estados')


var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/tareas', TareasRouter);
app.use('/usuarios', UsuariosRouter);
app.use('/categorias', CategoriasRouter);
app.use('/estados', EstadosRouter);

module.exports = app;
