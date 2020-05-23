const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const dbController = require('../controllers/db.controller')


router.get('/', userController.list);
router.post('/', userController.save);
router.post('/save', dbController.saveUsers);

module.exports = router;