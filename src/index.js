const myConnection = require('express-myconnection');
const mysql = require('mysql');
const path = require('path');
const express = require('express');
const app = express();

//route imports
const userRoutes = require('./routes/users.route');
const boardRoutes = require('./routes/board.route');
const datesRoutes = require('./routes/dates.route');

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
    user: process.env.mysql_db_user,
    password: process.env.mysql_db_pw    
}, 'single'));
console.log('Connected to mysql Database');

//Routes
app.use('/', boardRoutes);
app.use('/api/users', userRoutes);
app.use('/api/dates', datesRoutes);


//static files
app.use(express.static(path.join(__dirname,'public')));

//Set environment port
const port = process.env.PORT || 8080;

console.log(`Server Listening on port: ${port}`);
app.listen(port);
