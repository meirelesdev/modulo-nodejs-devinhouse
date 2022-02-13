'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trainees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      rg: {
        type: Sequelize.STRING,
        unique: true
      },
      cpf: {
        type: Sequelize.STRING,
        unique: true
      },
      primary_phone_contact: {
        type: Sequelize.STRING
      },
      secondary_phone_contact: {
        type: Sequelize.STRING
      },
      data_birth: {
        type: Sequelize.DATE
      },
      father_name: {
        type: Sequelize.STRING
      },
      mother_name: {
        type: Sequelize.STRING
      },
      have_special_needs: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('trainees');
  }
};