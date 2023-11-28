const Sequelize = require('sequelize');
const sequelize = require('../db');

const Poll = sequelize.define('Poll', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'Poll',
    timestamps: false
});

module.exports = Poll;
