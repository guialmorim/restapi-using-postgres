const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');

class Tech extends Model {
    static init(sequelize) {
        super.init({
            // Model attributes are defined here
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            // Other model options go here
            sequelize, // the connection instance
            tableName: 'Techs'
        });
    }

    static associate(models) {
        this.belongsToMany(models.User, {
            foreignKey: 'techId',
            through: 'user_techs',
            as: 'users'
        });
    }
}
module.exports = Tech