const express = require("express")
const router = express.Router()
const userController= require("../controller/userController")


router.post('/register',userController.register)
router.post('/login',userController.login)
router.get('/register',userController.registrePage)
router.get('/login',userController.loginPage)
router.get('/home',userController.home)
module.exports=router
