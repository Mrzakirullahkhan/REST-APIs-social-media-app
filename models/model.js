const mongoose = require('mongoose');

const myProductSchema = mongoose.Schema({
    name:{

        type : String,
        required: [false,"the name must be provided"],
    },
    fatherName:{
        
        type : String,
        required: false,
    },
    age: {
        
        type : Number,
        required: [false, "age must be required"],
        // 
    },
    age: {
        
        type : Number,
        required: true,
    },
    rating :{
        type:Number,
        default:5.0,
    },
    
    createdAt: 
    {
        type:Date,
        default: Date.now(),
    },

})


module.exports = mongoose.model("product", myProductSchema);