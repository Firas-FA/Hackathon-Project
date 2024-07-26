const express = require('express');
const router = express.Router();
const usercontroller=require("../../Controllers/UserControllers/authController")

router.post('/login',usercontroller.login)
router.post('/register',usercontroller.register)
module.exports = router;
