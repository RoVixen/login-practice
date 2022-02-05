const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static('view'));

app.get('/',(req,res)=>{
    res.render('index');
});

app.listen(PORT,()=>{
    console.log('listening in http://localhost:'+PORT);
});
