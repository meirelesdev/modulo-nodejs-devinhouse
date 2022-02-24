"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            { schema: "public", tableName: "users" },
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                nickname: {
                    type: Sequelize.STRING(15),
                    allowNull: true,
                    defaultValue: "",
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true,
                },
                password_hash: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
                updated_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
                deleted_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
            }
        );
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable({
            schema: "public",
            tableName: "users",
        });
    },
};
