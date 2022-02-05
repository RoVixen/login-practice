const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db.js');
const api = require("./api.js");

const app = express();

const PORT = 3000;

app.use(express.static('view'));
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/view/:path0/:path1',(req,res)=>{
    res.sendFile(__dirname+"/view/"+req.params.path0+"/"+req.params.path1);
});

app.get('/view/:path0',(req,res)=>{
    res.sendFile(__dirname+"/view/"+req.params.path0);
});

app.post("/api",(req,res)=>{
    api[req.body.action](req,res);
});


app.listen(PORT,()=>{
    console.log('listening in http://localhost:'+PORT);
});