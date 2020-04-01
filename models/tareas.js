'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tareas = sequelize.define('Tareas', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    UsuarioId: DataTypes.INTEGER,
    EstadoId: DataTypes.INTEGER,
    CategoriaId: DataTypes.INTEGER
  }, {});
  Tareas.associate = function(models) {
    // associations can be defined here
    Tareas.belongsTo(models.Categorias);
    Tareas.belongsTo(models.Usuarios);
    Tareas.belongsTo(models.Estados);

  };
  return Tareas;
};