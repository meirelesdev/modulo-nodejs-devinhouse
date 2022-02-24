"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("categories", {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            description: {
              type: Sequelize.STRING(100),
              allowNull: false,
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
        await queryInterface.dropTable("categories");
    },
};
