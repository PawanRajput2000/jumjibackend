const mongoose = require("mongoose")


const purchase = new mongoose.Schema({

    
    date: {
        type: Date,
        default: Date.now
    },
    supplier_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "supplier",
        required: true
    },
    Items: [{
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        exp_date: {
            type: Date,
            default : function() {
                const currentDate = new Date()
                const defaultDate = new Date(currentDate.setDate(currentDate.getDate() + 7));
                return defaultDate
             }
        },
        received_date:{
             type : Date , 
             required : true 
},
        received_quantity :{
            type : Number , 
            required : true,
            default: 0

        },
        warehouse :{
            type : String , 
            required : true 

        }
    }
    ],

    transport_cost: {
        type: Number,
        required: true
    },
    shipping_agent: {
        type: String,
        required: true
    },
    agent_mobile: {
        type: String,
        required: true
    },
    received :{
        type : Boolean,
        required :false 
    }

})



module.exports = mongoose.model("purchase",purchase)