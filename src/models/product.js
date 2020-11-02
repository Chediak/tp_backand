const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Product = sequelize.define("product", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    costprice: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    costsell: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    stockamout: {
        allowNull: false,
        type: Sequelize.INTEGER(),
    }
});


module.exports = Product;