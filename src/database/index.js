const Sequelize = require('sequelize');
const dbConfig = require('./config/config.json');

//Importing Models
const User = require('../database/models/user');
const Address = require('../database/models/address');
const Tech = require('../database/models/tech');

//Initializing connection to the database
const connection = new Sequelize(dbConfig);

//initializing the Models
User.init(connection);
Address.init(connection);
Tech.init(connection);

//Passing the models to create the relation with users's table
Address.associate(connection.models);
User.associate(connection.models);
Tech.associate(connection.models);

//exporting the connection
module.exports = connection;