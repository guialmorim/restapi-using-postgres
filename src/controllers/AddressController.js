const Address = require('../database/models/address');
const User = require('../database/models/user');

module.exports = {
    async index(req, res) {
        const {
            userId
        } = req.params;

        const user = await User.findByPk(userId, {
            include: {
                association: 'addresses'
            }
        });

        return res.json(user);
    },
    async show(req, res) {},
    async store(req, res) {
        const {
            userId
        } = req.params;

        const {
            zipCode,
            street,
            number
        } = req.body;

        const user = User.findByPk(userId);

        if (!user) return res.status(400).json({
            error: 'User not found! '
        });

        const address = await Address.create({
            zipCode,
            street,
            number,
            userId
        });
        return res.json(address);
    },
    async update(req, res) {},
    async destroy(req, res) {}
};