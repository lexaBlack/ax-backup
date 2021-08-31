const Files =require('../models/filesModels')
const bcrypt =require('bcryptjs');


exports.viewFiles = (req,res,next) =>{
    Files.findAll().then(result =>{
        res.render('viewfile',{fileInfo:result});
    }).catch(err =>{
        console.log(err)
    })
   

};

exports.fileManager = (req,res,next) =>{

    res.render('filemanager')
};