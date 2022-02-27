"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("order_items", {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            menu_id: {
              type: Sequelize.INTEGER,
              references: {
                model: 'menus',
                key: 'id'
              },
              allowNull: false,
            },
            order_id: {
              type: Sequelize.INTEGER,
              references: {
                model: 'orders',
                key: 'id'
              },
              allowNull: false
            },
            amount: {
              type: Sequelize.FLOAT,
              allowNull: false
            },
            value: {
              type: Sequelize.FLOAT,
              allowNull: false
            },
            created_at: {
              type: Sequelize.DATE,
              allowNull: false
            },
            updated_at: {
              type: Sequelize.DATE,
              allowNull:false
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("order_items");
    },
};
