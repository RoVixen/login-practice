const mysql = require("mysql");
const cred = require("./cred.json");

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : cred.user,
    password : cred.password,
    database : cred.database
});


function q(query,callback=(()=>{})){
    connection.query(query,(error, results)=>{
        if(error){
            console.log(error);
            return;
        }
        
        console.log(results);
        
        callback(results);
    });
}

q("CREATE SCHEMA IF NOT EXISTS loginpractice");
q("USE loginpractice");
q("CREATE TABLE IF NOT EXISTS `loginpractice`.`users` ("+
"`id` INT NOT NULL AUTO_INCREMENT,"+
"`name` VARCHAR(45) NULL,"+
"`password` VARCHAR(45) NULL,"+
"`email` VARCHAR(45) NULL,"+
"PRIMARY KEY (`id`)"+
");");



module.exports={
    q,
    escape:connection.escape
}