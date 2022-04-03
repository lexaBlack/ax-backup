const Sequelize = require('sequelize');
require("dotenv").config()


const sequelize = new Sequelize(process.env.DB_KEY, {
    dialectOptions: {
        ssl: true
    }
});



/*

const sequelize = new Sequelize('liveclean','admin','password',{ //create new database for this
    dialect:'mysql',
    host:'127.0.0.1',
    pool: {
        max: 500,
        min: 0,
        idle: 1000
      }});  
*/
module.exports = sequelize;
