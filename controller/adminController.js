// adminController.js
const User = require('../model/user');
// Function to render the registration page for admin
const renderRegisterPage = (req, res) => {
    res.render('registre'); // Assuming you have a view file named register.ejs in the admin directory
};

// Function to handle registration form submission for admin
const registerAdmin = (req, res) => {
    // Logic to process the registration form submission goes here
};

exports.registerAdmin=async (req,res)=>{
    try {
        const {username,password}=req.body;
        console.log(req.body)
        const user = new User({username,password});
        await user.save();
        res.status(201).send('ADMIN registered successfully');
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    renderRegisterPage,
    registerAdmin
    
};
