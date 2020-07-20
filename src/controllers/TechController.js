const Tech = require('../database/models/tech');
const User = require('../database/models/user');

module.exports = {
    async index(req, res) {
        const {
            userId
        } = req.params;

        const user = await User.findByPk(userId, {
            include: {
                association: 'techs',
                through: {
                    attributes: ['userId']
                }
            }
        });

        return res.json(user.techs);
    },
    async show(req, res) {},
    async store(req, res) {
        const {
            userId
        } = req.params;

        const {
            name
        } = req.body;

        const user = await User.findByPk(userId);

        if (!user) return res.status(400).json({
            error: 'User not found! '
        });

        const [tech] = await Tech.findOrCreate({
            where: {
                name
            }
        });

        await user.addTech(tech);
        return res.json(tech);
    },
    async update(req, res) {},
    async destroy(req, res) {
        const {
            userId
        } = req.params;

        const {
            name
        } = req.body;

        const user = await User.findByPk(userId);

        if (!user) return res.status(400).json({
            error: 'User not found! '
        });

        const tech = await Tech.findOne({
            where: {
                name
            }
        });

        await user.removeTech(tech);
        return res.json();
    }
};