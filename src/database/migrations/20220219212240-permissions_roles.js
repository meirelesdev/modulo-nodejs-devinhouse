"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("premissions_roles", {
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
            permission_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "permissions",
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
        await queryInterface.dropTable("premissions_roles");
    },
};
