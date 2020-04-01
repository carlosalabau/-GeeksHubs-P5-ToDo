const {Usuarios} = require('../../models/index')

const ListarUsuarios = (req,res) => {
    Usuarios.findAll()
    .then(usuarios => res.json(usuarios))
    .catch( err => res.json({msn: err}))
}

module.exports = ListarUsuarios;