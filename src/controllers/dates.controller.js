const ws = require('../controllers/webscrapper.controller');
const axios = require('axios');
const controller = {};
const dates = [];

async function saveData(){
    const dateslist = await ws.main();
    console.log(dateslist);
    /* await axios.post('http://localhost:8080/api/dates', dateslist); */
}


controller.list = (req, res) => {
    req.getConnection(async (err, conn) => {
        await saveData()
        await conn.query('SELECT * FROM data', (err, list) => {
            if(err) {
                res.json(error);                
            }
            res.render('index', {
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