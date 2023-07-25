const {Router}=require('express');

const router=Router();

const getInformation= require("../controllers/IncomeController");


//router.get("/information",getInformation);
router.post("/information",getInformation);
module.exports=router;
