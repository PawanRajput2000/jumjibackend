const order = require("../model/orderSchema")
const item = require("../model/itemmodel")



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
      let data = await item.find()
      res.json({status:true , data : data})


    }catch(err){
     console.log(err.message)
    }
}

module.exports = {saveorder,saveitem,getitems}