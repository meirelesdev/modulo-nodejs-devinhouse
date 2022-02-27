"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("menus", { 
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          title: {
            type: Sequelize.STRING(150),
            allowNull: false
          },
          description: {
            type: Sequelize.TEXT,
            allowNull: false
          },
          price: {
            type: Sequelize.FLOAT,
            allowNull: false
          },
          restaurant_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'restaurants',
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
            allowNull: false
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false
          },
         });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("menus");
    },
};
