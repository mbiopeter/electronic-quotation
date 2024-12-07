const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');


const registerUser = async (firstName, secondName, email, password) => {
    try {
        if (!firstName || !secondName || !email || !password) {
            throw new Error(' all the fields are required !');
        }
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            throw new Error('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            firstName,
            secondName,
            email,
            password: hashedPassword,
            admin,
        });
        const token = jwt.sign({ id: newUser.id, email: newUser.email, firstName: newUser.firstName, secondName: newUser.secondName }, 'secretkey', { expiresIn: '2h' });
        return { token, user: newUser };
    } catch (error) {
        throw error;
    }

};

const oneUser = async (userId) => {
    try {
        const user = await User.findOne({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password']
            },
            where: { id: userId }
        });
        if (!user) {
            throw new Error('User not found in our records');
        }
        return user;
    } catch (err) {
        throw err;
    }
};


module.exports = {
    registerUser,
    oneUser,
};
