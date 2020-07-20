const {
  Sequelize,
  DataTypes,
  Model
} = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      // Other model options go here
      sequelize, // the connection instance
    });
  }

  static associate(models) {
    this.hasMany(models.Address, {
      foreignKey: 'userId',
      as: 'addresses'
    });

    this.belongsToMany(models.Tech, {
      foreignKey: 'userId',
      through: 'user_techs',
      as: 'techs'
    });
  }
}
module.exports = User