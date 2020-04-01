const {Categorias} = require('../../models/index')

const AgregarCategoria = (req,res) => {
    let {nombre,descripcion,TareaId} = req.body;
Categorias.create({
    nombre,descripcion,TareaId
  }).then(()=>{
    res.statusCode=201;
    res.json({status: 'OK'})
  }).catch(err => {
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
}

module.exports = AgregarCategoria;