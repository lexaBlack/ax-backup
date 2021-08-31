var express =require('express');
var bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const path = require('path');
const multer =require('multer');
const authRoutes = require('./routes/authRoute');
const serverRoutes = require('./routes/serverRoutes');
const Files = require('./models/filesModels');
const sequelize = require('./utils/database');
const session = require('express-session');

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'files');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  // if (file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
     cb(null, true);
   //} else {
    // cb(null, false);
   //}
 };
var upload = multer({ storage: fileStorage, fileFilter: fileFilter });
var app = express();
var SequelizeStore = require("connect-session-sequelize")(session.Store);
app.use(
  session({
    secret: "#idk1icui4cujesuss1212@.com",
    store: new SequelizeStore({
      db: sequelize,
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    saveUninitialized:false
  })
);
app.use('/files', express.static(path.join(__dirname, 'files')));
app.set('view engine','ejs');
app.set('views','views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
var portnumber = process.env.PORT || 8080;


app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    console.log(data)
});



app.post('/upload-backup',upload.single('files'),function(req,res,next){

  const uploadDate = req.body.uploadDate;
  let filepath = req.file.path;
  const companyId = req.body.companyId;


  Files.build({
    filenameDate:uploadDate,
    fileUrl:filepath,
    companyId:companyId,
    fileStatus:"active"

    }).save().then(fileresult =>{
      res.redirect('/file-manager')
}).catch(err =>{
      console.log("err: ",err)
  })


});
app.use((error,req,res,next)=>{
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  console.log("err",message,"Error",status);
});

app.use(authRoutes);
app.use(serverRoutes);


app.use((req,res,next)=>{
  res.status(404).send("The Page is not available");
});


sequelize.sync({force:false}).then(result => {

  console.log("--------------",result)

app.listen(process.env.PORT || portnumber, function() {

});
})
