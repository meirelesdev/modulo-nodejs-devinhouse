const Sequelize = require('sequelize');
const dbConfig = require('../config');

const models = [
    require('../app/models/User'),
    require('../app/models/Address'),
    require('../app/models/Restaurant'),
    require('../app/models/Category'),
]
const connection = new Sequelize(dbConfig);

models.map(model=> model.init(connection))

module.exports = connection;