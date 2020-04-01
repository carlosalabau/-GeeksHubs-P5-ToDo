const {Estados} = require('../../models/index')

const AgregarEstado = (req,res) => {
    let {nombre,TareaId} = req.body;
Estados.create({
    nombre,TareaId
  }).then(()=>{
    res.statusCode=201;
    res.json({status: 'OK'})
  }).catch(err => {
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
}

module.exports = AgregarEstado;