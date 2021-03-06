const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db.js');
const api = require("./api.js");

const app = express();

const PORT = 3000;

app.use(express.static('view'));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/register',(req,res)=>{
    res.render('register');
});

app.post("/api",(req,res)=>{
    api[req.body.action](req,res);
});

app.listen(PORT,()=>{
    console.log('listening in http://localhost:'+PORT);
});