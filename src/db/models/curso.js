'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    
    
  }
  
  Curso.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    comision: DataTypes.STRING,
    turno: DataTypes.STRING,
    fechaInicio: DataTypes.DATEONLY,
    fechaFin: DataTypes.DATEONLY,
    materiaId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Curso',
  });

  return Curso;

};