const express = require('express');
const router = express.Router();

const usersData = require('../controllers/users.controller')


router.get('/', (req, res, next) => {
    
    const data = usersData.data;
    console.log("data", data)
 
    res.render('index', {
        data: data,
    })
})

module.exports = router;