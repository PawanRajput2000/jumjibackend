const express = require("express")
const router = express.Router()

const register  =  require('../controller/registrationController')
const {forgetPassword,resetPassword} = require("../controller/otpGenerator")
const {getdashboard, getProduct, getPurchase, getDetailsUsingDate} = require("../controller/getApi")

const {createSupplier,createProduct, createpurchase} = require('../controller/PostApi/postapi')

router.post("/signup",register.signIN)
router.post("/login", register.logIN)

router.post('/forgetPassword', forgetPassword)
 router.post('/reset-password/:token',resetPassword)




 router.get("/getdashboard",getdashboard)

 router.post("/createsupplier", createSupplier)
 router.get("/getsupplierDetails",)

 router.post("/createproduct",createProduct)
 router.get("/getproduct",getProduct)

 router.post('/createpurchase', createpurchase)
 router.get('/getpurchase', getPurchase)


 router.get('/detailsinrange',getDetailsUsingDate)
 

module.exports = router