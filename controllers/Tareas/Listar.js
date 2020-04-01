const {Tareas} = require('../../models/index')

const ListarTareas = (req,res) => {
    Tareas.findAll()
    .then(tareas => res.json(tareas))
    .catch( err => res.json({msn: err}))
}

module.exports = ListarTareas;