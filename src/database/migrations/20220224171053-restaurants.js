'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('restaurants', { 
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      phone: Sequelize.STRING,
      address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'addresses',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        allowNull: false
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('restaurants');
  }
};
