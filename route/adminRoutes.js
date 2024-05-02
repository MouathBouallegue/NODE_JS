// adminRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../model/user');
const adminController = require('../controller/adminController');


router.get('/register', adminController.renderRegisterPage);
router.post('/register', adminController.registerAdmin);
// Route for creating an admin user
router.post('/create-admin', async (req, res) => {
    try {
        // Check if the user making the request is authorized to create admin accounts
        if (!req.user || !req.user.isAdmin) {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        // Check if the admin user already exists
        const existingAdmin = await User.findOne({ isAdmin: true });
        if (existingAdmin) {
            return res.status(400).json({ error: 'Admin user already exists' });
        }

        // Create the admin user
        const admin = new User({
            username: req.body.username,
            password: req.body.password,
            isAdmin: true
        });

        // Save the admin user to the database
        await admin.save();

        res.status(201).json({ message: 'Admin user created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
