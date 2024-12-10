const Quotations = require('../models/quotations');
const {
    addService,
    allService,
    oneService
} = require('../services/quotationServices');
const { remove } = require('../utils/deleteService');

const addController = async (req, res) => {
    try {
        const { name, phone, description } = req.body;
        const checkExistence = await oneService(name, phone, description);
        if (checkExistence) {
            console.log(checkExistence)
            res.status(400).json({ message: 'Quotation already exist!' });
        }
        else {
            await addService(name, phone, description);
            res.status(200).json({ message: 'Quotation added sucessfully!' });
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const allController = async (req, res) => {
    try {
        const responseData = await allService();
        res.status(200).json(responseData);
    } catch (error) {
        res.status(400).json(error.message);
    }
}


const deleteController = async (req, res) => {
    try {
        const id = req.query.id;
        const response = await remove(id, Quotations);
        if (!response) {
            res.status(400).json({ message: 'Unable to delete the quotation at the moment!' })
        }
        res.status(200).json({ message: 'Quotation deleted successfully!' });
    } catch (error) {
        res.status(200).json(error.message);
    }
}

module.exports = {
    addController,
    allController,
    deleteController
}