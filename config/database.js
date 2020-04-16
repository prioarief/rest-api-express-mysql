const sequelize = require('sequelize');

// parameter (nama database, username, password, {dialect : database yang digunakan})
const database = new sequelize('crud_nodejs', 'root', '', {
    dialect: "mysql"
});

database.sync({});
module.exports = database;