"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "menus",
            [
                {
                    title: "Marmita da Hora",
                    description: "Prato tradicional arroz, feijao, batata, bife",
                    price: 10.99,
                    restaurant_id: 1,
                    category_id: 1,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    title: "Whopper Costela",
                    description:
                        "O pão com gergelim do WHOPPER®, nossa maionese de fabricação própria, alface e tomate cortados na hora, aquela nossa cebola crocante como toda Onion Rings deve ser, junto do nosso delicioso molho Furioso, queijo e a grande novidade: um hambúrguer de carne de porco com aquele aroma inconfundível de Costelinha",
                    price: 29.90,
                    restaurant_id: 2,
                    category_id: 2,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    title: "Pizza Combo",
                    description:
                        "Pizza três sabores a escolha do cliente, refri e broto doce",
                    price: 59.90,
                    restaurant_id: 3,
                    category_id: 3,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    title: "Macarronada italiana",
                    description:
                        "Deliciosa massa italiana acompanha vinho tinto",
                    price: 35.90,
                    restaurant_id: 4,
                    category_id: 1,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                  title: "X-Bacon",
                  description:
                      "Delicioso lanche com carne salada e bacon",
                  price: 25.90,
                  restaurant_id: 5,
                  category_id: 1,
                  created_at: new Date(),
                  updated_at: new Date(),
              },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("menus", null, {});
    },
};
