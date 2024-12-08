const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Payment = sequelize.define('Payment', {
    equityAccount: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    equityName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    paybill: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
    },
    paybillAccount: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    paybillName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    sendMoneyNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    sendMoneyName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },

}, {
    timestamps: true,
});

module.exports = Payment;
