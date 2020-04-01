const {Categorias} = require('../../models/index')

const ListarCategorias = (req,res) => {
    Categorias.findAll()
    .then(categorias => res.json(categorias))
    .catch( err => res.json({msn: err}))
}

module.exports = ListarCategorias;