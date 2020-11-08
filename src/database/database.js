const Sequelize = require ('sequelize');
const msql = require ("mysql");

const environment = process.env.NODE_ENV || 'development';

const config = require ('../config/config.js') [environment];

msql.createConnection(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
)

module.exports = sequelize;