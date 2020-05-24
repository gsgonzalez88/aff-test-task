const axios = require('axios');
const controller = {};
const dates = [];


controller.list = (req, res) => {
    req.getConnection( (err, conn) => {
        conn.query('SELECT * FROM dates', (err, list) => {
            if(err) {
                res.json(error);                
            }
            res.render('dates', {
                dates: list
            })
        });
    })
};




controller.save = (req, res) => {
    req.body.forEach((value,index)=> {
        req.getConnection((err, conn) => {        
            conn.query('INSERT INTO dates set ?',[value], (err, dates) =>{
                console.log('dates',dates);
            })
        })
    });
    
};

module.exports = controller;
exports.dates = dates;