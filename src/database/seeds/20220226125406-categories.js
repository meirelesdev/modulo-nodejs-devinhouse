"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "categories",
            [
                {
                    description: "Comida brasileira",
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    description: "Lanchonete",
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    description: "Pizzaria",
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("categories", null, {});
    },
};
