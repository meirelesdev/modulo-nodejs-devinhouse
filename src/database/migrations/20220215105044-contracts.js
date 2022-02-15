'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('contracts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trainee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'trainees',
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
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'companies',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        allowNull: false
      },
      start_validity: {
        type: Sequelize.DATEONLY
      },
      end_validity: {
        type: Sequelize.DATEONLY
      },
      remuneration: {
        type: Sequelize.FLOAT(11,2)
      },
      extra: {
        type: Sequelize.FLOAT(11,2)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
       });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('contracts');
  }
};
