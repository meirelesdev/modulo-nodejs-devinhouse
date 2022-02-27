const Sequelize = require('sequelize');
const dbConfig = require('../config');


const User = require('../app/models/User')
const Address = require('../app/models/Address')
const Restaurant = require('../app/models/Restaurant')
const Category = require('../app/models/Category')
const Menu = require('../app/models/Menu');

const connection = new Sequelize(dbConfig);

User.init(connection)
Address.init(connection)
Restaurant.init(connection)
Category.init(connection)
Menu.init(connection)

Restaurant.associate(connection.models)
Menu.associate(connection.models)

module.exports = connection;