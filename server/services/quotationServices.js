const Quotations = require('../models/quotations');

const addService = async (
    name,
    phone,
    description,
) => {
    try {
        if (!name || !phone || !description) {
            throw new Error('All the fields are required!');
        }
        const newQuotation = await Quotations.create({
            name,
            phone,
            description
        })
        return newQuotation;
    } catch (error) {
        throw error;
    }
}

const allService = async () => {
    try {
        const allQuotations = await Quotations.findAll();
        return allQuotations;
    } catch (error) {
        throw error;
    }
}

const oneService = async (
    name,
    phone,
    description
) => {
    try {
        if (!name || !phone || !description) {
            throw new Error('All the fields are required!');
        }
        const response = await Quotations.findOne({
            where: {
                name,
                phone,
                description,
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addService,
    allService,
    oneService
}