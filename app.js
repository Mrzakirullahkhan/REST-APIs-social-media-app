// require("dotenv").config();
const express  =require("express");
const app = express();
const PORT = 800;
const connectDB = require("./db/connect");


const product_routes = require("./routes/routes");
const { connect } = require("mongoose");

// yaha me routes ko export kr rha hu from express.js se 
const router = express.Router();


app.get("/",(req, res)=>{
    res.send("hello world")
})

app.use("/auth/login", product_routes)

 
let listen = async () =>  {
    try {
        await connectDB();
        app.listen(PORT, ()=>{  
            console.log(`server chal rha hai ${PORT} pe `)
        })
    } catch (error) {
        console.log("====>> ye eroor arha hai " + error)
    }  
}


listen();