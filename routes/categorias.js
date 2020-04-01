var express = require('express');
var router = express.Router();

// CONTROLADORES
const ListarCategorias = require('../controllers/Categorias/Listar');
const AgregarCategoria = require('../controllers/Categorias/Agregar');
const ModificarCategoria = require('../controllers/Categorias/Modificar');
const EliminarCategoria = require('../controllers/Categorias/Eliminar')

//Rutas
router.get('/', ListarCategorias);
router.post('/', AgregarCategoria);
router.put('/:id', ModificarCategoria);
router.delete('/:id', EliminarCategoria);

module.exports = router;