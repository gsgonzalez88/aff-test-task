const myConnection = require('express-myconnection');
const mysql = require('mysql');
const path = require('path');
const express = require('express');
const app = express();

//route imports
const userRoutes = require('./routes/users.route');
const indexRoutes = require('./routes/index.route');

// set template engine
app.set('view engine', 'ejs');
const viewsDir = path.join(__dirname,'views');
app.set('views', viewsDir);

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());



app.use(express.static(viewsDir));

app.use(myConnection(mysql,{
    host: 'sql10.freemysqlhosting.net',
    database: 'sql10342273',
    user: '',
    password: ''    
}, 'single'));

//Routes
app.use('/', indexRoutes);
app.use('/api/users', userRoutes);


//static files
app.use(express.static(path.join(__dirname,'public')));

//Set environment port
const port = process.env.PORT || 8080;

console.log(`Server Listening on port: ${port}`);
app.listen(port);
