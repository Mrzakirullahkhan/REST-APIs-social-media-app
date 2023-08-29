const mongoose = require("mongoose");


const uri = "mongodb+srv://mrzak802:ubit2023@project2023.pvozckz.mongodb.net/project2023?retryWrites=true&w=majority"
const mongooseDB = ()=>{
    
    return mongoose.connect(uri,{
        useNewUrlparser: true,
        useUnifiedTopology: true,
    });
};

module.exports = uri;
module.exports = mongooseDB;