const User = require('../models/userModel');

const userController = {
    getAllUsers: (req, res) => {
        User.getAll((err, users) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error fetching users',
                    error: err
                });
            }
            res.json({
                success: true,
                data: users
            });
        });
    }
};

module.exports = userController;