const order = require("../model/orderSchema")
const item = require("../model/itemmodel")
const dashboard = require("../model/schemaModel")



const saveorder = async(req,res)=>{
     try {
         const body = req.body
         await order.create(body)
         return  res.json({ status: true,message: 'data saved' })
     
    }catch(err){
        console.log(err.message)
        res.json({ status : false,message: err })

    }

}

const saveitem = async(req,res)=>{
    try {
        const body = req.body
        await item.create(body)
        return  res.json({ status: true,message: 'data saved' })
    
   }catch(err){
    console.log(err.message)
       res.json({ status : false,message: err })

   }

}


const getitems = async(req,res)=>{
    try {
        console.log("hello")
      let data = await item.find()
      res.json({status:true , data : data})


    }catch(err){
     console.log(err.message)
    }
}



const Dashboard  =async (req,res)=>{
    try {
        const body = req.body 
        let data = await dashboard.create(body)
        res.json({status:true , data : data})
    }catch(err){
      console.log(err.message)
    }
}


const getdashboard= async(req,res)=>{
   try {
        const data = await dashboard.find()
    res.json({status:true , data : data})


}catch(err){
    console.log(err.message)
}

} 


module.exports = {saveorder,saveitem,getitems,Dashboard,getdashboard}