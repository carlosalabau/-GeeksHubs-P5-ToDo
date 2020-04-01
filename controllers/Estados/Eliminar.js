const {Estados} = require('../../models/index')


const EliminarEstado =  (req,res)=>{
    let _id = req.params.id;
    Estados.destroy({
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
  
  module.exports = EliminarEstado