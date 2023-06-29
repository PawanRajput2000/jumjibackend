const express = require("express")
const router = express.Router()

const register  =  require('../controller/registrationController')
const {forgetPassword,resetPassword} = require("../controller/otpGenerator")
const {saveitem,saveorder,getitems} = require("../controller/extraController")

router.post("/signup",register.signIN)
router.post("/login", register.logIN)

router.post('/forgetPassword', forgetPassword)
 router.post('/reset-password/:token',resetPassword)

 router.post("/order",saveorder)
 router.post("/item",saveitem)

 router.get("/items",getitems)

module.exports = router