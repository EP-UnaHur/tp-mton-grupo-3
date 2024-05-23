'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) { // LO AGREGUÉ PERO DUDO QUE ESTE BIEN, DEBEMOS REVISAR LA LOGICA
      Curso.belongsTo(models.Materia, {
        as: 'materias',
        foreignKey: 'materia_id',
      })
      Curso.belongsTo(models.Profesor, {
        as: 'profesores',
        foreignKey: 'profesor_id'
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
    materiaId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Curso',
  });

  return Curso;

};