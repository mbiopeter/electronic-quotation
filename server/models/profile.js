const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profile = sequelize.define('Profile', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    email: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    kra: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    signature: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },

}, {
    timestamps: true,
});

module.exports = Profile;
