const User = require("../models/User");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router=require("express").Router();



     // Normal get and post method in express
 
// router.get('/usertest',(req,res)=>{
//     res.send("user test is success");
// });


// router.post("/userposttest",(req,res)=>{
//     const username=req.body.user;
//     console.log(username);
//     res.send("you username "+username);
// })


//UPDATE

router.put("/update/:id",verifyTokenAndAuthorization, async(req,res)=>{

     if(req.body.password){
          req.body.password=CryptoJS.AES.encrypt(req.body.password,process.env.Pass_SEC).toString();
     }

     try{ 
          const updatedUser=await User.findByIdAndUpdate(req.params.id,{
               $set:req.body,                                              //$set --> is used to set the updated value of the user db
          },{new:true});                                                  // new --> This is a boolean-type option. If true, return the modified document rather than the original.
          res.status(200).json(updatedUser)
     }
     catch(err){
          res.status(500).json(err);
     }
})

//Delete the login 

router.delete("/delete/:id",verifyTokenAndAuthorization, async(req,res)=>{

     try{ 
          await User.findByIdAndDelete(req.params.id)
          res.status(200).json("You account is deleted successfully")
     }
     catch(err){
          res.status(500).json(err);
     }
})

//Get user

router.get("/find/:id",verifyTokenAndAdmin, async(req,res)=>{

     try{ 
         const user=  await User.findById(req.params.id)
         const {password,...others}=user._doc          //mongodb save all value in _doc
         res.status(200).json(others);
     }
     catch(err){
          res.status(500).json(err);
     }
})

//Get all user

router.get("/find/",verifyTokenAndAdmin, async(req,res)=>{
     const query=req.query.new              //new is a variable in url
     try{ 
         const users= query ? await User.find().sort({_id:-1}).limit(5) : await User.find()
         res.status(200).json(users);
     }
     catch(err){
          res.status(500).json(err);
     }
})

//Get stats

router.get('/stats',verifyTokenAndAdmin,async(req,res)=>{
     const date=new Date();
     const lastYear=new Date(date.setFullYear(date.getFullYear()-1));
     try{
          const data=await User.aggregate([
               {$match:{createdAt:{$gte:lastYear}}},
               {
                    $project:{
                         month:{$month:"$createdAt"},
                    },
               },
               {
                    $group:{
                         _id : "$month",
                         total: {$sum :1}
                    },
               },
          ])
          res.status(200).json(data);
     }
     catch(err){
          res.status(500).json(err);
     }
})

module.exports=router