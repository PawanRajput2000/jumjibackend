
const mongoose = require("mongoose")


const product = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    
    product_name: {
        type: String,
        required: true
    },
    short_name: {
        type: String,
        required: true
    },
    supplier_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "supplier", 
        required: true
      },
    asin: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    stock: [{
        location: { type: String, required: true },
        stock: { type: Number, required: true },
        days: { type: Number, required: true }
    }],
    supplier_order: [{
        supplier: { type: String, required: true },
        qty: { type: Number, required: true },
        days: { type: Number, required: true }
    }]

})


module.exports = mongoose.model("product", product)