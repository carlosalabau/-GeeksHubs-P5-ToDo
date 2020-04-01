'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categorias = sequelize.define('Categorias', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    TareaId: DataTypes.INTEGER
  }, {});
  Categorias.associate = function(models) {
    // associations can be defined here
    Categorias.hasMany(models.Tareas);
  };
  return Categorias;
};