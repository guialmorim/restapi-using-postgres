'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id'}, // references the primary key on the user model
        onUpdate: 'CASCADE', // update this id if the primary key on the user model change
        onDelete: 'CASCADE' // delete the addressess if the user doesn't exist
      },
      zipCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Addresses');
  }
};