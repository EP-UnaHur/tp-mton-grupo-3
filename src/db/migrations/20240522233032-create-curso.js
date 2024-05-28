'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Curso', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comision: {
        type: Sequelize.STRING
      },
      turno: {
        type: Sequelize.STRING
      },
      fechaInicio: {
        type: Sequelize.DATEONLY
      },
      fechaFin: {
        type: Sequelize.DATEONLY
      },
      materiaid: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Curso');
  }
};
