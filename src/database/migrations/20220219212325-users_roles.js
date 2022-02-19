"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("user_roles", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            role_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "roles",
                    key: "id",
                },
                allowNull: false,
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "users",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("user_roles");
    },
};
