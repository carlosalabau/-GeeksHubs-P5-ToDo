const {Tareas} = require('../../models/index')

const AgregarTarea = (req,res) => {
    let {nombre,descripcion,UsuarioId,EstadoId,CategoriaId} = req.body;
Tareas.create({
    nombre,descripcion,UsuarioId,EstadoId,CategoriaId
  }).then(()=>{
    res.statusCode=201;
    res.json({status: 'OK'})
  }).catch(err => {
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
}

module.exports = AgregarTarea;