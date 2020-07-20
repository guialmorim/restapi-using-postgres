'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_techs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }, // references the primary key on the user model
        onUpdate: 'CASCADE', // update this id if the primary key on the user model change
        onDelete: 'CASCADE' // delete the addressess if the user doesn't exist
      },
      techId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Techs',
          key: 'id'
        }, // references the primary key on the tech model
        onUpdate: 'CASCADE', // update this id if the primary key on the tech model change
        onDelete: 'CASCADE' // delete the addressess if the tech doesn't exist
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
    return queryInterface.dropTable('user_techs');
  }
};