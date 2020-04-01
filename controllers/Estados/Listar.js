const {Estados} = require('../../models/index')

const ListarEstados = (req,res) => {
    Estados.findAll()
    .then(estados => res.json(estados))
    .catch( err => res.json({msn: err}))
}

module.exports = ListarEstados;