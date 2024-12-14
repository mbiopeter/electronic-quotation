const {
    registerUser,
    oneUser,
} = require('../services/userService');

const register = async (req, res) => {
    const { firstName, secondName, email, password } = req.body;
    try {
        const { token } = await registerUser(firstName, secondName, email, password);
        res.status(200).json({
            message: 'Registration successful',
            token
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getOne = async (req, res) => {
    try {
        const userId = req.query.id;
        const user = await oneUser(userId)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    register,
    getOne,
};
