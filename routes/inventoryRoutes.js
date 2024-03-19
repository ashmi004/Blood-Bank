const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController, getInventoryController } = require('../controller/inventoryController');

const router = express.Router();

//routes
//add inventory ||post

router.post("/create-inventory",authMiddleware,createInventoryController);
//Getting all BLOOD RECORD
router.get('/get-inventory',authMiddleware,getInventoryController);


module.exports = router;


