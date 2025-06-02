'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.changeColumn('Orders', 'price', {
    type: Sequelize.DECIMAL(10, 2),
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.changeColumn('Orders', 'price', {
    type: Sequelize.DECIMAL(10, 0),
  });
}