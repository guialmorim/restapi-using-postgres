const {
    Op
} = require('sequelize');
const User = require('../database/models/user');

module.exports = {
    async show(req, res) {
        const users = await User.findAll({
            attributes: ['firstName', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@email.com'
                }
            },
            include: [{
                    association: 'addresses',
                    where: {
                        street: 'Rua dos bobos'
                    }
                },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: '%React%'
                        }
                    }
                }
            ]
        });
        return res.json(users);
    },
};