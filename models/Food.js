const sequelize = require('sequelize');
const db = require('../config/database');

const food = db.define(
    // foods is table name
    'foods', {
        name: {
            type: sequelize.STRING
        },
        prize: {
            type: sequelize.INTEGER
        }
    }
)

module.exports = food