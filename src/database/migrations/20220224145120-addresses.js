'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cep: {
        type: Sequelize.STRING(15)
      },
      street: {
        type: Sequelize.STRING(60)
      },
      district: {
        type: Sequelize.STRING(30)
      },
      city: {
        type: Sequelize.STRING(30)
      },
      state: {
        type: Sequelize.STRING(60)
      },
      uf: {
        type: Sequelize.STRING(2)
      },
      number: {
        type: Sequelize.STRING(5)
      },
      complement: {
        type: Sequelize.STRING(50)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('addresses');
  }
};
