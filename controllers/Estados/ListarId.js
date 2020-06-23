const {Estados} = require('../../models/index')

const ListarId = (req,res) => {
    let _id = req.params.id;
    Estados.findAll({
        where: {
            id: _id
        }
    })
    .then(estados => res.json(estados))
    .catch( err => res.json({msn: err}))
}

module.exports = ListarId;