const express = require('express');

var mysql = require('mysql');

const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8080;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/sharks', function(req,res){
  res.sendFile(path + 'sharks.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8080! , Now connecting to DB')
})

//////////////
var err;
var DB_HOST   = process.env.DB_HOST;
var DB_USER   = process.env.DB_USER;
var DB_PASS   = process.env.DB_PASS;

var con = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS
});
try {  
  con.connect(function(err) {
    if (err) 
    {
      console.log("Connection Failure!");
      console.log("DB_HOST : " + DB_HOST);
      console.log("DB_USER : " + DB_USER);
      console.log("DB_PASS : " + DB_PASS);
    }
    else
    {
      console.log("Connected Successfully!");
      console.log("DB_HOST : " + DB_HOST);
      console.log("DB_USER : " + DB_USER);
      console.log("DB_PASS : " + DB_PASS);
    }    
  });
}
catch (e) {
  console.log("entering catch block");
  console.log(err);
  console.log("leaving catch block");
}