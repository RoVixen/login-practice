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
                success:true
            });
        });
    },
    register:(req,res)=>{
        if(!req.body.name)
            return res.send({
                mensaje:"Ingrese un nombre valido"
            });
        
        if(!(/\w*[@]\w*[.]\w*/.test(req.body.email)))
            return res.send({
                mensaje:"Ingrese un email valido"
            });

        if(!req.body.password)
            return res.send({
                mensaje:"Ingrese una contraseña valida"
            });
        
        if(req.body.password != req.body.repeat_password)
            return res.send({
                mensaje:"las contraseñas no coinciden"
            });
        
        db.q("INSERT INTO users(name,password,email) values ("+
        db.connection.escape(req.body.name)+","+
        db.connection.escape(req.body.password)+","+
        db.connection.escape(req.body.email)+")",(result)=>{
            if(result.insertedId>0)
                res.send({
                    mensaje:"Te haz registrado con exito",
                    success:true
                });
        });
    }
}

//consultas.login({body:{name:"asdfa",password:"asdfa"}},{send:(obj)=>{console.log(obj);}});