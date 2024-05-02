//create router register,login
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');


exports.register=async (req,res)=>{
    try {
        const {username,password}=req.body;
        console.log(req.body)
        const user = new User({username,password});
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send(error.message)
    }
}

//user login 
exports.login = async (req,res)=>{
  try {
      const {email,password}=req.body;
      console.log(req.body)
      const user = await User.findOne({email: email});
      if(!user){
         console.log('not user')
          
      }
      const isPasswordMatch =await bcrypt.compare(password,user.password);
     if(!isPasswordMatch){
      console.log('not password')

          console.log('user ==>',user)
      }
      const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
      console.log('token==>',token)
      res.cookie('jwtToken', token, {
          maxAge: 3600000, 
          httpOnly: true,
          secure: false, 
        });
        console.log('user ==> ',user);
        res.redirect('/rooms');
     // res.redirect('/reservation');

  } catch (err) {
      console.log(err);
  }
}
exports.registrePage = async (req, res) => {
    try {
        res.render("registre", { Message: null });

    } catch (err) {
      res.status(404).send("Page Not Found !");
    }
  };

  exports.loginPage = async (req, res) => {
    try {
        res.render("login", { Message: null });
   
    } catch (err) {
      res.status(404).send("Page Not Found !");
    }
  };
  exports.home = async (req, res) => {
    try {
        res.render("home");
        
    } catch (err) {
      res.status(404).send("Page Not Found !");
    }
  };
