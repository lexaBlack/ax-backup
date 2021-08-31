const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Files = sequelize.define('files',{

    fileId:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
        
       
    },
    filenameDate:{
        type:Sequelize.STRING,
        allowNull:true

    },
    fileUrl:{
        type:Sequelize.STRING,
        allowNull:true

    },
    companyId:{
        type:Sequelize.STRING,
        allowNull:true

    },
    fileStatus:{
        type:Sequelize.STRING,
        allowNull:true

    }
});

module.exports = Files;

