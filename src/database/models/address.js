const {
    Sequelize,
    Model
} = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init({
            // Model attributes are defined here,
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
            }
        }, {
            // Other model options go here
            sequelize, // the connection instance
        });
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
    };
}
module.exports = Address