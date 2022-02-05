const mysql = require("mysql");
const cred = require("./cred.json");

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : cred.user,
    password : cred.password,
    database : cred.database
});