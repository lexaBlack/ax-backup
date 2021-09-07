const Sequelize = require('sequelize');





const sequelize = new Sequelize('postgres://bfjfbhtmzqmjtg:e52ec0f90b10ae8f1e27ef91bb987e9407193e46662e7ddd33ac9dd08aac0ffd@ec2-54-156-24-159.compute-1.amazonaws.com:5432/d5s447ujrhafoh', {
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
