const express = require("express");
const router = express.Router();

// yha hoga import
const {getAllTheProducts,getAllTheProductsTesting} = require("../controller/controller")


router.route("/").get(getAllTheProducts)
router.route("/testing").get(getAllTheProductsTesting)



// yha router ko pass krna hoga 
module.exports = router