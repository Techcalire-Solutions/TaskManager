const Sequelize = require('sequelize');

const sequelize = new Sequelize('wac_db', 'wac', 'Wac@Jan2023', {
    host: 'localhost',
    dialect: 'postgres'
});

  
module.exports = sequelize