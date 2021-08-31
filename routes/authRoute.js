const express = require('express');
const authController = require('../controllers/authController');
const isAuth = require('../middleware/isAuth');

const router =express.Router();


router.get('/admin-login',authController.GetAdminlogin);
router.get('/levelone-login',authController.GetSuperAdminlogin);
router.post('/admin-login',authController.AdminLogin);
router.post('/superadmin-login',authController.SuperAdminLogin)
router.get('/admin-dashboard',isAuth,authController.adminDashoard)
router.get('/register-admin',isAuth,authController.registerAdmin);
router.post('/register-admin',isAuth,authController.PostAdmin);
router.get('/logout',authController.logout)
router.get('/admin-logout',authController.Adminlogout)


module.exports=router;