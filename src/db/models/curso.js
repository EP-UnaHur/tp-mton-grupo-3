'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) { 
      Curso.belongsTo(models.Materia, {
        as: 'materias',
        foreignKey: 'materiaid',
      })
      Curso.belongsToMany(models.Profesor, {
        through: 'curso_profesor',
        as: 'profesores'
      })

    }

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
    materiaid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Curso',
    timestamps: false,
  });

  return Curso;

};