'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      saladCount: {
        type: Sequelize.INTEGER
      },
      baconCount: {
        type: Sequelize.INTEGER
      },
      cheeseCount: {
        type: Sequelize.INTEGER
      },
      meatCount: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL(10, 2)
      }
    });
  }

  export async function down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }

