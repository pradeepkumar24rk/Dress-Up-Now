const router=require("express").Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Product =require("../models/Product");


//ADD product

router.post('/',verifyTokenAndAdmin,async(req,res)=>{
    const newProduct=new Product(req.body);
    try{
        const saveProduct = await newProduct.save();
        res.status(201).json(saveProduct);

    }
    catch(err){
        res.status(500).json(err);
    }
})

//UPDATE

router.put("/:id",verifyTokenAndAdmin, async(req,res)=>{

    try{ 
         const updatedProduct=await Product.findByIdAndUpdate(req.params.id,{
              $set:req.body,                                              //$set --> is used to set the updated value of the user db
         },{new:true});                                                  // new --> This is a boolean-type option. If true, return the modified document rather than the original.
         res.status(200).json(updatedProduct)
    }
    catch(err){
         res.status(500).json(err);
    }
})

//Delete the product 

router.delete("/:id",verifyTokenAndAdmin, async(req,res)=>{

    try{ 
         await Product.findByIdAndDelete(req.params.id)
         res.status(200).json("You account is deleted successfully")
    }
    catch(err){
         res.status(500).json(err);
    }
})

//Get product

router.get("/find/:id", async(req,res)=>{

    try{ 
        const Product=  await Product.findById(req.params.id)
        res.status(200).json(Product);
    }
    catch(err){
         res.status(500).json(err);
    }
})

//Get all user

router.get("/",verifyTokenAndAdmin, async(req,res)=>{
    const qnew=req.query.new              //new is a variable in url
    const qcategories=req.query.categories
    try{ 
        let products;
        if(qnew)
            products=await Product.find().sort({createdAt:-1}).limit(1)
        else if(qcategories){
            products=await Product.find({
                categories:{
                    $in:[qcategories]
                },
            })
        }
        else
            products=await Product.find();
        res.status(200).json(products);
    }
    catch(err){
         res.status(500).json(err);
    }
})


module.exports=router