const cart=require("../models/cart");
const add_to_cart= async(req,res)=>{

try{
    const cart_obj
=new cart({
    product_id:req.body.product_id,
    price: req.body.price,
    vendor_id: req.body.vendor_id,
    storeid: req.body.store_id
});
const cartData=await cart_obj.save();
res.status(200).send({
    success: true, msg:" cart product detial",data: cartData
})
}
catch(error){
    res.status(400).send({success:false,msg:error.message})
}
};
module.exports={
    add_to_cart
}