const router = require('express').Router();
const userController = require('../../controllers/userController');

// All API's go here

// Register
router.post('/register', userController.register);

module.exports = router;
