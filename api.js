const db = require("./db.js");

const consultas={
    login:(req,res)=>{
        db.q("SELECT * FROM users WHERE name = "+db.connection.escape(req.body.name),(results)=>{
            if(results.length==0)
                return res.send({
                    mensaje:"Wrong username"
                });
            
            if(results.length>1)
                return res.send({
                    mensaje:"Este usuario esta repetido"
                });
            
            const userData=results[0];
            if(userData.name!=req.body.name)
                return res.send({
                    mensaje:"Este usuario... no entendi"
                });
            
            if(userData.password!=req.body.password)
                return res.send({
                    mensaje:"Contraseña incorrecta"
                });
            
            return res.send({
                mensaje:"Bienvenido",
                result:true
            });
        });
    }
}

//consultas.login({body:{name:"asdfa",password:"asdfa"}},{send:(obj)=>{console.log(obj);}});