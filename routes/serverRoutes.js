const express = require('express');
const serverController = require('../controllers/serverController');
const IsAuth =require('../middleware/isAuth');
const { route } = require('./authRoute');


const router =express.Router();


router.get('/view-files',IsAuth,serverController.viewFiles);
router.get('/file-manager',IsAuth,serverController.fileManager)



module.exports=router;