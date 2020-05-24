const express = require('express');
const router = express.Router();
const datesController = require('../controllers/dates.controller');


router.get('/', datesController.list);
router.post('/', datesController.save);

module.exports = router;