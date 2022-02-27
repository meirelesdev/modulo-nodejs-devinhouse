"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("orders", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            order_number: {
              type: Sequelize.STRING,
              allowNull: false
            },
            delivery_value: {
              type: Sequelize.FLOAT,
              allowNull: false
            },
            order_date: {
              type: Sequelize.DATE,
              allowNull: false,
            },
            restaurant_id: {
              type: Sequelize.INTEGER,
              references: {
                model: 'restaurants',
                key: 'id'
              },
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE',
              allowNull: false
            },
            client_id: {
              type: Sequelize.INTEGER,
              references: {
                model: 'users',
                key: 'id'
              },
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE',
              allowNull: false
            },
            created_at: {
              type: Sequelize.DATE,
              allowNull: false,
            },
            updated_at: {
              type: Sequelize.DATE,
              allowNull: false
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("orders");
    },
};
