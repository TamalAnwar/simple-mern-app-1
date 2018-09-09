const router = require('express').Router();
const userController = require('../../controllers/userController');
const authController = require('../../controllers/authController');

// All API's go here

// Register

// 1. check if the user already exists
// This may happen with REST api too but this step will be there as a preventive measure.
// 2. validate the user form etc
// 3. register the user
// 4. login the user

router.post('/register', userController.checkUser, userController.register);

module.exports = router;
