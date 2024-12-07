const express = require('express');
const { loginController } = require('../controller/authController'); // Import the controller

const router = express.Router();

// Define the login route
router.post('/login', loginController);

module.exports = router;
