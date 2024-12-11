const express = require('express');
const {
    addController,
    allController,
    deleteController,
    oneController
} = require('../controller/quotationController');

const router = express.Router();
router.post('/create', addController);
router.get('/all', allController);
router.delete('/remove', deleteController);
router.get('/one', oneController);


module.exports = router;
