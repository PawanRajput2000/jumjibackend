const express = require("express")
const router = express.Router()

const register  =  require('../controller/registrationController')
const {forgetPassword,resetPassword} = require("../controller/otpGenerator")

router.post("/signup",register.signIN)
router.post("/login", register.logIN)

router.post('/forgetPassword', forgetPassword)
 router.post('/reset-password/:token',resetPassword)


module.exports = router