const express = require('express');
const {
    addController,
    allController,
    deleteController
} = require('../controller/quotationController');

const router = express.Router();
router.post('/create', addController);
router.get('/all', allController);
router.delete('/remove', deleteController);


module.exports = router;
