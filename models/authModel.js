const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Admins = sequelize.define('admins',{

    adminId:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
        
       
    },
    AdminNames:{
        type:Sequelize.STRING,
        allowNull:true

    },
    email:{
        type:Sequelize.STRING,
        allowNull:true

    },
    password:{
        type:Sequelize.STRING,
        allowNull:true

    },
    adminStatus:{
        type:Sequelize.STRING,
        allowNull:true
    }
});

module.exports = Admins;

