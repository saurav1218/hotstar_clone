const express=require('express')
const mongose=require('mongoose')
const app=express()
const path= require('path')



const cors=require('cors')

 const Users=require('./model/user.js')
 const Item=require('./model/items.js')
 const WatchLists=require('./model/watchlist.js')

 const port= process.env.PORT || 5001


//midle wares

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))


const dbURL='mongodb+srv://jayanthgama2001:jayanth%401234@cluster0.cki4zjh.mongodb.net/hotstar?retryWrites=true&w=majority'


mongose.connect(dbURL).then(()=>{
    console.log("data base connect");
 })



//signUp
app.post('/signUp',(req,res)=>{
  Users.findOne({phno:req.body.phno}).then((doc)=>{
    if(doc){
      res.send({message:'user is already exist'})
    }
    else{
      let data=new Users({
        username:req.body.username,
        phno:req.body.phno,
        password:req.body.password
      })
      data.save().then(()=>{
        res.send({message:'sign in successfull',status:200})
      }).catch((err)=>{
        res.send({message:'not catching the data'})
      })
    }
  })
})

//login
app.post('/login',(req,res)=>{
  Users.findOne({phno:req.body.phno}).then((doc)=>{
      if(doc){
          if(doc.password===req.body.password){
              res.send( {message:"login successfull",status:200} )
          }
          else{
              res.send({message:"login failed"})
          }
      }
      else{
          res.send({message:"user not found"})
      }
  })
})

// //for get items data
app.get("/items",async(req,res)=>{
     
     try{
        let data=await Item.find()
        res.json(data)

     }catch(error){
        console.log(error) 
     }
   

})
//post data to watchlist
app.post('/watchlist',(req,res)=>{
  WatchLists.findOne({title:req.body.title}).then((doc)=>{
    if(doc){
      res.send({message:'already added'})
    }
    else{
      let data=new WatchLists({
        id:req.body.id,
        field:req.body.field,
        type:req.body.type,
        image:req.body.image,
        imgtitle:req.body.imgtitle,
        title:req.body.title,
        language:req.body.language,
        totalanguage:req.body.totalanguage,
        year:req.body.year,
        description:req.body.description,
        genre:req.body.genre,
        channel:req.body.channel
       
         
        
        
      })
      data.save().then(()=>{
        res.send({message:'added to favrites'})
      }).catch((error)=>{
        res.send({message:'unsucessful'})
      })
    }
  })
})

// //for get items data
app.get("/watchlist",async(req,res)=>{
     
  try{
     let data=await WatchLists.find()
     res.json(data)

  }catch(error){
     console.log(error) 
  }
})




//static files
app.use(express.static(path.join(__dirname,"./hotstar/build")))

app.get('*',function (req,res){
  res.sendFile(path.join(__dirname,"./hotstar/build/index.html"))
})


app.listen(port,()=>{
    console.log("req port is created");
})





