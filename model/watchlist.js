const mongoose=require('mongoose')

let watchlistSchema=new mongoose.Schema({
    id:{
        type:String
    },
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
    language:{
        type:String,
        
    },
    totalanguage:{
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
        type:String,
       
    },
    channel:{
        type:String,
        
    }
    
})

module.exports=mongoose.model('WatchList',watchlistSchema)