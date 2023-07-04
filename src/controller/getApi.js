
const dashboard = require("../model/SalesModel")
const productModel = require("../model/productModel")
const purchaseModel = require("../model/purchaseModel")
 


const getdashboard= async(req,res)=>{
   try {
        const data = await dashboard.find()
    res.json({status:true , data : data})


}catch(err){
    console.log(err.message)  
}

} 



const getProduct = async(req,res)=>{
    try{
        let data = await productModel.find()
        res.json({status : true , data : data })

    }catch(err){  
        console.log("problem in product")
    }

}

const getPurchase = async(req,res)=>{
    try{
        let data  = await purchaseModel.find()
        res.json({status : true , data : data})


    }catch(err){
        console.log("problem")

    }
}

module.exports = {getdashboard,getPurchase,getProduct}