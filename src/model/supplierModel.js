const mongoose = require("mongoose")

const supplierModel = new mongoose.Schema({

    date: {
        type: Date,
        default: Date.now
    },

    supplier_currency: {
        type: String,
        required: true
    },
    supplier_name: {
        type: String,
        required: true
    },
    short_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        address_line1: {
            type: String,
            trim: true
        },
        address_line2: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            trim: true
        }
    }
    
})


module.exports = mongoose.model("supplier", supplierModel)