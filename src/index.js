const myConnection = require('express-myconnection');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

const publicDir = path.join(__dirname,'../public');
app.use(express.static(publicDir));

app.use(myConnection(mysql,{
    host: 'sql10.freemysqlhosting.net',
    database: 'sql10342273',
    user: '',
    password: ''    
}, 'single'));


//setting environment port
const port = process.env.PORT || 8080;

console.log(`Server Listening on port: ${port}`);
app.listen(port);
