const Sequelize = require('sequelize');

const sequelize = new Sequelize('opinio', 'root', 'Anton2005', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
