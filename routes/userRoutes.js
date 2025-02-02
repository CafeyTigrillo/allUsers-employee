const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getAllUsersSystem', userController.getAllUsersSystem);

module.exports = router;