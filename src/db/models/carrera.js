'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrera extends Model {
   
    static associate(models) {
      Carrera.hasMany(models.Materia, {
        as: 'materias',
        foreignKey: 'materia_id'
      })
    }
  }

  Carrera.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nombre: DataTypes.STRING,
    grado: DataTypes.STRING,
    universidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carrera',
    timestamps: false,
  });

  return Carrera;
  
};