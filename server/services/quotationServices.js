const Quotations = require('../models/quotations');

const addService = async (
    name,
    phone,
    description,
) => {
    try {
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
        const allQuotations = await Quotations.findAll({
            attributes: ['id', 'name', 'phone', 'description'],
        });

        const formattedQuotations = allQuotations.map(item => ({
            id: item.id,
            QuoteNo: `Quote-${item.id}`,
            desc: item.description,
            toName: item.name,
            toPhone: item.phone,
        }));

        return formattedQuotations;
    } catch (error) {
        console.error("Error fetching quotations:", error);
        throw error;
    }
};

const oneService = async (
    name,
    phone,
    description
) => {
    try {
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