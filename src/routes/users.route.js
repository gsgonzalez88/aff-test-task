const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller')

router.get('/', userController.list);
router.post('/', userController.save);

module.exports = router;