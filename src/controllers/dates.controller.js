const axios = require('axios');
const controller = {};

controller.list = (req, res) => {
    req.getConnection( (err, conn) => {
        conn.query('SELECT * FROM dates', (err, list) => {
        console.log("controller.list -> list", list)
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
            /* INSERT INTO `sql10342273`.`dates` (`iddates`, `dates`, `commissions_total`, `sales_net`, `leads_net`, `clicks`, `epc`, `impressions`) VALUES ('1', '18/02', '185', '158', '126', '12', '1', '1566'); */
            conn.query('INSERT INTO dates set ?',[value], (err, dates) =>{
                console.log('dates',dates);
                console.log('error-MYSQL RESPONSE', err)
            })
        })
    });
    
};

module.exports = controller;