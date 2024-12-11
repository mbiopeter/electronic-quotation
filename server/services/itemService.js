const Items = require("../models/items");

const addService = async (
    quoteId,
    description,
    quantity,
    unit,
    rate,
    cts
) => {
    try {
        const response = await Items.create({
            quoteId,
            description,
            quantity,
            unit,
            rate,
            cts
        });
        if (!response) {
            return null;
        } else {
            return response;
        }

    } catch (error) {
        throw error;
    }
}

const allService = async (quoteId) => {
    try {
        const allItems = await Items.findAll({
            attributes: ['id', 'description', 'quantity', 'unit', 'rate', 'cts'],
            where: { quoteId }
        });

        const formattedItems = allItems.map(item => ({
            id: item.id,
            ItemNo: `Item-${item.id}`,
            desc: item.description,
            quantity: item.quantity,
            unit: item.unit,
            rate: item.rate,
            total: item.quantity * item.rate,
            cts: item.cts
        }));

        return formattedItems;
    } catch (error) {
        throw error;
    }
}

const checkService = async (
    quoteId,
    description,
    quantity,
    unit,
    rate,
    cts

) => {
    try {
        const existingItem = await Items.findOne({
            where: {
                quoteId,
                description,
                quantity,
                unit,
                rate,
                cts
            }
        });

        return existingItem;
    } catch (error) {
        throw error;
    }
}

const oneService = async (quoteId) => {
    try {
        const oneItems = await Items.findOne({
            attributes: ['id', 'quoteId', 'description', 'quantity', 'unit', 'rate', 'cts'],
            where: { quoteId }
        });

        const formattedItems = {
            id: oneItems.id,
            oneItemsNo: `item-${oneItems.id}`,
            desc: oneItems.description,
            quantity: oneItems.quantity,
            unit: oneItems.unit,
            rate: oneItems.rate,
            total: oneItems.quantity * oneItems.rate,
            cts: oneItems.cts
        };

        return formattedItems;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addService,
    allService,
    checkService,
    oneService
}