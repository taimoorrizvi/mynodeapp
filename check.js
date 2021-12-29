var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.24.149.21",
  user: "root",
  password: "login.123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected Successfully!");
});