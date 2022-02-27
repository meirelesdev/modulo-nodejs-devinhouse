const Sequelize = require('sequelize');
const dbConfig = require('../config');


const User = require('../app/models/User')
const Address = require('../app/models/Address')
const Restaurant = require('../app/models/Restaurant')
const Category = require('../app/models/Category')
const Menu = require('../app/models/Menu');
const Order = require('../app/models/Order')
const OrderItem = require('../app/models/OrderItem')

const connection = new Sequelize(dbConfig);

User.init(connection)
Address.init(connection)
Restaurant.init(connection)
Category.init(connection)
Menu.init(connection)
Order.init(connection)
OrderItem.init(connection)

Restaurant.associate(connection.models)
Order.associate(connection.models)
Menu.associate(connection.models)
OrderItem.associate(connection.models)

module.exports = connection;