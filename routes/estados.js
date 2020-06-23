var express = require('express');
var router = express.Router();

// CONTROLADORES
const ListarEstados = require('../controllers/Estados/Listar');
const ListarId = require('../controllers/Estados/ListarId');
const AgregarEstado = require('../controllers/Estados/Agregar');
const ModificarEstado = require('../controllers/Estados/Modificar');
const EliminarEstado = require('../controllers/Estados/Eliminar')

//Rutas
router.get('/', ListarEstados);
router.get('/:id', ListarId);
router.post('/', AgregarEstado);
router.put('/:id', ModificarEstado);
router.delete('/:id', EliminarEstado);

module.exports = router;