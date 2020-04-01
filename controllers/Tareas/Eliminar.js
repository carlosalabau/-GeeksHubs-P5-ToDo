const {Tareas} = require('../../models/index')


const EliminarTarea =  (req,res)=>{
    let _id = req.params.id;
    Tareas.destroy({
      where: {
        id: _id
      }
    }).then(() => {
      res.sendStatus = 201;
        res.json({status: 'OK'})
      }).catch(err => {
        res.statusCode = 400;
        res.json({status: 'KO', message: err})
    });
  };
  
  module.exports = EliminarTarea