const router=require("express").Router();
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin  } = require("./verifyToken");
const Order =require("../models/Order");


//ADD Order

router.post('/',verifyToken,async(req,res)=>{
    const newOrder=new Order(req.body);
    try{
        const saveOrder = await newOrder.save();
        res.status(201).json(saveOrder);

    }
    catch(err){
        res.status(500).json(err);
    }
})

//UPDATE

router.put("/:id",verifyTokenAndAdmin, async(req,res)=>{

    try{ 
         const updatedOrder=await Order.findByIdAndUpdate(req.params.id,{
              $set:req.body,                                              //$set --> is used to set the updated value of the user db
         },{new:true});                                                  // new --> This is a boolean-type option. If true, return the modified document rather than the original.
         res.status(200).json(updatedOrder)
    }
    catch(err){
         res.status(500).json(err);
    }
})

//Delete the Order

router.delete("/:id",verifyTokenAndAdmin, async(req,res)=>{

    try{ 
         await Order.findByIdAndDelete(req.params.id)
         res.status(200).json("You account is deleted successfully")
    }
    catch(err){
         res.status(500).json(err);
    }
})

//Get user Orders

router.get("/find/:userId",verifyTokenAndAuthorization, async(req,res)=>{

    try{ 
        const orders=  await Order.find({userId:req.params.userId});
        res.status(200).json(orders);
    }
    catch(err){
         res.status(500).json(err);
    }
})

//Get all orders

router.get("/",verifyTokenAndAdmin, async(req,res)=>{
    try{ 
        const orders=  await Order.find();
        res.status(200).json(orders);
    }
    catch(err){
         res.status(500).json(err);
    }
})

// Get monthly income

router.get("/income",verifyTokenAndAdmin,async(req,res)=>{
    const date=new Date();
    const lastMonth=new Date(date.setMonth(date.getMonth()-1));
    const previousMonth=new Date(new Date().setMonth(lastMonth.getMonth()-1));

    try{
        const income= await Order.aggregate([
            {$match:{ createdAt:{$gte:previousMonth}}},
            {

                $project:{
                    month:{ $month:"$createdAt"},
                    sales:"$amount",
                },
            },
                {

                    $group:{
                        _id:"$month",
                        total:{$sum: "$sales"}
                    },
                },
            
        ]);
        res.status(200).json(income)
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports=router