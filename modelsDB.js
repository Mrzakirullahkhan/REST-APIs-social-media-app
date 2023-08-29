// yaha me database ko connect krne ja rha hu 
const connectDb = require("./db/connect");
const model = require("./models/model");
const uri = require('./db/connect');
const productJson = require("./models.json")

const start =  async() =>{
    try {

        await connectDb(uri)
        await model.create(productJson);
        console.log("data pass hogya ") 

    } catch (error) {
        console.log("ye naya error arha hai ==>" + error)
    }
}



start()