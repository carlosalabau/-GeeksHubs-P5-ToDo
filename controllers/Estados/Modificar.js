const {Estados} = require('../../models/index');

const ModificarEstado = (req,res)=>{
    let _id = req.params.id;
    let body = req.body;
    Estados.update({ 
      nombre: body.nombre,
      TareaId: body.TareaId
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

module.exports = ModificarEstado;