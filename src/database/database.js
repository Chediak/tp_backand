const Sequelize = require ('sequelize');
const msql = require ("mysql");

const environment = process.env.NODE_ENV || 'development';

const config = require ('../config/config.js') [environment];

msql.createConnection(
    {
        development: {
            database: {
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                name: process.env.DB_NAME,
                dialect: process.env.DB_DIALECT,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD
            }
        },
        production: {
            database: {
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                name: process.env.DB_NAME,
                dialect: process.env.DB_DIALECT,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD
            }
        }
    }
)

module.exports = sequelize;