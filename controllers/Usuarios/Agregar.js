const {Usuarios} = require('../../models/index')

const AgregarUsuario = (req,res) => {
    let {nombre,apellidos,email,contraseña,direccion,TareaId} = req.body;
Usuarios.create({
    nombre,apellidos,email,contraseña,direccion,TareaId
  }).then(()=>{
    res.statusCode=201;
    res.json({status: 'OK'})
  }).catch(err => {
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
}

module.exports = AgregarUsuario;