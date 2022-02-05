const db = require("./db.js");

const consultas={
    login:(req,res)=>{
        db.q("SELECT * FROM users WHERE name="+db.escape(req.user),(errors,results,fields)=>{
            console.log(results);
        });
    }
}