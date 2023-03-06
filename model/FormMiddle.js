const mongoose=require('mongoose')



const FormModel=new mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    gstnumb:{
    type:Number
    },
    userId:{
        type:String
        }

})


 const formdata=mongoose.model('Middleware',FormModel)
 module.exports=formdata
