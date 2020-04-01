var express = require('express');
var router = express.Router();

// CONTROLADORES
const ListarUsuarios = require('../controllers/Usuarios/Listar');
const AgregarUsuario = require('../controllers/Usuarios/Agregar');
const ModificarUsuario = require('../controllers/Usuarios/Modificar');
const EliminarUsuario = require('../controllers/Usuarios/Eliminar')

//Rutas
router.get('/', ListarUsuarios);
router.post('/', AgregarUsuario);
router.put('/:id', ModificarUsuario);
router.delete('/:id', EliminarUsuario);

module.exports = router;