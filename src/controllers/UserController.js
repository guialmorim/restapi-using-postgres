const User = require('../database/models/user');

module.exports = {
    async index(req, res){
        const users = await User.findAll();
        return res.json(users)
    }, 
    async show(req, res){
    }, 
    async store(req, res){
        const { firstName, lastName, email } = req.body;
        const user = await User.create({firstName, lastName, email});
        return res.json(user);
    },
    async update(req, res){
    },
    async destroy(req, res){
    }
};