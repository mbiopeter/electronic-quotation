const express = require('express');
const {
    addController,
    allController,
    oneController,
    deleteController
} = require('../controller/ItemsController');

const router = express.Router();
router.post('/create', addController);
router.get('/all', allController);
router.delete('/remove', deleteController);
router.get('/one', oneController);


module.exports = router;
