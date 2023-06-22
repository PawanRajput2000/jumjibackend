const mongoose = require("mongoose")


const registration = new mongoose.Schema({
    Fullname : {
        type : String,
        require : true
    },
    Email : {
        type : String ,
        require : true,
        unique : true
    },
    Password :{
        type : String,
        require : true
    }
},{timestamps: true})


module.exports = mongoose.model("registration", registration)