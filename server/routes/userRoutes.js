const express = require('express');
const {
    register,
    getOne,
} = require('../controller/userController');

const router = express.Router();
router.post('/create', register);
router.get('/one', getOne);


module.exports = router;
