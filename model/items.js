const mongoose=require('mongoose')
   
let itemSchema=new mongoose.Schema({
    field:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    imgtitle:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    totalanguage:{
        type:String
    },
    language:{
        type:String,
        
    },
    year:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    genre:{
        type:String
       
    },
    channel:{
        type:String
        
    }
    
})

module.exports=mongoose.model('Item',itemSchema)