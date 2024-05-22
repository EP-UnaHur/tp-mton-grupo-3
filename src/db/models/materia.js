"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {}
  Materia.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: DataTypes.STRING,
      cuatrimestral: DataTypes.TINYINT,
      anio: DataTypes.INTEGER,
      carreraId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "materia",
    }
  );
  return Materia;
};
