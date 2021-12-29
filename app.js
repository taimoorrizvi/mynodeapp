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
var con = mysql.createConnection({
  host: "172.24.149.21",
  user: "root",
  password: "login.123"
});
try {  
  con.connect(function(err) {
    if (err) 
    {
      console.log("Connection Failure!");
    }
    else
    {
      console.log("Connected Successfully!");
    }    
  });
}
catch (e) {
  console.log("entering catch block");
  console.log(err);
  console.log("leaving catch block");
}



