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



async function getDetailsUsingDate(req,res) {
    let fromDate = req.body.from
    let toDate = req.body.to
    console.log(fromDate , toDate)
    console.log(req.body)

    if(!fromDate || !toDate){
     return res.json({status : false , data : "Please enter valid date"})
    }
    try {
      const pipeline = [
        {
          $match: {
            date: {
              $gte: new Date(fromDate),
              $lte: new Date(toDate),
            },
          },
        },
        {
          $group: {
            _id: null,
            totalSales: { $sum: '$sales' },
            totalOrders: { $sum: '$orders' },
            totalItems: { $sum: '$items' },
            totalReturns: { $sum: '$returns' },
            totalAds: { $sum: '$ads' },
            totalAmazonFees: { $sum: '$amazonFees' },
            totalPromo: { $sum: '$promo' },
            totalGiftwrap: { $sum: '$giftwrap' },
            totalShipping: { $sum: '$shipping' },
            totalVAT: { $sum: '$vat' },
            totalPayout: { $sum: '$payout' },
            totalCostOfGoods: { $sum: '$costOfGoods' },
            totalGrossProfit: { $sum: '$grossProfit' },
            totalNetProfit: { $sum: '$netProfit' },
            totalMargin: { $avg: '$margin' },
            totalROI: { $avg: '$roi' },
          },
        },
      ];
  
      let  result = await dashboard.aggregate(pipeline);
      
       result =  result[0]; // Return the aggregated data
       if(result === undefined){
        return res.json({status : true , data : "data not found"})
       }
      
      return  res.json({status : true , data : result })

  
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      throw error;
    }
  }
  

module.exports = {getdashboard,getPurchase,getProduct,getDetailsUsingDate}