var express = require('express');
var router = express.Router();

// CONTROLADORES
const ListarTareas = require('../controllers/Tareas/Listar');
const AgregarTarea = require('../controllers/Tareas/Agregar');
const ModificarTarea = require('../controllers/Tareas/Modificar');
const EliminarTarea = require('../controllers/Tareas/Eliminar')

//Rutas
router.get('/', ListarTareas);
router.post('/', AgregarTarea);
router.put('/:id', ModificarTarea);
router.delete('/:id', EliminarTarea);

module.exports = router;
