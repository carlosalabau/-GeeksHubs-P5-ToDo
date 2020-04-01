'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    direccion: DataTypes.STRING,
    TareaId: DataTypes.INTEGER
  }, {});
  Usuarios.associate = function(models) {
    // associations can be defined here
    Usuarios.hasMany(models.Tareas)
  };
  return Usuarios;
};