
require('dotenv').config();
const { parse } = require('pg-connection-string');

const config = parse(process.env.DATABASE_URL);

module.exports = {
  dialect: 'postgres',
  host: config.host,
  port: config.port,
  username: config.user,
  password: config.password,
  database: config.database,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};