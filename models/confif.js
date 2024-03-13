const mongoose = require("mongoose")

exports.connection = ()=>{
    try {
        mongoose.connect("mongodb+srv://Rishabh:Rishabh@rishabh.w1lh1as.mongodb.net/React?retryWrites=true&w=majority&appName=Rishabh")
        console.log("connectionstablised")
    } catch (error) {
     console.log(error)        
    }

}