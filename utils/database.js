const Sequelize = require('sequelize');



/*

const sequelize = new Sequelize('postgres://popaqgifietplg:f3a5d6d1b92426fee6fa1adae6e90910cd95d40bf504697bbee7d638f6723c1e@ec2-18-211-97-89.compute-1.amazonaws.com:5432/dep1tuvh1sp2c3', {
    dialectOptions: {
        ssl: true
    }
});

*/



const sequelize = new Sequelize('liveclean','admin','password',{ //create new database for this
    dialect:'mysql',
    host:'127.0.0.1',
    pool: {
        max: 500,
        min: 0,
        idle: 1000
      }});  

module.exports = sequelize;
