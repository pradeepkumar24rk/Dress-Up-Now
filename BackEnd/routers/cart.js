const router=require("express").Router();
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin  } = require("./verifyToken");
const Cart =require("../models/Cart");


//ADD CART

router.post('/',verifyToken,async(req,res)=>{
    const newCart=new Cart(req.body);
    try{
        const saveCart = await newCart.save();
        res.status(201).json(saveCart);

    }
    catch(err){
        res.status(500).json(err);
    }
})

//UPDATE

router.put("/:id",verifyTokenAndAuthorization, async(req,res)=>{

    try{ 
         const updatedCart=await Cart.findByIdAndUpdate(req.params.id,{
              $set:req.body,                                              //$set --> is used to set the updated value of the user db
         },{new:true});                                                  // new --> This is a boolean-type option. If true, return the modified document rather than the original.
         res.status(200).json(updatedCart)
    }
    catch(err){
         res.status(500).json(err);
    }
})

//Delete the CART

router.delete("/:id",verifyTokenAndAdmin, async(req,res)=>{

    try{ 
         await Product.findByIdAndDelete(req.params.id)
         res.status(200).json("You account is deleted successfully")
    }
    catch(err){
         res.status(500).json(err);
    }
})

//Get user CART

router.get("/find/:userId",verifyTokenAndAuthorization, async(req,res)=>{

    try{ 
        const Cart=  await Cart.findOne({userId:req.params.userId});
        res.status(200).json(Cart);
    }
    catch(err){
         res.status(500).json(err);
    }
})

//Get all cart

router.get("/",verifyTokenAndAdmin, async(req,res)=>{
    try{ 
        const Cart=  await Cart.find();
        res.status(200).json(Cart);
    }
    catch(err){
         res.status(500).json(err);
    }
})


module.exports=router