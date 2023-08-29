
// ab mene data read krna hau 
const product = require("../models/model");

// ........
const getAllTheProducts = async (req, res)=>{ 
    // ye ab sara data read krega 
   const myData=  await product.find({})
 res.status(200).json({myData})
    
        // res.status(200).json({msg:"yes user login data"})
}

const getAllTheProductsTesting = async (req, res)=>{
    res.status(200).json({msg: "it is just for testing"})
}


// ye yha se hogya export 
module.exports = {getAllTheProducts, getAllTheProductsTesting};