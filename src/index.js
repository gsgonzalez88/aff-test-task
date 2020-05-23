const myConnection = require('express-myconnection');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//route imports
const userRoutes = require('./routes/users.route');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


// set template engine
app.set('view engine', 'ejs');
const viewsDir = path.join(__dirname,'views');


app.use(express.static(publicDir));

app.use(myConnection(mysql,{
    host: 'sql10.freemysqlhosting.net',
    database: 'sql10342273',
    user: '',
    password: ''    
}, 'single'));

//Routes
app.use('/api/users', userRoutes);

//Set environment port
const port = process.env.PORT || 8080;

console.log(`Server Listening on port: ${port}`);
app.listen(port);
