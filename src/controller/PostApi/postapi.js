
const supplierModel = require("../../model/supplierModel")
const product = require("../../model/productModel")
const purchaseModel = require("../../model/purchaseModel")



const createSupplier = async (req,res)=>{
    try{
        let body = req.body 
        console.log(body)
        let data = await supplierModel.create(body)
        res.json({status : true , data : data})

    }catch(err){
        console.log(err.message)
        res.json({status:false  ,  data : "internal server error"})
    }
}

const createProduct  = async (req,res)=>{
    try{
        let body = req.body 
        console.log(body)
        let data = await product.create(body)
        res.json({status : true , data : data})

    }catch(err){
        console.log(err.message)
        res.json({status:false  ,  data : "internal server error"})
    }
}
 

const createpurchase = async(req,res)=>{
    try{
        let body = req.body
        console.log(body)
        let data = await purchaseModel.create(body)
        res.json({status : true , data : data})

    }catch(err){
        res.json({status : false , data : "internal server error "})

    }
}


module.exports = { createSupplier,createProduct,createpurchase}