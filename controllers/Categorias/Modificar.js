const {Categorias} = require('../../models/index');


const ModificarCategoria = (req,res)=>{
    let _id = req.params.id;
    let body = req.body;
    Categorias.update({ 
      nombre: body.nombre,
      descripcion: body.descripcion,
      TaskId: body.TaskId
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


module.exports = ModificarCategoria;