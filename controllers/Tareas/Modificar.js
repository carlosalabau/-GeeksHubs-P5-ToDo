const {Tareas} = require('../../models/index');

const ModificarTarea = (req,res)=>{
    let _id = req.params.id;
    let body = req.body;
    Tareas.update({ 
      nombre: body.nombre,
      descripcion: body.descripcion,
      UsuarioId: body.UsuarioId,
      EstadoId: body.EstadoId,
      CategoriaId: body.CategoriaId
    }, 
    {
      where: {id : _id}
    }).then(() => {
      res.sendStatus = 201;
      res.json({status: 'OK'})
    }).catch(err => {
      res.statusCode = 400;
      res.json({status: 'KO', message: err})
    });
};

module.exports = ModificarTarea;