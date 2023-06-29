const express = require("express")
const app = express()
const router = require("./routes/router")
const mongoose = require("mongoose")
const cors = require("cors")
app.use(express.json())
require('dotenv').config()

app.use(cors())

mongoose.connect("mongodb+srv://functionup-cohert:yCRgEggIFfjlaB8o@sl0yd7n.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => {
        console.log("mongodb connected")
    }).catch(err => {
        console.log(err.message)
    })

app.use("/", router)

app.listen(5000, () => {
    console.log(`port is running on ${5000}`)
})