const {Usuarios} = require('../../models/index');

const ModificarUsuario = (req,res)=>{
    let _id = req.params.id;
    let body = req.body;
    Usuarios.update({ 
      nombre: body.nombre,
      apellidos: body.apellidos,
      email: body.email,
      contraseña: body.contraseña,
      direccion: body.direccion,
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

module.exports = ModificarUsuario;