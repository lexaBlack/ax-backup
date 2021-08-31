const Admin =require('../models/authModel')
const bcrypt =require('bcryptjs');


exports.GetAdminlogin = (req,res,next) =>{

    res.render('login');

};
exports.GetSuperAdminlogin = (req,res,next) =>{

    res.render('superlogin');

};
exports.registerAdmin = (req,res,next) =>{
    res.render('adminreg')
};
exports.PostAdmin = (req,res,next) =>{

    const adminName = req.body.adminnames;
    const email = req.body.adminEmail;
    const password = req.body.password;

    bcrypt.hash(password,12)
    .then(emphashedPw =>{
    Admin.build({
        AdminNames:adminName,
        email:email,
        password:emphashedPw,
        adminStatus:"active"
        }).save()
        .then(result =>{
            res.redirect('/register-admin')
            }) 
        }).catch(err =>{
            console.log(err);
        })


};
exports.SuperAdminLogin = (req,res,next) =>{

    const adminemail = req.body.email;
    const password = req.body.password;
    let loadedadmin;
    Admin.findOne({where: {email: adminemail }})
    .then(user =>{
        if(!user){
            res.send('Email was incorrect <a href="/admin-login">Back to login</a>')
        }
    loadedadmin=user;
    return bcrypt.compare(password,user.password); 
    })
    .then(isEqual =>{
        if(!isEqual){
            res.send('Your Password  was incorrect <a href="/admin-login">Back to login</a>')
        }
        if(loadedadmin.status == 'active'){
        req.session.isLoggedIn = true;
        req.session.data = loadedadmin;
        return req.session.save(err =>{
            console.log(err);
            console.log("User Logged In",req.session) //It will do this once everything is validated
            let datas = req.session;
            //check if the user is active
            res.redirect('/view-files');
        
        })
    }
    else{
        res.send("Your accout has been desactivated")
    } 
    })
    .catch(err => {console.log(err);});


};
exports.AdminLogin = (req,res,next) =>{

    const adminemail = req.body.email;
    const password = req.body.password;
    let loadedadmin;
    Admin.findOne({where: {email: adminemail }})
    .then(user =>{
        if(!user){
            res.send('Email was incorrect <a href="/admin-login">Back to login</a>')
        }
    loadedadmin=user;
    return bcrypt.compare(password,user.password); 
    })
    .then(isEqual =>{
        if(!isEqual){
            res.send('Your Password  was incorrect <a href="/admin-login">Back to login</a>')
        }
        if(loadedadmin.status == 'active'){
        req.session.isLoggedIn = true;
        req.session.data = loadedadmin;
        return req.session.save(err =>{
            console.log(err);
            console.log("User Logged In",req.session) //It will do this once everything is validated
            let datas = req.session;
            //check if the user is active
            res.redirect('/view-files');
        
        })
    }
    else{
        res.send("Your accout has been desactivated")
    } 
    })
    .catch(err => {console.log(err);});


};


exports.logout = (req,res,next) =>{
    req.session.isLoggedIn = false;
    req.session.destroy();
    console.log("session terminated")
    res.redirect('/levelone-login');
};
exports.Adminlogout = (req,res,next) =>{
    req.session.isLoggedIn = false;
    req.session.destroy();
    console.log("session terminated")
    res.redirect('/admin-login');
};