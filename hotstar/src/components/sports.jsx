import { useState,useEffect } from "react"
import '../style/sports.css'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"

let Sports=()=>{
    let [sports,setSports]=useState([])
    let [domi,setDomi]=useState([])

    let navigate=useNavigate()

   
 
    
  // Sports
  
  useEffect(()=>{
    let fetchData=async()=>{
      let res=await axios.get('http://localhost:5001/items')
     
      let fields=res.data.filter((x)=>x.field=='sports')
      setSports(fields)
      setDomi(fields)
    }
    fetchData()
  },[])

  //for cricket
  let cricket=()=>{
    let res=domi.filter((x)=>x.type=='cricket')
    setSports(res)
  }

  //for kabaddi
  let kabaddi=()=>{
    let res=domi.filter((x)=>x.type=='kabaddi')
    setSports(res)
  }

  //for football
  let football=()=>{
    let res=domi.filter((x)=>x.type=='foot ball')
    setSports(res)
  }

  //for hockey
  let hockey=()=>{
    let res=domi.filter((x)=>x.type=='hockey')
    setSports(res)
  }

  //for tennis
  let tennis=()=>{
    let res=domi.filter((x)=>x.type=='tennis')
    setSports(res)
  }

  //fav
  let addFav=(title)=>{
    sports.filter((x)=>{
      if(x.title==title){
        let data={
          id:x.id,
          field:x.field,
          type:x.type,
          image:x.image,
          imgtitle:x.imgtitle,
          title:x.title,
          totalanguage:x.totalanguage,
          language:x.language,
          year:x.year,
          description:x.description,
          genre:x.genre,
          channel:x.channel
         }
         axios.post('http://localhost:5001/watchlist',data).then((res)=>{
          alert(res.data.message)
         })
      }
    })

  }

    
    
    
   
    return(
      <div className="sports">
        <div className="sportsField">
          <div className="type">
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/6630/1526630-a-9b9ea791cdaf" alt="" onClick={cricket} />
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/4550/1534550-a-fc4b5ad51967" alt="" onClick={football}/>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/6635/1526635-a-453e30065a30" alt="" onClick={kabaddi}/>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/6643/1526643-a-95b16247c411" alt="" onClick={hockey}/>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/6639/1526639-a-741d71091ea7" alt="" onClick={tennis}/>
          </div>
                   <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  {
            sports.map((x)=>{
              return(
                <div class="carousel-item active">
    <img src={x.image} class="d-block " alt="..."  height={500} width={1210} />
    <div class="details carousel-caption d-none d-md-block">
      
        <h5 className="me-1">{x.title}</h5>
        <p>{x.description}</p>
        <h5>{x.genre}</h5>
        <Link to={`/singlePage/${x.id}`}>
        <button id="btn"><span class="material-symbols-outlined">
play_arrow
</span>Watch Now</button></Link>
      </div>
    </div>

              )})}
    
    

  </div>


  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<h2 className="text-white">Sports</h2>
{
  sports.map((x)=>{
    return(
      <div className="games">
        
       <div className="iii">
       <Link to={`/singlePage/${x.id}`}>
       <div class="carousel-item active">
    <img src={x.image} class="moviImage d-block" alt="..." height={190} width={245} />
    <div className="title">
        <h6>{x.title}</h6>
       </div>
    <div class="tt carousel-caption d-none d-md-block">
     
       </div>
       </div></Link>
       
       <div className="moviDetail">
      <div className="btnRow">
      <Link to={`/singlePage/${x.id}`}>
      <button id="btn"><span class="material-symbols-outlined">
play_arrow
</span>Watch Now</button></Link>  <button className="wishList" onClick={()=>addFav(x.title)}>+</button>
      </div>
<h6 className="me-1">{x.year} 
<span id="dot">&#9734; </span>  {x.title} <span id="dot">&#9734; </span></h6>
<p>{x.description}</p>

       </div> 
      </div>
      </div>
    )
  })
}
        </div>
        </div>
    )
}
export default Sports