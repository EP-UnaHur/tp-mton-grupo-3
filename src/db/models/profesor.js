'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profesor.hasMany(models.Curso, {
        as: 'cursosArray',
        foreignKey: 'profesor_id'
      })
    }
  }
  Profesor.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATEONLY,
    legajo: DataTypes.NUMBER,
    activo: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Profesor',
  });
  return Profesor;
};