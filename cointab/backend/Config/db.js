const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://rajkumarmahto:rajkumarmahto@cluster0.nkn5o15.mongodb.net/?retryWrites=true&w=majority")

module.exports={connection}