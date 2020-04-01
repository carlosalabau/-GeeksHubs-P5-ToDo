'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estados = sequelize.define('Estados', {
    nombre: DataTypes.STRING,
    TareaId: DataTypes.INTEGER
  }, {});
  Estados.associate = function(models) {
    // associations can be defined here
    Estados.hasMany(models.Tareas)
  };
  return Estados;
};