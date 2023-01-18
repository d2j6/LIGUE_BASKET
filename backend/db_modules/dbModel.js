const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('LRBBHMStat', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

