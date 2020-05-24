const express = require('express');
const router = express.Router();
const datesController = require('../controllers/dates.controller');
const dbController = require('../controllers/db.controller')

router.get('/', datesController.list);
router.post('/', datesController.save);
router.post('/save',dbController.saveData);

module.exports = router;