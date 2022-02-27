"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("restaurants", [
        { 
          name: 'Comidas Tradicionais', 
          phone: '(21)99012-1212', 
          address_id: 1, 
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        { 
          name: 'Burger King', 
          phone: '(48)99012-3456', 
          address_id: 3, 
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        { 
          name: 'Pizza Kut',
          phone: '(48)99012-0000', 
          address_id: 3,
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        { 
          name: 'Curry Pasta',
          phone: '(41)99000-1111', 
          address_id: 4, 
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        { 
          name: 'Gugu Lanches',
          phone: '(51)98765-4321', 
          address_id: 5,
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("restaurants", null, {});
    },
};
