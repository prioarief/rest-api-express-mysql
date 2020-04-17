const sequelize = require('sequelize');
const db = require('../config/database');

const siswa  = db.define(
    'portfolio', {
        project_name : {
            type : sequelize.STRING
        },

        link : {
            type : sequelize.STRING
        },
        
    }, {
        freezeTableName : true
    }
)

module.exports = siswa;