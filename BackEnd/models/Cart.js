const mongoose=require("mongoose");

const CartSchema=new mongoose.Schema(
    {                                                                     //objects
        userId:{ type:String, required:true},
        products:[
            {
                productId:{
                    type:String,
                },
                quantity:{
                    type:Number,
                    default:1,
                }
            
            },
        ],
        
    }, 
    {
        timestamps:true
    }
)

module.exports=mongoose.model("Cart",CartSchema);            //User ->model name; UserSchema ->schema name