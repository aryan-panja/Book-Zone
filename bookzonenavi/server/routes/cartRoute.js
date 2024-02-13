const express = require('express');
const router= express();
const bodyParser=require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
const cart_controller=require("../controllers/cartController");

router.post('add-to-cart',cart_controller.add_to_cart);
module.exports= router;